
import { useAnimatedElement } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Twitter } from "lucide-react";

const Hero = () => {
  const { ref: titleRef, animationClass: titleAnimClass } = useAnimatedElement(0);
  const { ref: subtitleRef, animationClass: subtitleAnimClass } = useAnimatedElement(100);
  const { ref: ctaRef, animationClass: ctaAnimClass } = useAnimatedElement(200);
  const { ref: imageRef, animationClass: imageAnimClass } = useAnimatedElement(300);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-brandBlue-50/50 to-white">
      <div className="section-container relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brandBlue-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brandBlue-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Main headline */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>} 
            className={`${titleAnimClass} max-w-4xl`}
          >
            <div className="chip mb-6">
              <Twitter size={14} className="mr-1" />
              <span>Automação inteligente para redes sociais</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brandGray-900 leading-tight mb-6">
              Revolucione seu <span className="text-brandBlue">engajamento social</span> com automação e IA
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            ref={subtitleRef as React.RefObject<HTMLDivElement>} 
            className={`${subtitleAnimClass} max-w-2xl`}
          >
            <p className="text-lg md:text-xl text-brandGray-600 mb-8">
              Agende tweets, crie threads automaticamente e otimize seu engajamento com uma ferramenta feita para o mercado brasileiro.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>} 
            className={`${ctaAnimClass} flex flex-col sm:flex-row items-center gap-4 mb-12`}
          >
            <Button size="lg" className="btn-primary w-full sm:w-auto">
              Comece Grátis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary w-full sm:w-auto">
              Ver Demonstração
            </Button>
          </div>

          {/* Quick benefits */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-16">
            <div className="flex items-center">
              <Check size={16} className="text-brandBlue mr-2" />
              <span className="text-sm text-brandGray-600">Configuração em 2 minutos</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-brandBlue mr-2" />
              <span className="text-sm text-brandGray-600">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-brandBlue mr-2" />
              <span className="text-sm text-brandGray-600">Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Hero image */}
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>} 
          className={`${imageAnimClass} relative mx-auto max-w-5xl`}
        >
          <div className="relative">
            <div className="blur-card p-4 md:p-6 shadow-card overflow-hidden">
              <div className="rounded-xl overflow-hidden border border-brandGray-200 shadow-subtle">
                <div className="bg-white p-2">
                  {/* Mockup image would go here */}
                  <div className="bg-brandGray-100 w-full h-[400px] md:h-[500px] rounded-lg flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="mb-4 w-12 h-12 bg-brandBlue-500 rounded-full flex items-center justify-center mx-auto">
                        <Twitter size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Interface de Agendamento</h3>
                      <p className="text-brandGray-600 max-w-md mx-auto">
                        Agende seus tweets, threads e interações com uma interface intuitiva e poderosa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI elements for visual appeal */}
            <div className="absolute -top-6 -right-6 blur-card p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brandBlue rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tweet agendado com sucesso!</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-6 blur-card p-4 rounded-lg shadow-lg animate-float animate-delay-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brandGray-200 rounded-full flex items-center justify-center">
                  <span className="text-brandBlue-600 text-xs font-bold">+32%</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Aumento de engajamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
