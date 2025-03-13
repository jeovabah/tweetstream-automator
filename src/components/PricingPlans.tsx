
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAnimatedElement } from "@/lib/animations";
import { Check, Sparkles, Zap, Star, Clock, Users, Cpu, Trophy, Bot } from "lucide-react";

const PricingPlan = ({ 
  plan, 
  isPopular = false,
  isAnnual = false,
  delay = 0
}: { 
  plan: {
    name: string;
    description: string;
    priceMonthly: number;
    priceAnnually: number;
    features: string[];
    cta: string;
    icon: React.ReactNode;
    ctaAction?: () => void;
  };
  isPopular?: boolean;
  isAnnual?: boolean;
  delay?: number;
}) => {
  const { ref, animationClass } = useAnimatedElement(delay);
  const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} relative h-full`}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-gradient-to-r from-brandBlue to-brandPurple text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-lg">
            Mais Popular
          </span>
        </div>
      )}
      
      <div className={`h-full blur-card p-8 border ${isPopular ? 'border-brandPurple/30 shadow-purple-glow' : 'border-brandGray-200'} transition-all duration-300 hover:shadow-elevated group`}>
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPopular ? 'bg-gradient-to-r from-brandBlue to-brandPurple text-white' : 'bg-brandGray-100 text-brandGray-700'}`}>
            {plan.icon}
          </div>
          <h3 className="text-xl font-bold">{plan.name}</h3>
        </div>
        <p className="text-brandGray-600 mb-6 h-12">{plan.description}</p>
        
        <div className="mb-6">
          <div className="flex items-end gap-1">
            <span className="text-4xl font-bold price-tag">R$ {price}</span>
            <span className="text-brandGray-600 mb-1">/mês</span>
          </div>
          {isAnnual && (
            <div className="text-sm text-brandPurple-600 mt-1 font-medium">
              Economia de {Math.round(100 - (plan.priceAnnually * 12 / (plan.priceMonthly * 12)) * 100)}% no plano anual
            </div>
          )}
        </div>
        
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <Check className="h-5 w-5 text-brandPurple-500 shrink-0 mr-3" />
              <span className="text-brandGray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-gradient-to-r from-brandBlue to-brandPurple hover:from-brandBlue-600 hover:to-brandPurple-600' : 'bg-brandGray-200 hover:bg-brandGray-300 text-brandGray-800'} group`}
          onClick={plan.ctaAction}
        >
          {plan.cta}
          <Zap className={`ml-2 h-4 w-4 ${isPopular ? 'group-hover:animate-pulse' : ''}`} />
        </Button>
      </div>
    </div>
  );
};

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref: titleRef, animationClass: titleAnimClass } = useAnimatedElement();
  const { ref: switchRef, animationClass: switchAnimClass } = useAnimatedElement(100);
  
  const pricingPlans = [
    {
      name: "Freemium",
      description: "Ideal para testar a plataforma",
      priceMonthly: 0,
      priceAnnually: 0,
      icon: <Clock size={20} />,
      features: [
        "10 postagens por mês",
        "5 sugestões de IA gratuitas",
        "Acesso a 1 rede social",
        "Agendamento básico",
        "Suporte por email"
      ],
      cta: "Começar Grátis"
    },
    {
      name: "Pro",
      description: "Para criadores de conteúdo",
      priceMonthly: 49,
      priceAnnually: 39,
      icon: <Bot size={20} />,
      features: [
        "Postagens ilimitadas",
        "IA para otimização de posts",
        "Agendamento inteligente",
        "Analytics básico",
        "Multimídia: fotos, GIFs, vídeos",
        "Suporte prioritário"
      ],
      cta: "Começar Agora"
    },
    {
      name: "Business",
      description: "Para empresas e times",
      priceMonthly: 99,
      priceAnnually: 79,
      icon: <Users size={20} />,
      features: [
        "Tudo do plano Pro",
        "Respostas automáticas com IA",
        "Automação de engajamento",
        "Analytics avançado com IA",
        "Múltiplas redes sociais",
        "API completa",
        "Suporte VIP 24/7"
      ],
      cta: "Escolher Business"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-white to-brandGray-50">
      <div className="section-container">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`${titleAnimClass} text-center max-w-3xl mx-auto mb-8`}
        >
          <div className="chip mb-4 inline-flex items-center">
            <Star size={14} className="mr-1 text-brandPurple-500" />
            <span>Planos Acessíveis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Preços <span className="gradient-text">transparentes</span> para seu crescimento
          </h2>
          <p className="text-lg text-brandGray-600 mb-8">
            Escolha o plano ideal para suas necessidades com preços em Reais. Sem taxas escondidas. Cancele quando quiser.
          </p>
        </div>

        <div 
          ref={switchRef as React.RefObject<HTMLDivElement>}
          className={`${switchAnimClass} flex items-center justify-center gap-3 mb-12`}
        >
          <span className={`text-sm ${!isAnnual ? 'text-brandGray-900 font-medium' : 'text-brandGray-600'}`}>
            Mensal
          </span>
          <Switch 
            checked={isAnnual} 
            onCheckedChange={setIsAnnual} 
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-brandBlue data-[state=checked]:to-brandPurple"
          />
          <span className={`text-sm ${isAnnual ? 'text-brandGray-900 font-medium' : 'text-brandGray-600'}`}>
            Anual <span className="text-brandPurple-600 text-xs ml-1 font-semibold">(-20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <PricingPlan 
            plan={pricingPlans[0]} 
            isAnnual={isAnnual} 
            delay={0}
          />
          <PricingPlan 
            plan={pricingPlans[1]} 
            isPopular={true} 
            isAnnual={isAnnual} 
            delay={100}
          />
          <PricingPlan 
            plan={pricingPlans[2]} 
            isAnnual={isAnnual} 
            delay={200}
          />
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-brandPurple-50 to-brandBlue-50 border border-brandPurple-100 rounded-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brandBlue to-brandPurple flex items-center justify-center">
                <Trophy size={20} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Enterprise</h3>
            </div>
            <p className="text-lg font-semibold mb-2">R$ 199/mês</p>
            <p className="text-brandGray-700 mb-4">
              Tudo do Business + personalização de IA, treinamento dedicado e API aberta para integrações externas. 
              Ideal para grandes marcas e agências.
            </p>
            <Button variant="outline" className="border-brandPurple-200 text-brandPurple-700 hover:bg-brandPurple-100">
              Fale com nosso time de vendas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
