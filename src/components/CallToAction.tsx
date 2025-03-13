
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import { useAnimatedElement } from "@/lib/animations";

const CallToAction = () => {
  const { ref, animationClass } = useAnimatedElement();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brandBlue-600 via-brandPurple-600 to-brandPurple-700 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="section-container">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`${animationClass} text-center max-w-3xl mx-auto relative z-10`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm mb-6">
            <Sparkles size={14} className="mr-1.5 text-white" /> 
            <span>Transforme sua presença nas redes</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Pronto para revolucionar suas <span className="underline decoration-brandPurple-300 decoration-4 underline-offset-4">redes sociais</span> com IA?
          </h2>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de criadores e empresas que economizam tempo e aumentam seu engajamento com o PostFlow AI - a ferramenta feita para o mercado brasileiro.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-lg mx-auto">
            <div className="space-y-3 text-left mb-6">
              <div className="flex items-center">
                <Check size={20} className="text-brandPurple-300 mr-3" />
                <span>Aumente seu engajamento em até 200%</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-brandPurple-300 mr-3" />
                <span>Economize mais de 10 horas por semana</span>
              </div>
              <div className="flex items-center">
                <Check size={20} className="text-brandPurple-300 mr-3" />
                <span>IA especializada no mercado brasileiro</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-white text-brandPurple-700 hover:bg-white/90 transition-all group">
              Comece Grátis Agora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-white/80">
            Sem cartão de crédito • Configuração em 2 minutos • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
