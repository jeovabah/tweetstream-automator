
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useAnimatedElement } from "@/lib/animations";

const CallToAction = () => {
  const { ref, animationClass } = useAnimatedElement();
  
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brandBlue-500 to-brandBlue-600 text-white">
      <div className="section-container">
        <div 
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`${animationClass} text-center max-w-3xl mx-auto`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para revolucionar sua presença nas redes sociais?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de criadores e empresas que economizam tempo e aumentam seu engajamento com o PostFlow AI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-brandBlue-600 hover:bg-brandGray-100">
              Comece Grátis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Agende uma Demonstração
            </Button>
          </div>
          
          <p className="mt-6 text-sm opacity-80">
            Sem cartão de crédito • Configuração em 2 minutos • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
