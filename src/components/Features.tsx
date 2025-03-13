
import { useAnimatedElement } from "@/lib/animations";
import { Clock, Recycle, LineChart, MessageSquare, Link, Zap, Sparkles, Calendar, Repeat, BarChart2, MessageCircle, Share2, Cpu, Check } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0,
  isHighlighted = false
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  isHighlighted?: boolean;
}) => {
  const { ref, animationClass } = useAnimatedElement(delay);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`${animationClass} ${isHighlighted ? 'border border-brandPurple-200 bg-gradient-to-br from-white to-brandPurple-50 shadow-purple-glow' : 'blur-card'} p-8 h-full rounded-2xl transition-all duration-300 hover:shadow-elevated group`}
    >
      <div className={`w-12 h-12 rounded-full ${isHighlighted ? 'bg-gradient-to-r from-brandBlue to-brandPurple' : 'bg-brandPurple-100'} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brandGray-600">{description}</p>
      
      {isHighlighted && (
        <div className="mt-4 flex items-center">
          <div className="text-xs font-medium text-brandPurple-600 flex items-center">
            <Sparkles size={12} className="mr-1" /> Tecnologia avançada de IA
          </div>
        </div>
      )}
    </div>
  );
};

const AIFeatureShowcase = () => {
  const { ref, animationClass } = useAnimatedElement(200);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} mt-16 p-6 rounded-2xl border border-brandPurple-200 shadow-purple-glow bg-white overflow-hidden relative`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brandPurple-100/30 to-brandBlue-100/30 rounded-full filter blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-brandBlue-100 to-brandPurple-100 text-brandPurple-700 mb-4">
              <Cpu size={14} className="mr-1.5" /> Tecnologia exclusiva
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Inteligência artificial que realmente <span className="gradient-text">entende o mercado brasileiro</span>
            </h3>
            <p className="text-brandGray-600 mb-6">
              Nossa IA foi treinada com milhares de tweets e threads de sucesso do mercado brasileiro, 
              compreendendo gírias, tendências e comportamentos locais para gerar conteúdo que realmente 
              engaja com o público nacional.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-brandPurple-100 flex items-center justify-center mt-0.5 mr-3">
                  <Check size={12} className="text-brandPurple-700" />
                </div>
                <div>
                  <p className="font-medium">Compreensão do português brasileiro</p>
                  <p className="text-sm text-brandGray-600">Inclui gírias, expressões e referências culturais locais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-brandPurple-100 flex items-center justify-center mt-0.5 mr-3">
                  <Check size={12} className="text-brandPurple-700" />
                </div>
                <div>
                  <p className="font-medium">Análise de tendências em tempo real</p>
                  <p className="text-sm text-brandGray-600">Adaptação automática de conteúdo baseada no que está bombando</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-brandPurple-100 flex items-center justify-center mt-0.5 mr-3">
                  <Check size={12} className="text-brandPurple-700" />
                </div>
                <div>
                  <p className="font-medium">Dados de engajamento locais</p>
                  <p className="text-sm text-brandGray-600">Otimizações baseadas no comportamento do usuário brasileiro</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 bg-brandGray-50 rounded-lg p-4 border border-brandGray-200">
            <div className="mb-4 font-medium text-sm text-brandGray-700">
              Exemplo de otimização de tweet com nossa IA:
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-brandGray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-brandGray-200 flex items-center justify-center">
                    <span className="text-xs">1</span>
                  </div>
                  <div className="text-sm font-medium">Tweet original</div>
                </div>
                <p className="text-sm text-brandGray-700 ml-8">
                  Aqui estão 5 dicas para ter mais produtividade no dia a dia.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-brandPurple-200 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple text-white flex items-center justify-center">
                    <Sparkles size={12} />
                  </div>
                  <div className="text-sm font-medium text-brandPurple-700">
                    Versão otimizada pela IA
                  </div>
                </div>
                <p className="text-sm text-brandGray-900 ml-8 font-medium">
                  🚀 REVELADO: 5 técnicas INFALÍVEIS para triplicar sua produtividade! 
                  <br />Implementei a #3 e ganhei +2h por dia!
                  <br />Thread completo 🧵👇
                </p>
                <div className="ml-8 mt-2 text-xs text-brandPurple-600 font-medium">
                  +215% mais engajamento que o tweet original
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const { ref: sectionRef, animationClass: sectionAnimClass } = useAnimatedElement();
  
  const features = [
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Agendamento Inteligente",
      description: "Agende seus tweets e threads automaticamente com sugestões de horários baseadas em dados de engajamento do seu público brasileiro.",
      isHighlighted: true
    },
    {
      icon: <Repeat className="h-6 w-6 text-brandPurple" />,
      title: "Reutilização de Conteúdo",
      description: "Recicle seus melhores tweets com alto desempenho e transforme conteúdos longos em threads engajadoras."
    },
    {
      icon: <BarChart2 className="h-6 w-6 text-white" />,
      title: "Otimização com IA",
      description: "Análise de engajamento e insights sobre formatos de conteúdo mais eficazes para seu público brasileiro específico.",
      isHighlighted: true
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-brandPurple" />,
      title: "Interação Automatizada",
      description: "Respostas automáticas inteligentes e sugestões de interações com tweets relevantes do seu nicho."
    },
    {
      icon: <Share2 className="h-6 w-6 text-brandPurple" />,
      title: "Integrações Múltiplas",
      description: "Conecte-se com Instagram, LinkedIn e TikTok para automatizar suas postagens em todas as plataformas."
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Adaptado para o Brasil",
      description: "Algoritmo otimizado para compreender gírias e padrões de linguagem locais, além de sugestões de conteúdo viral no Brasil.",
      isHighlighted: true
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div 
          ref={sectionRef as React.RefObject<HTMLDivElement>} 
          className={`${sectionAnimClass} text-center max-w-3xl mx-auto mb-16`}
        >
          <div className="chip mb-4 inline-flex items-center">
            <Sparkles size={14} className="mr-1 text-brandPurple-500" />
            <span>Funcionalidades</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tudo que você precisa para <span className="gradient-text">dominar</span> as redes sociais
          </h2>
          <p className="text-lg text-brandGray-600">
            PostFlow AI combina automação inteligente e análise de dados para maximizar seu impacto nas redes sociais com o mínimo de esforço.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isHighlighted={feature.isHighlighted}
              delay={(index % 3) * 100}
            />
          ))}
        </div>
        
        <AIFeatureShowcase />
      </div>
    </section>
  );
};

export default Features;
