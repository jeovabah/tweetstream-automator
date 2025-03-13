
import { useAnimatedElement } from "@/lib/animations";
import { Clock, Recycle, LineChart, MessageSquare, Link, Zap } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => {
  const { ref, animationClass } = useAnimatedElement(delay);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`${animationClass} blur-card p-8 h-full`}
    >
      <div className="w-12 h-12 rounded-full bg-brandBlue-100 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brandGray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const { ref: sectionRef, animationClass: sectionAnimClass } = useAnimatedElement();
  
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-brandBlue" />,
      title: "Agendamento Inteligente",
      description: "Agende seus tweets e threads automaticamente com sugestões de horários baseadas em dados de engajamento do seu público."
    },
    {
      icon: <Recycle className="h-6 w-6 text-brandBlue" />,
      title: "Reutilização de Conteúdo",
      description: "Recicle seus melhores tweets com alto desempenho e transforme conteúdos longos em threads engajadoras."
    },
    {
      icon: <LineChart className="h-6 w-6 text-brandBlue" />,
      title: "Otimização com IA",
      description: "Análise de engajamento e insights sobre formatos de conteúdo mais eficazes para seu público específico."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brandBlue" />,
      title: "Interação Automatizada",
      description: "Respostas automáticas inteligentes e sugestões de interações com tweets relevantes do seu nicho."
    },
    {
      icon: <Link className="h-6 w-6 text-brandBlue" />,
      title: "Integrações Múltiplas",
      description: "Conecte-se com Instagram, LinkedIn e TikTok para automatizar suas postagens em todas as plataformas."
    },
    {
      icon: <Zap className="h-6 w-6 text-brandBlue" />,
      title: "Adaptado para o Brasil",
      description: "Algoritmo otimizado para compreender gírias e padrões de linguagem locais, além de sugestões de conteúdo viral no Brasil."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div 
          ref={sectionRef as React.RefObject<HTMLDivElement>} 
          className={`${sectionAnimClass} text-center max-w-3xl mx-auto mb-16`}
        >
          <div className="chip mb-4">Funcionalidades</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tudo que você precisa para dominar as redes sociais
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
              delay={(index % 3) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
