import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  FlaskConical, 
  Calculator, 
  Sprout, 
  Lightbulb, 
  Activity, 
  Ruler, 
  Users, 
  Leaf, 
  Sun, 
  Zap, 
  Droplets,
  Heart,
  Recycle,
  Thermometer,
  Microscope,
  Compass,
  BarChart3,
  ArrowRight,
  Bot,
  Copy,
  Check,
  X,
  BrainCircuit,
  GraduationCap,
  Target,
  Link as LinkIcon,
  Menu
} from 'lucide-react';

const EducationalPlan = () => {
  const [activeTab, setActiveTab] = useState('5ano');
  const [selectedTrimester, setSelectedTrimester] = useState(null);
  const [copiedPrompt, setCopiedPrompt] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Bloqueia rolagem do fundo quando modal está aberto
  useEffect(() => {
    if (selectedTrimester) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTrimester]);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(id);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  // --- DADOS COMPLETOS ---
  const data = {
    '5ano': {
      title: '5º Ano: Exploradores da Natureza',
      theme: 'Matéria, Energia e Astronomia',
      icon: <Sprout size={24} />,
      color: 'from-emerald-500 to-teal-600',
      description: 'Uma jornada de descoberta sobre os ciclos naturais, o funcionamento do nosso corpo e os mistérios do céu.',
      stats: { math: 35, science: 65 },
      trimesters: [
        {
          id: 1,
          title: '1º Trimestre: Água e Vida',
          question: 'Como a água viaja pelo nosso planeta?',
          focus: 'Ciclos Naturais e Medidas',
          project: 'Terrário Científico',
          projectDesc: 'Construção de um mini-ecossistema autossustentável.',
          science: 'Ciclo hidrológico, mudanças de estado físico.',
          math: 'Volume, capacidade (L/ml), estimativa.',
          skills: ['EF05CI02', 'EF05MA19', 'EF05CI04'],
          icon: <Droplets className="text-blue-500" />,
          evaluation: "Capacidade de registrar dados observacionais diários e relacionar a condensação com o ciclo da água.",
          resources: ["Simulador do Ciclo da Água (ANA)", "Vídeo: A gota d'água"],
          activities: [
            {
              title: "Construção do Terrário",
              step: "Montagem prática com camadas e observação de 4 semanas.",
              aiPrompt: "Aja como um professor especialista em PBL. Crie um roteiro passo a passo para alunos de 10 anos montarem um terrário fechado. Inclua lista de materiais recicláveis e uma tabela de observação científica (Checklist) para registrar: condensação, saúde das plantas e temperatura estimada."
            },
            {
              title: "Diário de Bordo Hidrológico",
              step: "Registro e ilustração das mudanças de estado físico.",
              aiPrompt: "Crie um modelo de 'Diário de Bordo Científico' para o projeto do terrário. Inclua perguntas disparadoras para reflexão ('Para onde foi a água?'), espaço para desenho de observação e um glossário visual com termos: Precipitação, Condensação e Evaporação."
            }
          ]
        },
        {
          id: 2,
          title: '2º Trimestre: Nutrição Inteligente',
          question: 'O que realmente estamos comendo?',
          focus: 'Saúde e Proporcionalidade',
          project: 'Detetives dos Rótulos',
          projectDesc: 'Análise crítica de alimentos industrializados.',
          science: 'Pirâmide alimentar, sistema digestório.',
          math: 'Frações, porcentagem, conversão (g/kg).',
          skills: ['EF05CI08', 'EF05MA03', 'EF05CI09'],
          icon: <Heart className="text-red-500" />,
          evaluation: "Análise crítica de rótulos e uso correto de frações para representar quantidades de açúcar.",
          resources: ["Tabela Nutricional (ANVISA)", "App leitor de rótulos"],
          activities: [
            {
              title: "Pesagem do Açúcar Oculto",
              step: "Pesar açúcar de refrigerantes e comparar.",
              aiPrompt: "Crie uma atividade prática chamada 'Quanto açúcar tem aqui?'. O objetivo é ensinar conversão de medidas (gramas para colheres). Gere uma tabela comparativa de 5 bebidas populares e 3 problemas matemáticos contextualizados sobre consumo semanal de açúcar."
            }
          ]
        },
        {
          id: 3,
          title: '3º Trimestre: Olhando para o Céu',
          question: 'Como usamos o Sol para marcar o tempo?',
          focus: 'Astronomia e Geometria',
          project: 'Construção de Gnomon',
          projectDesc: 'Relógio de sol e movimento da Terra.',
          science: 'Movimento aparente do Sol, pontos cardeais.',
          math: 'Geometria espacial, medidas de sombra.',
          skills: ['EF05CI10', 'EF05MA16', 'EF05CI11'],
          icon: <Sun className="text-orange-500" />,
          evaluation: "Compreensão da relação entre a posição do sol e o tamanho da sombra; precisão nas medidas.",
          resources: ["Stellarium Web", "Bússola caseira"],
          activities: [
            {
              title: "Rastreando Sombras",
              step: "Medição de sombras no pátio a cada hora.",
              aiPrompt: "Desenvolva um plano de aula ao ar livre sobre 'Gnomon e Sombras'. A atividade deve envolver medir o comprimento da sombra de uma vareta a cada hora. Inclua planilha de coleta de dados e perguntas para discussão sobre a rotação da Terra."
            }
          ]
        }
      ]
    },
    '6ano': {
      title: '6º Ano: Investigadores da Matéria',
      theme: 'Matéria, Medidas e Misturas',
      icon: <FlaskConical size={24} />,
      color: 'from-blue-500 to-indigo-600',
      description: 'Iniciação ao método científico rigoroso, medição precisa e separação de misturas.',
      stats: { math: 40, science: 60 },
      trimesters: [
        {
          id: 1,
          title: '1º Trimestre: O Cientista Medidor',
          question: 'Como medir o mundo com precisão?',
          focus: 'Método Científico e Medidas',
          project: 'Laboratório de Densidade',
          projectDesc: 'Experimentos de flutuabilidade e cálculo de massa/volume.',
          science: 'Propriedades da matéria, densidade.',
          math: 'Sistemas de medidas, geometria plana.',
          skills: ['EF06CI01', 'EF06MA24', 'EF06MA29'],
          icon: <Ruler className="text-indigo-500" />,
          evaluation: "Uso correto de instrumentos de medida (régua, balança) e aplicação da fórmula de densidade.",
          resources: ["Balança digital", "Kit de sólidos geométricos"],
          activities: [
            {
              title: "Torre de Líquidos",
              step: "Criar coluna de densidade (mel, água, óleo).",
              aiPrompt: "Crie um roteiro de experimento 'Torre de Densidade' usando a metodologia POE (Prever, Observar, Explicar). Inclua explicação científica acessível para 6º ano sobre densidade e um quadro para os alunos desenharem o resultado final."
            },
            {
              title: "O Mistério do Cubo",
              step: "Cálculo de volume de sólidos regulares.",
              aiPrompt: "Gere 5 desafios matemáticos 'Enigmas de Laboratório' envolvendo cálculo de volume de cubos e paralelepípedos. Exemplo: 'Um cientista precisa armazenar 1 litro de um líquido raro em uma caixa 10x10x10cm. Cabe?'"
            }
          ]
        },
        {
          id: 2,
          title: '2º Trimestre: Mestres das Misturas',
          question: 'Como separar o que está misturado?',
          focus: 'Separação de Misturas',
          project: 'Engenharia de Filtros',
          projectDesc: 'Transformar água suja em limpa.',
          science: 'Métodos de separação, filtração.',
          math: 'Frações, proporção, volume.',
          skills: ['EF06CI03', 'EF06MA07', 'EF06MA09'],
          icon: <FlaskConical className="text-teal-500" />,
          evaluation: "Eficiência do filtro construído e justificativa da escolha dos materiais filtrantes.",
          resources: ["Vídeo: ETA (Estação de Tratamento)", "Simulador de Misturas"],
          activities: [
            {
              title: "Desafio do Filtro",
              step: "Competição de purificação de água.",
              aiPrompt: "Atue como engenheiro ambiental. Crie uma Rubrica de Avaliação para o projeto 'Filtro de Água'. Critérios: 1. Clareza da água (Visual), 2. Tempo de filtração (Vazão), 3. Justificativa dos materiais (Areia, carvão). Atribua pesos para cada critério."
            }
          ]
        },
        {
          id: 3,
          title: '3º Trimestre: Sustentabilidade',
          question: 'Para onde vai o lixo?',
          focus: 'Materiais e Reciclagem',
          project: 'Oficina de Papel Reciclado',
          projectDesc: 'Reciclagem e análise geométrica.',
          science: 'Materiais sintéticos, impacto ambiental.',
          math: 'Sólidos geométricos, gráficos.',
          skills: ['EF06CI04', 'EF06MA17', 'EF06MA32'],
          icon: <Recycle className="text-green-500" />,
          evaluation: "Produção do papel reciclado e identificação correta de formas geométricas nas embalagens.",
          resources: ["Documentário: Ilha das Flores", "Moldes geométricos"],
          activities: [
            {
              title: "Papel Geométrico",
              step: "Produzir papel em moldes específicos.",
              aiPrompt: "Crie um tutorial para fazer papel reciclado. Adicione etapa de 'Matemática Maker': medir a área da folha produzida e calcular a economia de água (1kg papel novo = X litros água) proporcionalmente à massa produzida."
            }
          ]
        }
      ]
    },
    '7ano': {
      title: '7º Ano: Engenheiros da Energia',
      theme: 'Energia, Máquinas e Vida',
      icon: <Zap size={24} />,
      color: 'from-amber-500 to-orange-600',
      description: 'Conexão entre física (máquinas) e biologia (vida), explorando fluxos de energia.',
      stats: { math: 50, science: 50 },
      trimesters: [
        {
          id: 1,
          title: '1º Trimestre: Máquinas Simples',
          question: 'Como multiplicar nossa força?',
          focus: 'Alavancas e Ângulos',
          project: 'Desafio da Catapulta',
          projectDesc: 'Máquinas medievais e balística.',
          science: 'Máquinas simples, força.',
          math: 'Ângulos, polígonos, média.',
          skills: ['EF07CI01', 'EF07MA23', 'EF07MA27'],
          icon: <Compass className="text-amber-600" />,
          evaluation: "Construção funcional da catapulta e análise estatística dos lançamentos (média/alcance).",
          resources: ["Simulador de Projéteis", "História das Invenções"],
          activities: [
            {
              title: "Campeonato de Catapultas",
              step: "Lançamento e medição de distâncias.",
              aiPrompt: "Desenvolva regulamento para 'Torneio de Catapultas'. Inclua regras de segurança e sistema de pontuação matemática: (Distância) + (Precisão) - (Peso da máquina). Gere tabela de registro."
            },
            {
              title: "Geometria do Lançamento",
              step: "Teste de ângulos (30º, 45º, 60º).",
              aiPrompt: "Crie roteiro de investigação científica para testar se o ângulo de lançamento altera a distância. O aluno deve manter a força constante, variar o ângulo e gerar gráfico de linhas."
            }
          ]
        },
        {
          id: 2,
          title: '2º Trimestre: Calor em Equilíbrio',
          question: 'Como controlar a temperatura?',
          focus: 'Termodinâmica',
          project: 'Garrafa Térmica Maker',
          projectDesc: 'Isolamento térmico eficiente.',
          science: 'Propagação de calor, isolantes.',
          math: 'Números inteiros, equações.',
          skills: ['EF07CI03', 'EF07MA04', 'EF07MA18'],
          icon: <Thermometer className="text-red-500" />,
          evaluation: "Eficácia do isolamento térmico (menor variação de temperatura) e resolução de equações térmicas.",
          resources: ["Termômetros digitais", "Gráficos de resfriamento"],
          activities: [
            {
              title: "Desafio do Gelo",
              step: "Teste de materiais isolantes.",
              aiPrompt: "Sugira 5 materiais isolantes acessíveis e crie planilha de controle para medir o derretimento de um cubo de gelo a cada 10 min em diferentes caixas. Inclua perguntas sobre condução e convecção."
            }
          ]
        },
        {
          id: 3,
          title: '3º Trimestre: Matemática da Vida',
          question: 'Quanta vida existe aqui?',
          focus: 'Biodiversidade e Estatística',
          project: 'Censo da Biodiversidade',
          projectDesc: 'Mapeamento de espécies escolar.',
          science: 'Biomas, ecossistemas.',
          math: 'Estatística, amostragem.',
          skills: ['EF07CI07', 'EF07MA35', 'EF07MA37'],
          icon: <Leaf className="text-emerald-600" />,
          evaluation: "Rigor na coleta de dados (amostragem) e interpretação dos gráficos de biodiversidade.",
          resources: ["App iNaturalist", "Guias de campo"],
          activities: [
            {
              title: "Quadrado de Amostragem",
              step: "Contagem de espécies em 1m².",
              aiPrompt: "Explique a técnica do 'Quadrat' para 7º ano. Crie guia de campo para desenhar plantas/insetos encontrados no quadrado e tabela de frequência. Objetivo: calcular 'riqueza de espécies'."
            }
          ]
        }
      ]
    },
    '8ano': {
      title: '8º Ano: Inovadores Sustentáveis',
      theme: 'Eletricidade e Corpo Humano',
      icon: <Lightbulb size={24} />,
      color: 'from-purple-500 to-pink-600',
      description: 'Maturidade científica com foco em sistemas complexos e modelagem matemática.',
      stats: { math: 55, science: 45 },
      trimesters: [
        {
          id: 1,
          title: '1º Trimestre: Eletricidade',
          question: 'Como gerar energia?',
          focus: 'Circuitos e Potenciação',
          project: 'Circuitos com Frutas',
          projectDesc: 'Gerar energia com limões.',
          science: 'Tensão, corrente, circuitos.',
          math: 'Potenciação, notação científica.',
          skills: ['EF08CI01', 'EF08MA01', 'EF08MA06'],
          icon: <Zap className="text-yellow-500" />,
          evaluation: "Montagem correta do circuito e cálculos de potência/voltagem.",
          resources: ["Simulador PHET: Circuitos", "Multímetro"],
          activities: [
            {
              title: "A Bateria de Limão",
              step: "Circuito em série para LED.",
              aiPrompt: "Escreva guia de 'Troubleshooting' (Resolução de Problemas) para Bateria de Limão. Liste problemas comuns (LED apagado) e explicações científicas (ligação série/paralelo, oxidação)."
            }
          ]
        },
        {
          id: 2,
          title: '2º Trimestre: Consumo Consciente',
          question: 'Quanto custa energia?',
          focus: 'Eficiência e Financeira',
          project: 'Auditoria Energética',
          projectDesc: 'Análise da conta de luz.',
          science: 'Consumo (kWh), potência.',
          math: 'Porcentagem, juros, regra de três.',
          skills: ['EF08CI02', 'EF08MA04', 'EF08MA13'],
          icon: <BarChart3 className="text-green-600" />,
          evaluation: "Precisão nos cálculos de consumo (kWh) e viabilidade das propostas de economia.",
          resources: ["Conta de luz modelo", "Calculadora de consumo"],
          activities: [
            {
              title: "Detetives da Energia",
              step: "Calcular consumo escolar.",
              aiPrompt: "Crie planilha modelo para 'Auditoria Energética'. Colunas: Aparelho, Potência (W), Uso Diário (h), Consumo Mensal (kWh), Custo (R$). Inclua fórmulas para preenchimento."
            }
          ]
        },
        {
          id: 3,
          title: '3º Trimestre: Clima e Corpo',
          question: 'Como o ambiente nos afeta?',
          focus: 'Clima e Modelagem',
          project: 'Estação Meteorológica',
          projectDesc: 'Medir chuva e vento.',
          science: 'Mudanças climáticas, respiração.',
          math: 'Volume (cilindros), dados.',
          skills: ['EF08CI14', 'EF08MA19', 'EF08MA22'],
          icon: <Activity className="text-red-400" />,
          evaluation: "Construção do instrumento, calibração matemática e correlação dos dados climáticos com saúde.",
          resources: ["Dados INMET", "Modelo de pulmão"],
          activities: [
            {
              title: "Construindo o Pluviômetro",
              step: "Medidor de chuva com PET.",
              aiPrompt: "Gere roteiro interdisciplinar Matemática/Geografia. Atividade: Pluviômetro. Foco na matemática do volume do cilindro (V = π.r².h) para calibrar a régua de medição em milímetros."
            }
          ]
        }
      ]
    }
  };

  const currentData = data[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700 selection:bg-indigo-100 selection:text-indigo-800">
      
      {/* --- HEADER RESPONSIVO --- */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center">
            
            {/* Logo e Título */}
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 text-white p-2 rounded-xl shadow-lg shadow-indigo-200">
                <BookOpen size={20} md:size={24} />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-slate-800 tracking-tight leading-tight">
                  Práticas Experimentais
                </h1>
                <p className="text-[10px] md:text-xs text-indigo-600 font-bold uppercase tracking-wider hidden sm:block">
                  Planejamento Integrado • BNCC & CRMG
                </p>
              </div>
            </div>

            {/* Identificação do Professor (Desktop) */}
            <div className="hidden md:block text-right bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
              <p className="text-sm font-bold text-slate-800 flex items-center justify-end gap-2">
                <GraduationCap size={16} className="text-indigo-500"/>
                Profª. Luciene Martins de Souza Ferreira
              </p>
              <p className="text-xs text-slate-500">Ciências da Natureza e Matemática</p>
            </div>

            {/* Menu Mobile Button (Apenas visual neste caso, pois as abas são a navegação principal) */}
            <div className="md:hidden">
               <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                 Profª. Luciene
               </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        
        {/* --- NAVIGATION (SCROLLABLE TABS ON MOBILE) --- */}
        <div className="relative mb-8 md:mb-12">
          {/* Sombra de indicação de scroll lateral mobile */}
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <nav className="flex overflow-x-auto pb-4 gap-3 md:justify-center snap-x no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {Object.keys(data).map((year) => (
              <button
                key={year}
                onClick={() => {setActiveTab(year); setSelectedTrimester(null);}}
                className={`
                  flex-shrink-0 snap-center
                  group relative px-4 py-3 md:px-5 md:py-3 rounded-2xl font-bold text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-sm border-2
                  ${activeTab === year 
                    ? `bg-white border-indigo-500 text-indigo-700 shadow-indigo-100 scale-100 md:transform md:-translate-y-1 ring-2 ring-indigo-50 ring-offset-1` 
                    : 'bg-white border-transparent text-slate-400 hover:bg-slate-50 hover:text-slate-600 hover:border-slate-200'}
                `}
              >
                <div className={`
                  p-1.5 rounded-lg transition-colors
                  ${activeTab === year ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}
                `}>
                  {React.cloneElement(data[year].icon, { size: 18 })}
                </div>
                {year.replace('ano', 'º Ano')}
              </button>
            ))}
          </nav>
        </div>

        {/* --- HERO SECTION --- */}
        <div className={`bg-gradient-to-br ${currentData.color} rounded-3xl p-6 md:p-8 text-white shadow-xl mb-8 md:mb-12 relative overflow-hidden`}>
          <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12 mix-blend-overlay pointer-events-none">
            <Microscope size={250} md:size={400} />
          </div>
          
          <div className="relative z-10 grid lg:grid-cols-3 gap-8 md:gap-10 items-center">
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 border border-white/10">
                <Lightbulb size={12} />
                Tema: {currentData.theme}
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {currentData.title}
              </h2>
              <p className="text-sm md:text-lg text-white/90 leading-relaxed font-medium max-w-2xl">
                {currentData.description}
              </p>
            </div>

            {/* Stats Card - Mobile Friendly */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-inner">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-white/80">
                <Activity size={14} /> Equilíbrio Curricular
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Ciências</span>
                    <span>{currentData.stats.science}%</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.5)]" style={{ width: `${currentData.stats.science}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Matemática</span>
                    <span>{currentData.stats.math}%</span>
                  </div>
                  <div className="h-2 bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-300 shadow-[0_0_10px_rgba(147,197,253,0.5)]" style={{ width: `${currentData.stats.math}%` }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- TRIMESTERS GRID (Responsive: 1col mobile -> 2col tablet -> 3col desktop) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentData.trimesters.map((tri) => (
            <div key={tri.id} className="flex flex-col h-full transform transition-all duration-300 hover:-translate-y-1">
              
              {/* Card Principal */}
              <div className="group bg-white rounded-t-2xl p-6 border border-slate-200 border-b-0 shadow-sm hover:shadow-lg flex-grow relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="flex justify-between items-start mb-5">
                  <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                    {tri.id}º Trimestre
                  </div>
                  <div className="text-slate-400 group-hover:text-indigo-500 transition-colors p-2 bg-slate-50 rounded-full group-hover:bg-indigo-50">
                    {tri.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-indigo-700 transition-colors">
                  {tri.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium italic mb-6 border-l-2 border-indigo-200 pl-3">
                  "{tri.question}"
                </p>

                <div className="space-y-4">
                  <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                    <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-[10px] uppercase tracking-wider">
                      <Users size={12} />
                      Projeto Principal
                    </div>
                    <p className="font-bold text-slate-800 mb-1 text-sm">{tri.project}</p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">{tri.projectDesc}</p>
                  </div>

                  <div className="space-y-2 pt-2 text-xs">
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-emerald-600 uppercase min-w-[75px]">Ciências:</span>
                      <span className="text-slate-600 leading-snug truncate">{tri.science}</span>
                    </div>
                    <div className="flex gap-2 items-start">
                      <span className="font-bold text-blue-600 uppercase min-w-[75px]">Matemática:</span>
                      <span className="text-slate-600 leading-snug truncate">{tri.math}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botão de Ação Full Width Touch-Friendly */}
              <button 
                onClick={() => setSelectedTrimester(tri)}
                className="bg-slate-50 border border-t-0 border-slate-200 rounded-b-2xl p-4 text-indigo-600 font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-50 hover:text-indigo-700 transition-colors group active:bg-indigo-100"
              >
                <BrainCircuit size={18} />
                Ver Atividades & Avaliação
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* --- MODAL DETALHADO (FULLSCREEN ON MOBILE, CENTERED ON DESKTOP) --- */}
        {selectedTrimester && (
          <div className="fixed inset-0 z-50 flex items-center justify-center sm:p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
            <div 
              className="bg-white w-full h-full sm:h-auto sm:max-h-[90vh] sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col sm:max-w-4xl animate-in fade-in zoom-in-95 duration-200"
            >
              
              {/* Modal Header Sticky */}
              <div className="p-4 md:p-6 border-b border-slate-100 flex justify-between items-start bg-slate-50 sticky top-0 z-10 shadow-sm">
                <div className="pr-8">
                  <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider mb-1">Planejamento Detalhado</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">{selectedTrimester.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedTrimester(null)}
                  className="p-2 bg-white rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 shadow-sm border border-slate-100 transition-all active:scale-95"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content Scrollable */}
              <div className="p-4 md:p-8 space-y-8 pb-20 md:pb-8">
                
                {/* Intro do Projeto */}
                <div className="bg-indigo-50/50 rounded-2xl p-5 border border-indigo-100 flex flex-col sm:flex-row gap-4 items-start">
                  <div className="bg-white p-3 rounded-xl text-indigo-600 shadow-sm shrink-0">
                    {React.cloneElement(selectedTrimester.icon, { size: 28 })}
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-900 text-base md:text-lg mb-2">Objetivo do Projeto</h4>
                    <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                      {selectedTrimester.projectDesc} O objetivo é conectar as habilidades BNCC:
                    </p>
                    <div className="flex flex-wrap gap-2">
                       {selectedTrimester.skills.map(skill => (
                         <span key={skill} className="font-mono text-xs bg-white px-2 py-1 rounded border border-indigo-200 text-indigo-600 font-bold shadow-sm">
                           {skill}
                         </span>
                       ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Coluna: Avaliação & Recursos */}
                  <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        <Target className="text-red-500" size={18} /> Critérios de Avaliação
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {selectedTrimester.evaluation}
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                        <LinkIcon className="text-blue-500" size={18} /> Recursos Didáticos
                      </h4>
                      <ul className="space-y-2">
                        {selectedTrimester.resources?.map((res, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-indigo-600 hover:underline cursor-pointer">
                            <ArrowRight size={12} /> {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Coluna: Atividades & IA */}
                  <div className="md:col-span-1">
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 text-lg mb-4">
                      <Bot className="text-purple-500" />
                      Atividades & Prompts IA
                    </h4>
                    
                    <div className="grid gap-4">
                      {selectedTrimester.activities?.map((activity, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors bg-white">
                          
                          <div className="bg-white p-4 border-b border-slate-100">
                            <h5 className="font-bold text-slate-800 text-base flex items-start gap-3">
                              <span className="bg-purple-100 text-purple-700 min-w-[24px] h-6 rounded-full flex items-center justify-center text-xs font-bold border border-purple-200 mt-0.5">
                                {idx + 1}
                              </span>
                              {activity.title}
                            </h5>
                            <p className="text-slate-500 mt-2 ml-9 text-xs md:text-sm">
                              {activity.step}
                            </p>
                          </div>

                          <div className="p-4 bg-slate-900 text-slate-300">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1">
                                <Bot size={12} /> Prompt IA
                              </span>
                              <button 
                                onClick={() => handleCopy(activity.aiPrompt, `${selectedTrimester.id}-${idx}`)}
                                className={`
                                  text-[10px] font-bold px-2 py-1 rounded-md flex items-center gap-1 transition-all
                                  ${copiedPrompt === `${selectedTrimester.id}-${idx}` 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}
                                `}
                              >
                                {copiedPrompt === `${selectedTrimester.id}-${idx}` ? (
                                  <><Check size={10} /> Copiado</>
                                ) : (
                                  <><Copy size={10} /> Copiar</>
                                )}
                              </button>
                            </div>
                            <div className="bg-black/30 rounded-lg p-3 font-mono text-xs leading-relaxed border border-white/10 break-words">
                              "{activity.aiPrompt}"
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-200 mt-8 md:mt-12 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-indigo-600">
            <Heart className="fill-current" size={24} />
          </div>
          <p className="text-slate-800 font-bold text-base md:text-lg mb-2">Ensino com Propósito e Afeto</p>
          <p className="text-slate-500 max-w-md mx-auto text-xs md:text-sm leading-relaxed mb-6 px-4">
            "A tarefa do professor é preparar motivações para atividades culturais, num ambiente previamente organizado, e depois se abster de interferir." — Maria Montessori
          </p>
          <div className="text-xs text-slate-400 font-mono">
            Desenvolvido para Profª. Luciene Martins • {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EducationalPlan;
