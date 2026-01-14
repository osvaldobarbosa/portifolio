import { ContentData } from './types';

export const CONTENT: Record<'pt' | 'en', ContentData> = {
  pt: {
    hero: {
      headline: "Eu lidero produtos que transformam decisões em resultados.",
      subheadline: "Produto acontece no encontro entre pessoas, tecnologia e negócio. Meu papel é liderar decisões com contexto, alinhar times e transformar complexidade em soluções que geram impacto real no dia a dia.",
      context: "Liderar produto é navegar na complexidade. Meu trabalho é transformar essa complexidade em soluções que funcionam no mundo real.",
      cards: [
        { title: "Liderança de Produto", description: "Gestão de times e stakeholders em cenários críticos." },
        { title: "Construção Complexa", description: "Arquitetura de soluções para varejo e pagamentos." },
        { title: "Estratégia & Execução", description: "Do discovery à entrega de valor mensurável." },
        { title: "Retail Tech", description: "Deep dive em PDV, TEF e experiências de checkout." },
      ],
      cta: "Explore como eu penso, lidero e construo.",
      stats: [
        { label: "Anos de Experiência", value: "+10" },
        { label: "Sistemas Críticos", value: "Multi" },
        { label: "Impacto no Varejo", value: "High" },
      ]
    },
    about: {
      label: "SOBRE MIM",
      headline: "Construindo produtos que transformam negócios",
      description: [
        "Sou Osvaldo Barbosa Neto, líder de produto com mais de 10 anos de experiência em ambientes de alta complexidade. Minha trajetória é marcada pela construção de produtos que impactam milhões de pessoas, especialmente nos setores de varejo e pagamentos.",
        "Acredito que liderança de produto vai além de roadmaps e métricas. É sobre criar ambientes onde times podem fazer seu melhor trabalho, tomar decisões difíceis com clareza e transformar visão em realidade.",
        "Minha filosofia é simples: complexidade é inevitável, mas confusão é opcional. Meu trabalho é navegar essa complexidade para entregar soluções eficientes."
      ],
      quote: "\"Produto acontece no encontro entre pessoas, tecnologia e negócio.\""
    },
    experience: {
      title: "Trajetória",
      items: [
        {
          id: "1",
          role: "Product Manager",
          company: "Casa Magalhães",
          period: "Set 2025 - Presente",
          description: [
            "Liderança estratégica de produtos para o varejo.",
            "Definição de roadmaps focados em eficiência e escala."
          ],
          skills: ["Product Strategy", "Retail Tech", "Liderança"]
        },
        {
          id: "2",
          role: "Associate Product Manager",
          company: "Grupo Boticário",
          period: "Dez 2022 - Set 2025",
          description: [
            "Definição da visão de produto alinhada às estratégias do Grupo.",
            "Transformação de dores e oportunidades em backlog priorizado.",
            "Atuação em gestão de crises e sustentação de produtos críticos.",
            "Conexão entre times técnicos e stakeholders de negócio."
          ],
          skills: ["Discovery", "OKR", "Stakeholder Management"]
        },
        {
          id: "3",
          role: "Scrum Master | Project Manager",
          company: "Grupo Casa Magalhães",
          period: "Set 2019 - Dez 2022",
          description: [
            "Gestão ágil de projetos de software e facilitação Scrum.",
            "Implementação de cultura Lean e melhoria contínua.",
            "Remoção de impedimentos para times de alta performance."
          ],
          skills: ["Scrum", "Lean", "Agile Coaching"]
        }
      ]
    },
    projects: {
      title: "Cases",
      subtitle: "Não apenas features, mas decisões estratégicas.",
      items: [
        {
          id: "classtrib",
          title: "ClassTrib.com (SaaS)",
          category: "AI & Tax Tech",
          context: "A complexidade da classificação fiscal (NCM) no Brasil gera riscos jurídicos e ineficiência operacional para varejistas e contadores.",
          complexity: "Interpretar descrições de produtos não padronizadas e mapeá-las corretamente em um cenário de legislação tributária dinâmica.",
          role: "Founder & Product Engineer",
          decisions: [
            "Desenvolvimento de motor de IA Generativa para análise semântica e sugestão de NCMs.",
            "Adoção de estratégia PLG (Product-led Growth) para rápida validação de mercado.",
            "Arquitetura escalável focada em performance e simplicidade de uso."
          ],
          result: "SaaS ativo (classtrib.com) automatizando a consulta tributária, reduzindo erros manuais e otimizando o tempo de cadastro de produtos.",
          technologies: ["Generative AI", "React/Next.js", "SaaS"]
        },
        {
          id: "p1",
          title: "Integração PDV + Adyen",
          category: "Payments / Fintech",
          context: "Necessidade de modernizar a camada de pagamentos do PDV para suportar múltiplos adquirentes globais.",
          complexity: "Altíssima criticidade. Qualquer falha impacta diretamente a receita do varejista em tempo real.",
          role: "Lead PM na orquestração técnica e de negócio.",
          decisions: [
            "Priorização de estabilidade sobre novas features no lançamento.",
            "Estratégia de rollout gradual por região para mitigar riscos.",
            "Desenho de fallback automático em caso de falha da adquirente."
          ],
          result: "Redução de latência no checkout e aumento na taxa de aprovação.",
          technologies: ["API Rest", "TEF", "Cloud"]
        },
        {
          id: "p2",
          title: "Evolução do Self Checkout",
          category: "Retail Experience",
          context: "O sistema legado de descontos gerava atrito na experiência do consumidor final no autoatendimento.",
          complexity: "Regras de negócio complexas (combo, leve 3 pague 2) conflitavam com a UX simplificada do totem.",
          role: "Product Manager responsável pelo redesign da jornada.",
          decisions: [
            "Simplificação do motor de promoção no front-end.",
            "Investigação profunda (Discovery) com usuários em loja.",
            "Refatoração do cálculo de carrinho para performance."
          ],
          result: "Aumento da adoção do Self Checkout e redução do tempo de fila.",
          technologies: ["UX Research", "Hardware Integration", "Analytics"]
        },
        {
          id: "p3",
          title: "Produto Patrio (IA + Low Code)",
          category: "Innovation",
          context: "Demanda por criação rápida de aplicações internas sem depender excessivamente de dev senior.",
          complexity: "Equilibrar flexibilidade (Low Code) com governança e segurança corporativa.",
          role: "Visão de Produto e Go-to-Market.",
          decisions: [
            "Foco inicial em casos de uso administrativos para validar o MVP.",
            "Integração nativa com IA para geração de queries.",
            "Definição de guardrails de segurança desde o dia 0."
          ],
          result: "Redução de 40% no tempo de entrega de ferramentas internas.",
          technologies: ["AI/LLM", "Low Code", "SaaS"]
        },
        {
          id: "p4",
          title: "Integração PDV + Shipay",
          category: "Pagamentos",
          context: "Habilitação de pagamentos via Pix e wallets digitais no ponto de venda, integrando o mundo físico ao digital de forma fluida.",
          complexity: "Necessidade de resposta em tempo real no caixa, lidando com instabilidades de rede e múltiplas carteiras digitais.",
          role: "Product Manager",
          decisions: [
            "Escolha da Shipay como hub integrador para agilizar o time-to-market.",
            "Desenvolvimento de fluxo de contingência (QR Code estático) para falhas de rede.",
            "Treinamento simplificado para operadores de caixa visando rápida adoção."
          ],
          result: "Aumento de 15% nas vendas via pagamentos digitais no primeiro trimestre e redução de filas.",
          technologies: ["Pix", "Shipay", "Integração TEF"]
        },
        {
          id: "p5",
          title: "Transformação de Processos Organizacionais",
          category: "Estratégia",
          context: "Análise e redesenho de processos corporativos para aumentar a eficiência operacional e reduzir silos entre departamentos.",
          complexity: "Resistência cultural à mudança e necessidade de mapear processos legados não documentados.",
          role: "Líder de Processos / BPM",
          decisions: [
            "Adoção de BPMN para padronização da documentação.",
            "Realização de workshops de cocriação para engajar stakeholders.",
            "Definição de SLAs claros entre áreas de negócio e tecnologia."
          ],
          result: "Redução de 30% no tempo de ciclo de processos críticos e maior transparência.",
          technologies: ["BPMN", "Lean", "Change Management"]
        },
        {
          id: "p6",
          title: "Gestão de Times Ágeis",
          category: "Liderança",
          context: "Construção e liderança de times de produto de alta performance, focados em entrega contínua de valor.",
          complexity: "Alinhar autonomia dos times com os objetivos estratégicos da empresa em um cenário de crescimento acelerado.",
          role: "Gestão de Produto & Agilidade",
          decisions: [
            "Estruturação de squads multidisciplinares focadas em valor.",
            "Implementação de OKRs para alinhamento de expectativas.",
            "Fomento a uma cultura de feedback contínuo e segurança psicológica."
          ],
          result: "Melhoria no eNPS da equipe e aumento na previsibilidade de entregas.",
          technologies: ["Scrum", "Kanban", "Management 3.0"]
        }
      ]
    },
    skills: {
      title: "Habilidades & Competências",
      subtitle: "Áreas onde construí profundidade ao longo da minha trajetória.",
      categories: [
        { 
          id: "lead", 
          name: "Liderança", 
          skills: [
            { name: "Liderança de Times", level: "Avançado" },
            { name: "Gestão de Stakeholders", level: "Expert" },
            { name: "Mentoria e Desenvolvimento", level: "Avançado" },
            { name: "Comunicação Executiva", level: "Avançado" },
            { name: "Agile/Scrum", level: "Avançado" }
          ] 
        },
        { 
          id: "prod", 
          name: "Produto", 
          skills: [
            { name: "Product Discovery", level: "Intermediário" },
            { name: "Product Strategy", level: "Expert" },
            { name: "Roadmap Planning", level: "Expert" },
            { name: "User Research", level: "Avançado" },
            { name: "Métricas de Produto", level: "Intermediário" }
          ] 
        },
        { 
          id: "tech", 
          name: "Tecnologia", 
          skills: [
            { name: "Sistemas de Pagamento", level: "Avançado" },
            { name: "Low Code / No Code", level: "Intermediário" },
            { name: "Automação de Processos", level: "Avançado" }
          ] 
        },
        { 
          id: "biz", 
          name: "Negócio", 
          skills: [
            { name: "Modelo de Negócio", level: "Expert" },
            { name: "Processos de Negócio", level: "Expert" },
            { name: "Investimentos", level: "Avançado" },
            { name: "Go-to-Market", level: "Intermediário" },
            { name: "Retail Operations", level: "Avançado" }
          ] 
        },
      ]
    },
    education: {
      sectionTitle: "Certificações & Formação",
      labels: {
        certifications: "Certificações",
        academic: "Formação Acadêmica"
      },
      certifications: [
        { institution: "AI Product Manager", degree: "Microsoft", year: "2025" },
        { institution: "Assessor de Investimentos", degree: "Ancord", year: "2025" },
        { institution: "Certified Scrum Product Owner® (CSPO®)", degree: "Scrum Alliance", year: "2023" },
        { institution: "Product Management", degree: "Product School", year: "2023" },
        { institution: "Reaprendizagem Criativa", degree: "Keep Learning School", year: "2020" },
        { institution: "Management 3.0", degree: "Coletivo Ação", year: "2019" }
      ],
      academic: [
        { institution: "PM3", degree: "Formação Product Manager", year: "2024" },
        { institution: "UNIFOR", degree: "MBA Gestão Estratégica de Processos (BPM)", year: "2019" },
        { institution: "UECE", degree: "Bacharelado em Administração", year: "2016" }
      ]
    },
    contact: {
      label: "CONTATO",
      title: "Vamos Conversar",
      description: "Interessado em discutir produto, liderança ou oportunidades? Estou sempre aberto a boas conversas.",
      email: "contato@osvaldobarbosa.com.br",
      linkedin: "https://www.linkedin.com/in/obneto/",
      linkedinLabel: "Conectar no LinkedIn"
    }
  },
  en: {
    hero: {
      headline: "I lead product construction where decisions matter.",
      subheadline: "Product happens at the intersection of people, technology, and business. My job is to transform complexity into solutions that work in the real world.",
      context: "Leading product means navigating complexity. My job is to transform that complexity into solutions that work in the real world.",
      cards: [
        { title: "Product Leadership", description: "Managing teams and stakeholders in critical scenarios." },
        { title: "Complex Building", description: "Solution architecture for retail and payments." },
        { title: "Strategy & Execution", description: "From discovery to measurable value delivery." },
        { title: "Retail Tech", description: "Deep dive into POS, TEF, and checkout experiences." },
      ],
      cta: "Explore how I think, lead, and build.",
      stats: [
        { label: "Years Experience", value: "+10" },
        { label: "Critical Systems", value: "Multi" },
        { label: "Retail Impact", value: "High" },
      ]
    },
    about: {
      label: "ABOUT ME",
      headline: "Building products that transform businesses",
      description: [
        "I am Osvaldo Barbosa Neto, a product leader with over 10 years of experience in high-complexity environments. My trajectory is marked by building products that impact millions of people, especially in the retail and payments sectors.",
        "I believe product leadership goes beyond roadmaps and metrics. It's about creating environments where teams can do their best work, making difficult decisions with clarity, and turning vision into reality.",
        "My philosophy is simple: complexity is inevitable, but confusion is optional. My job is to navigate this complexity to deliver elegant solutions that work."
      ],
      quote: "\"Product happens at the intersection of people, technology, and business.\""
    },
    experience: {
      title: "Trajectory",
      items: [
        {
          id: "1",
          role: "Product Manager",
          company: "Casa Magalhães",
          period: "Sep 2025 - Present",
          description: [
            "Strategic product leadership for retail.",
            "Defining roadmaps focused on efficiency and scale."
          ],
          skills: ["Product Strategy", "Retail Tech", "Leadership"]
        },
        {
          id: "2",
          role: "Associate Product Manager",
          company: "Grupo Boticário",
          period: "Dec 2022 - Sep 2025",
          description: [
            "Defining product vision aligned with Group strategies.",
            "Transforming pains and opportunities into prioritized backlog.",
            "Acting in crisis management and sustaining critical products.",
            "Connecting technical teams and business stakeholders."
          ],
          skills: ["Discovery", "OKR", "Stakeholder Management"]
        },
        {
          id: "3",
          role: "Scrum Master | Project Manager",
          company: "Grupo Casa Magalhães",
          period: "Sep 2019 - Dec 2022",
          description: [
            "Agile software project management and Scrum facilitation.",
            "Implementation of Lean culture and continuous improvement.",
            "Removing impediments for high-performance teams."
          ],
          skills: ["Scrum", "Lean", "Agile Coaching"]
        }
      ]
    },
    projects: {
      title: "Cases",
      subtitle: "Not just features, but strategic decisions.",
      items: [
        {
          id: "classtrib",
          title: "ClassTrib.com (SaaS)",
          category: "AI & Tax Tech",
          context: "Tax classification (NCM) complexity in Brazil creates legal risks and operational inefficiency for retailers and accountants.",
          complexity: "Interpreting non-standard product descriptions and mapping them correctly within a dynamic tax legislation environment.",
          role: "Founder & Product Engineer",
          decisions: [
            "Developing a Generative AI engine for semantic analysis and NCM suggestions.",
            "Adopting a PLG (Product-led Growth) strategy for rapid market validation.",
            "Scalable architecture focused on performance and ease of use."
          ],
          result: "Live SaaS (classtrib.com) automating tax consultation, reducing manual errors, and optimizing product registration time.",
          technologies: ["Generative AI", "React/Next.js", "SaaS"]
        },
        {
          id: "p1",
          title: "POS + Adyen Integration",
          category: "Payments / Fintech",
          context: "Need to modernize the POS payment layer to support multiple global acquirers.",
          complexity: "High criticality. Any failure directly impacts retailer revenue in real-time.",
          role: "Lead PM in technical and business orchestration.",
          decisions: [
            "Prioritizing stability over new features at launch.",
            "Gradual rollout strategy by region to mitigate risks.",
            "Designing automatic fallback in case of acquirer failure."
          ],
          result: "Reduced checkout latency and increased approval rate.",
          technologies: ["API Rest", "TEF", "Cloud"]
        },
        {
          id: "p2",
          title: "Self Checkout Evolution",
          category: "Retail Experience",
          context: "The legacy discount system created friction in the end-consumer experience at self-checkout.",
          complexity: "Complex business rules (combos, buy 3 pay 2) conflicted with the simplified totem UX.",
          role: "Product Manager responsible for journey redesign.",
          decisions: [
            "Simplifying the promotion engine on the front-end.",
            "Deep investigation (Discovery) with users in-store.",
            "Refactoring cart calculation for performance."
          ],
          result: "Increased Self Checkout adoption and reduced queue time.",
          technologies: ["UX Research", "Hardware Integration", "Analytics"]
        },
        {
          id: "p3",
          title: "Patrio Product (AI + Low Code)",
          category: "Innovation",
          context: "Demand for rapid creation of internal apps without excessive reliance on senior devs.",
          complexity: "Balancing flexibility (Low Code) with governance and corporate security.",
          role: "Product Vision and Go-to-Market.",
          decisions: [
            "Initial focus on administrative use cases to validate MVP.",
            "Native integration with AI for query generation.",
            "Definition of security guardrails from day 0."
          ],
          result: "40% reduction in delivery time for internal tools.",
          technologies: ["AI/LLM", "Low Code", "SaaS"]
        },
        {
          id: "p4",
          title: "POS + Shipay Integration",
          category: "Payments",
          context: "Enabling Pix and digital wallet payments at the point of sale, seamlessly integrating the physical and digital worlds.",
          complexity: "Real-time response requirement at the cashier, dealing with network instability and multiple digital wallets.",
          role: "Product Manager",
          decisions: [
            "Choosing Shipay as the integration hub for faster time-to-market.",
            "Developing offline contingency flow (static QR Code).",
            "Simplified training for cashier operators for rapid adoption."
          ],
          result: "15% increase in digital payment sales in the first quarter and queue reduction.",
          technologies: ["Pix", "Shipay", "TEF Integration"]
        },
        {
          id: "p5",
          title: "Organizational Process Transformation",
          category: "Strategy",
          context: "Analysis and redesign of corporate processes to increase operational efficiency and reduce silos between departments.",
          complexity: "Cultural resistance to change and need to map undocumented legacy processes.",
          role: "Process Leader / BPM",
          decisions: [
            "Adoption of BPMN for documentation standardization.",
            "Co-creation workshops to engage stakeholders.",
            "Definition of clear SLAs between business and technology areas."
          ],
          result: "30% reduction in cycle time for critical processes and increased transparency.",
          technologies: ["BPMN", "Lean", "Change Management"]
        },
        {
          id: "p6",
          title: "Agile Team Management",
          category: "Leadership",
          context: "Building and leading high-performance product teams focused on continuous value delivery.",
          complexity: "Aligning team autonomy with the company's strategic objectives in a high-growth scenario.",
          role: "Product Management & Agile",
          decisions: [
            "Structuring multidisciplinary squads focused on value.",
            "Implementing OKRs for expectation alignment.",
            "Fostering a culture of continuous feedback and psychological safety."
          ],
          result: "Improvement in team eNPS and increased delivery predictability.",
          technologies: ["Scrum", "Kanban", "Management 3.0"]
        }
      ]
    },
    skills: {
      title: "Skills & Competencies",
      subtitle: "Areas where I built depth throughout my trajectory.",
      categories: [
        { 
          id: "lead", 
          name: "Leadership", 
          skills: [
            { name: "Team Leadership", level: "Expert" },
            { name: "Stakeholder Management", level: "Expert" },
            { name: "Mentorship & Development", level: "Advanced" },
            { name: "Executive Communication", level: "Expert" },
            { name: "Agile/Scrum", level: "Advanced" }
          ] 
        },
        { 
          id: "prod", 
          name: "Product", 
          skills: [
            { name: "Product Discovery", level: "Intermediate" },
            { name: "Product Strategy", level: "Expert" },
            { name: "Roadmap Planning", level: "Expert" },
            { name: "User Research", level: "Advanced" },
            { name: "Product Metrics", level: "Advanced" }
          ] 
        },
        { 
          id: "tech", 
          name: "Technology", 
          skills: [
            { name: "APIs & Integrations", level: "Intermediate" },
            { name: "Payment Systems", level: "Expert" },
            { name: "Low Code / No Code", level: "Advanced" },
            { name: "Process Automation", level: "Advanced" }
          ] 
        },
        { 
          id: "biz", 
          name: "Business", 
          skills: [
            { name: "Business Model", level: "Expert" },
            { name: "Business Processes", level: "Expert" },
            { name: "Investments", level: "Advanced" },
            { name: "Go-to-Market", level: "Advanced" },
            { name: "Retail Operations", level: "Expert" }
          ] 
        },
      ]
    },
    education: {
      sectionTitle: "Education & Certifications",
      labels: {
        certifications: "Certifications",
        academic: "Academic Education"
      },
      certifications: [
        { institution: "AI Product Manager", degree: "Microsoft", year: "2025" },
        { institution: "Investment Advisor", degree: "Ancord", year: "2025" },
        { institution: "Certified Scrum Product Owner® (CSPO®)", degree: "Scrum Alliance", year: "2023" },
        { institution: "Product Management", degree: "Product School", year: "2023" },
        { institution: "Creative Relearning", degree: "Keep Learning School", year: "2020" },
        { institution: "Management 3.0", degree: "Coletivo Ação", year: "2019" }
      ],
      academic: [
        { institution: "PM3", degree: "Product Manager Training", year: "2024" },
        { institution: "UNIFOR", degree: "MBA Strategic Process Mgmt (BPM)", year: "2019" },
        { institution: "UECE", degree: "BBA Business Administration", year: "2016" }
      ]
    },
    contact: {
      label: "CONTACT",
      title: "Let's Talk",
      description: "Interested in discussing product, leadership, or opportunities? I'm always open to good conversations.",
      email: "contato@osvaldobarbosa.com.br",
      linkedin: "https://www.linkedin.com/in/obneto/",
      linkedinLabel: "Connect on LinkedIn"
    }
  }
};