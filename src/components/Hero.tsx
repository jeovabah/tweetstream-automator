
import { useAnimatedElement } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles, Twitter, BarChart3 } from "lucide-react";

const Hero = () => {
  const { ref: titleRef, animationClass: titleAnimClass } = useAnimatedElement(0);
  const { ref: subtitleRef, animationClass: subtitleAnimClass } = useAnimatedElement(100);
  const { ref: ctaRef, animationClass: ctaAnimClass } = useAnimatedElement(200);
  const { ref: imageRef, animationClass: imageAnimClass } = useAnimatedElement(300);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-brandPurple-50/50 via-brandBlue-50/30 to-white">
      <div className="section-container relative">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-brandPurple-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-brandBlue-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Main headline */}
          <div 
            ref={titleRef as React.RefObject<HTMLDivElement>} 
            className={`${titleAnimClass} max-w-4xl`}
          >
            <div className="chip mb-6 flex items-center gap-1">
              <Sparkles size={14} className="text-brandPurple-500" />
              <span>Inteligência artificial para todas as suas redes sociais</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brandGray-900 leading-tight mb-6">
              Revolucione seu <span className="gradient-text font-extrabold">engajamento social</span> com IA avançada
            </h1>
          </div>

          {/* Subtitle */}
          <div 
            ref={subtitleRef as React.RefObject<HTMLDivElement>} 
            className={`${subtitleAnimClass} max-w-2xl`}
          >
            <p className="text-lg md:text-xl text-brandGray-600 mb-8">
              Agende tweets, crie threads automaticamente e otimize seu engajamento com a única ferramenta de IA feita para o mercado brasileiro.
            </p>
          </div>

          {/* CTA Buttons */}
          <div 
            ref={ctaRef as React.RefObject<HTMLDivElement>} 
            className={`${ctaAnimClass} flex flex-col sm:flex-row items-center gap-4 mb-12`}
          >
            <Button size="lg" className="btn-primary w-full sm:w-auto group">
              Comece Grátis <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="btn-secondary w-full sm:w-auto">
              Ver Demonstração
            </Button>
          </div>

          {/* Quick benefits */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-16">
            <div className="flex items-center">
              <Check size={16} className="text-brandPurple-500 mr-2" />
              <span className="text-sm text-brandGray-600">Configuração em 2 minutos</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-brandPurple-500 mr-2" />
              <span className="text-sm text-brandGray-600">Sem cartão de crédito</span>
            </div>
            <div className="flex items-center">
              <Check size={16} className="text-brandPurple-500 mr-2" />
              <span className="text-sm text-brandGray-600">Cancele quando quiser</span>
            </div>
          </div>
        </div>

        {/* Hero image - AI-powered scheduling interface mockup */}
        <div 
          ref={imageRef as React.RefObject<HTMLDivElement>} 
          className={`${imageAnimClass} relative mx-auto max-w-5xl`}
        >
          <div className="relative">
            <div className="blur-card p-4 md:p-6 shadow-card overflow-hidden border border-brandGray-200/50">
              <div className="rounded-xl overflow-hidden border border-brandGray-200 shadow-subtle">
                <div className="bg-white">
                  {/* App header */}
                  <div className="bg-gradient-to-r from-brandBlue-600 to-brandPurple-600 p-4 text-white flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={20} className="text-white" />
                      <span className="font-semibold">PostFlow AI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20 text-white h-8">
                        Dashboard
                      </Button>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xs font-medium">AB</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* App content */}
                  <div className="p-5 flex flex-col md:flex-row gap-6 h-[400px] md:h-[500px]">
                    {/* Sidebar */}
                    <div className="w-full md:w-64 shrink-0 border-r border-brandGray-200">
                      <div className="flex flex-col gap-2">
                        <div className="p-2 bg-brandPurple-50 text-brandPurple-800 rounded-md flex items-center gap-2">
                          <Twitter size={16} />
                          <span className="font-medium text-sm">Twitter Feed</span>
                        </div>
                        <div className="p-2 hover:bg-brandGray-100 rounded-md flex items-center gap-2 text-brandGray-700 cursor-pointer">
                          <BarChart3 size={16} />
                          <span className="text-sm">Analytics</span>
                        </div>
                        {/* Calendar dates */}
                        <div className="mt-4">
                          <h4 className="text-xs font-semibold uppercase text-brandGray-500 mb-2 px-2">Agendamento</h4>
                          <div className="grid grid-cols-7 gap-1 mt-2">
                            {[...Array(7)].map((_, i) => (
                              <div key={i} className="h-8 w-8 text-xs flex items-center justify-center rounded-full">
                                {i + 15}
                              </div>
                            ))}
                            {[...Array(7)].map((_, i) => (
                              <div key={i + 7} className={`h-8 w-8 text-xs flex items-center justify-center rounded-full ${i === 1 ? 'bg-brandPurple-100 text-brandPurple-800 font-medium' : ''}`}>
                                {i + 22}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main content */}
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Próximos agendamentos</h2>
                        <Button size="sm" className="bg-gradient-to-r from-brandBlue to-brandPurple text-white h-8">
                          <Sparkles size={14} className="mr-2" /> Criar com IA
                        </Button>
                      </div>
                      
                      {/* Scheduled posts */}
                      <div className="space-y-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="p-4 border border-brandGray-200 rounded-lg">
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-brandGray-200 flex items-center justify-center">
                                  <Twitter size={16} className="text-brandGray-600" />
                                </div>
                                <div>
                                  <div className="font-medium">Tweet Agendado</div>
                                  <div className="text-xs text-brandGray-500">23 Nov • 19:30</div>
                                </div>
                              </div>
                              <div className="text-xs inline-flex items-center px-2 py-1 rounded-full bg-brandPurple-100 text-brandPurple-700">
                                <Sparkles size={10} className="mr-1" /> Otimizado com IA
                              </div>
                            </div>
                            <p className="text-sm text-brandGray-700 ml-12">
                              {item === 1 ? (
                                "5 ferramentas essenciais para aumentar sua produtividade em 2023: Thread 🧵👇"
                              ) : item === 2 ? (
                                "Acabei de publicar meu novo artigo sobre otimização de SEO para brasileiros. Confira o link!"
                              ) : (
                                "Dica rápida: Para conseguir mais engajamento, responda os comentários nas primeiras 2 horas de publicação."
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating UI elements for visual appeal */}
            <div className="absolute -top-6 -right-6 blur-card p-4 rounded-lg shadow-lg animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-brandBlue to-brandPurple rounded-full flex items-center justify-center">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">IA otimizou seu tweet!</p>
                  <p className="text-xs text-brandGray-600">+32% de engajamento previsto</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-6 blur-card p-4 rounded-lg shadow-lg animate-float animate-delay-300">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-brandBlue-400 to-brandPurple-400 rounded-full flex items-center justify-center">
                  <BarChart3 size={14} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium">+48% de engajamento</p>
                  <p className="text-xs text-brandGray-600">na última semana</p>
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
