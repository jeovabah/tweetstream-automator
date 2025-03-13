
import { useAnimatedElement } from "@/lib/animations";
import { QuoteIcon } from "lucide-react";

const TestimonialCard = ({ 
  quote,
  author,
  role,
  company,
  avatarUrl,
  delay = 0
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  delay?: number;
}) => {
  const { ref, animationClass } = useAnimatedElement(delay);
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animationClass} blur-card p-8 h-full`}
    >
      <QuoteIcon className="h-8 w-8 text-brandBlue-300 mb-4" />
      <p className="text-lg text-brandGray-800 italic mb-6">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-brandGray-200 overflow-hidden mr-4">
          {avatarUrl ? (
            <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brandBlue-100 text-brandBlue-600 font-medium">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-medium">{author}</h4>
          <p className="text-sm text-brandGray-600">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const { ref: titleRef, animationClass: titleAnimClass } = useAnimatedElement();
  
  const testimonials = [
    {
      quote: "O PostFlow AI revolucionou minha presença no Twitter. Consigo programar todo meu conteúdo da semana em apenas 30 minutos e os resultados são incríveis!",
      author: "Fernanda Silva",
      role: "Influenciadora",
      company: "@fernanda_digital"
    },
    {
      quote: "Como agência, precisávamos de uma ferramenta que entendesse o mercado brasileiro. O PostFlow AI nos ajudou a triplicar o engajamento dos clientes em apenas 2 meses.",
      author: "Ricardo Mendes",
      role: "Diretor de Marketing",
      company: "Agência Conecta"
    },
    {
      quote: "A função de thread automática é simplesmente fantástica. Transformo meus artigos do blog em threads virais com apenas alguns cliques.",
      author: "Ana Luiza",
      role: "Criadora de conteúdo",
      company: "@analuiza_tech"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white">
      <div className="section-container">
        <div 
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`${titleAnimClass} text-center max-w-3xl mx-auto mb-16`}
        >
          <div className="chip mb-4">Depoimentos</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos clientes estão dizendo
          </h2>
          <p className="text-lg text-brandGray-600">
            Junte-se a centenas de criadores e empresas que estão transformando sua presença nas redes sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
