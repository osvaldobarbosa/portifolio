import React, { useState, useRef } from 'react';
import Layout from './components/Layout';
import ProductForm from './components/ProductForm';
import ResultCard from './components/ResultCard';
import BatchSummary from './components/BatchSummary';
import { TaxInput, TaxResult, ProductType, TaxRegime, OperationType } from './types';
import { classifyProductWithAI, processBatchOptimized, generateCsvContent, generateFixedTextContent } from './services/taxEngine';
import { Upload, Trash2, Loader2, FileSpreadsheet, FileText, XCircle, List, Info, MessageSquare, Building2 } from 'lucide-react';

const App: React.FC = () => {
  const [results, setResults] = useState<TaxResult[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Estado para Tipo de Estabelecimento (Global para Single e Batch)
  const [establishmentType, setEstablishmentType] = useState('GERAL');
  
  // Estados para processamento em lote OTIMIZADO
  const [batchMode, setBatchMode] = useState(false);
  const [batchStats, setBatchStats] = useState({ current: 0, totalUnique: 0, totalItems: 0 });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const stopProcessingRef = useRef(false);

  const handleAnalyze = async (input: TaxInput) => {
    setLoading(true);
    setBatchMode(false);
    try {
      const result = await classifyProductWithAI(input);
      setResults([result]);
    } catch (error: any) {
      const msg = error?.message || JSON.stringify(error) || "";
      if (msg.includes('429') || msg.toLowerCase().includes('resource_exhausted')) {
        alert("Limite de cota (429) do Gemini atingido. Aguarde cerca de 1 minuto antes de tentar novamente.");
      } else {
        alert("Ocorreu um erro ao processar a classificação. Tente novamente.");
      }
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    if(window.confirm("Deseja limpar todas as análises?")) {
      setResults([]);
      setBatchMode(false);
      setBatchStats({ current: 0, totalUnique: 0, totalItems: 0 });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleStopBatch = () => {
    if (window.confirm("Deseja interromper? O arquivo parcial poderá ser exportado.")) {
      stopProcessingRef.current = true;
    }
  };

  const handleDownloadCsv = () => {
    if (results.length === 0) return;
    const csvContent = generateCsvContent(results);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ClassTrib_Export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadTxt = () => {
    if (results.length === 0) return;
    const txtContent = generateFixedTextContent(results);
    const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ClassTrib_FixedLayout_${new Date().toISOString().slice(0,10)}.txt`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const processBatchFile = async (text: string, isTxt: boolean) => {
    const lines = text.split(/\r?\n/).filter(line => line.trim().length > 10);
    if (lines.length === 0) {
        alert("Arquivo vazio ou formato inválido.");
        return;
    }

    let startIndex = 0;
    if (!isTxt) {
        const firstLine = lines[0].toLowerCase();
        if (firstLine.includes('ean') || firstLine.includes('codigo') || firstLine.includes('desc')) {
            startIndex = 1;
        }
    }

    const itemsToProcessRaw = lines.slice(startIndex);
    const totalItems = itemsToProcessRaw.length;
    if (totalItems === 0) return;

    // Switch to batch mode UI
    setBatchMode(true);
    setResults([]);
    setBatchStats({ current: 0, totalUnique: 0, totalItems });
    setLoading(true);
    stopProcessingRef.current = false;

    // Parse all inputs first
    const inputs: TaxInput[] = itemsToProcessRaw.map(line => {
       let productName = '';
        let categoryHint = '';
        let ncmFromFile = '';

        if (isTxt) {
            if (line.length >= 610) {
              const ean = line.substring(590, 610).trim();
              ncmFromFile = line.substring(528, 536).trim();
              productName = ean ? `EAN ${ean}` : `Item NCM ${ncmFromFile}`;
            } else {
              const ean = line.substring(18, 31).trim();
              const desc = line.substring(31, 100).trim();
              if (line.length >= 308) ncmFromFile = line.substring(300, 308).trim();
              productName = `${ean} ${desc}`.trim();
              
               if (line.length >= 346) {
                  categoryHint = line.substring(331, 346).trim();
               }
            }
        } else {
            const cols = line.split(/[,;]/);
            if (cols.length >= 2) {
                productName = `${cols[0].trim()} - ${cols[1].trim()}`; 
                if (cols.length > 2 && /^\d{8}$/.test(cols[2].trim())) {
                  ncmFromFile = cols[2].trim();
                }
            } else {
                productName = cols[0].trim();
            }
        }

        return {
            productName: productName.replace(/"/g, ''),
            categoryCode: categoryHint || undefined, 
            ncm: ncmFromFile || undefined,
            type: ProductType.BEM,
            regime: TaxRegime.REAL,
            ufOrigin: 'CE',
            ufDest: 'CE',
            opType: OperationType.INTERNA,
            originalLine: isTxt ? line : undefined,
            establishmentType: establishmentType // Apply the globally selected type to batch items
        };
    });

    try {
      // Use the optimized processor
      const processedResults = await processBatchOptimized(
        inputs,
        (processed, totalUniqueCount) => {
          setBatchStats(prev => ({ ...prev, current: processed, totalUnique: totalUniqueCount }));
        },
        () => stopProcessingRef.current
      );
      setResults(processedResults);
    } catch (err) {
      console.error("Batch error", err);
      alert("Erro durante o processamento do lote.");
    } finally {
      setLoading(false);
      stopProcessingRef.current = false;
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isTxt = file.name.toLowerCase().endsWith('.txt');
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target?.result as string;
      await processBatchFile(text, isTxt);
      if (fileInputRef.current) fileInputRef.current.value = '';
    };
    reader.readAsText(file);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
           <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 text-sm text-blue-800 mb-4 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="text-gov-blue flex-shrink-0 mt-0.5" size={20} />
                <div className="space-y-2">
                  <h4 className="font-bold text-gov-blue">Como funciona o ClassTrib?</h4>
                  <p className="leading-relaxed">
                    Nossa IA analisa seu cadastro agrupando itens por <strong>NCM</strong>. Isso garante que milhares de produtos sejam classificados em minutos, mapeando-os automaticamente para as novas regras da <strong>Reforma Tributária (IBS/CBS)</strong> e identificando benefícios fiscais para exportação imediata.
                  </p>
                </div>
              </div>
           </div>
           
           <ProductForm 
             onAnalyze={handleAnalyze} 
             isLoading={loading} 
             establishmentType={establishmentType}
             onEstablishmentChange={setEstablishmentType}
           />
           
           <div className="flex flex-col gap-3">
                <input 
                    type="file" 
                    accept=".csv,.txt" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    className="hidden" 
                />
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                  <p className="text-xs text-slate-500 mb-2 font-medium flex items-center gap-1">
                    <Building2 size={12}/> O arquivo importado usará o contexto selecionado acima ({establishmentType}).
                  </p>
                  <button 
                    onClick={triggerFileUpload}
                    disabled={loading}
                    className={`w-full bg-slate-700 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-md shadow flex items-center justify-center gap-2 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Upload size={18} />
                    Importar Cadastro (CSV / TXT)
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-100 p-1.5 rounded border border-slate-200">
                    <FileSpreadsheet size={12} className="text-emerald-600" />
                    <span>CSV (EAN, Desc)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-100 p-1.5 rounded border border-slate-200">
                    <FileText size={12} className="text-blue-600" />
                    <span>TXT (Offset 528 NCM, 590 EAN)</span>
                  </div>
                </div>
                
                {loading && batchMode && (
                   <button 
                        onClick={handleStopBatch}
                        className="w-full flex items-center justify-center gap-1.5 text-sm font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 py-2 rounded-md border border-red-200 transition-colors mt-2"
                    >
                        <XCircle size={16} />
                        Parar Lote
                    </button>
                )}

                {results.length > 0 && !loading && (
                   <button 
                      onClick={handleClear}
                      className="w-full bg-white hover:bg-red-50 text-red-600 border border-red-200 font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2 transition"
                    >
                      <Trash2 size={18} />
                      Limpar
                    </button>
                )}
           </div>

           {/* Seção de Feedback */}
           <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-800 mb-3">
                <MessageSquare size={18} className="text-gov-blue" />
                <h4 className="font-bold text-sm">Feedback e Sugestões</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Ajude-nos a evoluir! Se encontrou algum erro na classificação ou tem sugestões de melhoria, entre em contato.
              </p>
              <a 
                href="mailto:classtrib@osvaldobarbosa.com.br?subject=Feedback ClassTrib"
                className="block w-full text-center bg-white hover:bg-slate-100 text-gov-blue border border-gov-blue font-semibold py-2 px-4 rounded text-xs transition-colors"
              >
                Enviar Sugestão
              </a>
           </div>
        </div>

        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-4">
             <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
               <span className="bg-slate-200 text-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
               Painel de Classificação
             </h2>
          </div>

          {/* Conditional Rendering: Batch Dashboard OR List of Cards */}
          {batchMode ? (
            <div className="space-y-6">
              <BatchSummary 
                 totalItems={batchStats.totalItems}
                 processedCount={batchStats.current}
                 totalUnique={batchStats.totalUnique}
                 results={results}
                 isProcessing={loading}
                 onDownloadCsv={handleDownloadCsv}
                 onDownloadTxt={handleDownloadTxt}
              />
              
              {/* Sample list (Preview) */}
              {results.length > 0 && (
                <div className="opacity-75">
                   <h4 className="text-sm font-semibold text-slate-500 mb-3 flex items-center gap-2">
                     <List size={16}/> Amostra dos últimos itens processados (Preview)
                   </h4>
                   <div className="space-y-4">
                     {results.slice(0, 5).map((res, index) => (
                        <ResultCard key={`preview-${index}`} result={res} />
                     ))}
                     {results.length > 5 && (
                       <div className="text-center p-4 text-slate-400 text-sm italic bg-slate-50 rounded border border-slate-100">
                         ... e mais {results.length - 5} itens. Use a exportação para ver todos.
                       </div>
                     )}
                   </div>
                </div>
              )}
            </div>
          ) : (
            <>
              {results.length === 0 ? (
                <div className="bg-white rounded-lg border-2 border-dashed border-slate-300 p-12 text-center">
                  <div className="mx-auto bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {loading ? <Loader2 className="text-gov-blue w-8 h-8 animate-spin" /> : <FileSpreadsheet className="text-slate-400 w-8 h-8" />}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900">
                    {loading ? "Processando..." : "Nenhum produto analisado"}
                  </h3>
                  <p className="text-slate-500 mt-1 max-w-md mx-auto text-sm">
                    Importe seu arquivo TXT. O sistema agrupará automaticamente por NCM para performance máxima.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {results.map((res, index) => (
                    <ResultCard key={`${res.timestamp}-${index}`} result={res} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default App;