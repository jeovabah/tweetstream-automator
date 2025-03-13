
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useAnimatedElement } from "@/lib/animations";
import { Check } from "lucide-react";

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
          <span className="bg-brandBlue text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
            Mais Popular
          </span>
        </div>
      )}
      
      <div className={`h-full blur-card p-8 border ${isPopular ? 'border-brandBlue/30' : 'border-brandGray-200'}`}>
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-brandGray-600 mb-6">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold">R$ {price}</span>
          <span className="text-brandGray-600 ml-1">/mês</span>
          {isAnnual && (
            <div className="text-sm text-brandBlue mt-1">
              Economia de {Math.round(100 - (plan.priceAnnually * 12 / (plan.priceMonthly * 12)) * 100)}% no plano anual
            </div>
          )}
        </div>
        
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <Check className="h-5 w-5 text-brandBlue shrink-0 mr-3" />
              <span className="text-brandGray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className={`w-full ${isPopular ? 'bg-brandBlue hover:bg-brandBlue-600' : 'bg-brandGray-200 hover:bg-brandGray-300 text-brandGray-800'}`}
          onClick={plan.ctaAction}
        >
          {plan.cta}
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
      name: "Free",
      description: "Perfeito para testar a plataforma",
      priceMonthly: 0,
      priceAnnually: 0,
      features: [
        "Até 10 postagens por mês",
        "Agendamento básico",
        "Acesso a 1 rede social",
        "Suporte por email"
      ],
      cta: "Começar Grátis"
    },
    {
      name: "Pro",
      description: "Ideal para criadores de conteúdo",
      priceMonthly: 39,
      priceAnnually: 29,
      features: [
        "Postagens ilimitadas",
        "Agendamento avançado",
        "Analytics básico",
        "Reutilização de conteúdo",
        "Suporte prioritário"
      ],
      cta: "Começar Agora"
    },
    {
      name: "Business",
      description: "Para empresas e times",
      priceMonthly: 99,
      priceAnnually: 79,
      features: [
        "Tudo do plano Pro",
        "Equipes com múltiplos usuários",
        "Analytics avançado",
        "Automação avançada",
        "Integração com outras redes",
        "Suporte VIP"
      ],
      cta: "Falar com Vendas"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-brandGray-50">
      <div className="section-container">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`${titleAnimClass} text-center max-w-3xl mx-auto mb-8`}
        >
          <div className="chip mb-4">Preços</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Escolha o plano perfeito para seu crescimento
          </h2>
          <p className="text-lg text-brandGray-600 mb-8">
            Preços transparentes e sem surpresas. Cancele quando quiser.
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
            className="data-[state=checked]:bg-brandBlue"
          />
          <span className={`text-sm ${isAnnual ? 'text-brandGray-900 font-medium' : 'text-brandGray-600'}`}>
            Anual <span className="text-brandBlue text-xs ml-1">(-20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default PricingPlans;
