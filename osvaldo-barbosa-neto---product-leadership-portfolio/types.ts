export enum TaxRegime {
  SIMPLES = 'Simples Nacional',
  PRESUMIDO = 'Lucro Presumido',
  REAL = 'Lucro Real'
}

export enum ProductType {
  BEM = 'Bem Material',
  SERVICO = 'Serviço',
  BEM_SERVICO = 'Bem + Serviço'
}

export enum OperationType {
  INTERNA = 'Interna (Estadual)',
  INTERESTADUAL = 'Interestadual'
}

// Based on the columns provided in your CSV reference
export interface CClassTribDefinition {
  cst: string;
  cClassTrib: string;
  name: string; // Nome cClassTrib
  description: string;
  legalText: string; // LC Redação (Texto completo da lei/artigo)
  legalBasis: string; // LC 214/25 reference (e.g. Art. 147)
  taxRateType: string; // Tipo de Alíquota (Padrão, Reduzida, Zero, etc.)
  pRedIBS: number; // % Reduction IBS
  pRedCBS: number; // % Reduction CBS
  indicators: {
    ind_gTribRegular: string;
    ind_gCredPresOper: string;
    ind_gMonoPadrao: string;
  };
  link: string;
}

export interface TaxInput {
  productName: string;
  productDesc?: string;
  categoryCode?: string; 
  ncm?: string;
  originalLine?: string; // Armazena a linha original para exportação em layout fixo
  type: ProductType;
  regime: TaxRegime;
  ufOrigin: string;
  ufDest: string;
  opType: OperationType;
  establishmentType?: string; // Novo campo para contexto do estabelecimento
}

export interface AlternativeClassification {
  definition: CClassTribDefinition;
  condition: string;
}

export interface TaxResult {
  input: TaxInput;
  definition: CClassTribDefinition;
  isException: boolean;
  exceptionType?: string;
  mainTax: string; // "IBS + CBS" usually
  observations: string[];
  timestamp: string;
  sources?: { title: string; uri: string }[];
  alternatives?: AlternativeClassification[];
}