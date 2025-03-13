
import { Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brandGray-100 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-brandBlue">
                PostFlow<span className="text-brandGray-900">AI</span>
              </span>
            </a>
            <p className="text-brandGray-600 mb-6 max-w-md">
              Uma plataforma completa de automação de conteúdo para redes sociais, 
              projetada especialmente para o mercado brasileiro.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandGray-600 hover:text-brandBlue transition-colors border border-brandGray-200"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandGray-600 hover:text-brandBlue transition-colors border border-brandGray-200"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandGray-600 hover:text-brandBlue transition-colors border border-brandGray-200"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandGray-600 hover:text-brandBlue transition-colors border border-brandGray-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produto</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-brandGray-600 hover:text-brandBlue transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-brandGray-600 hover:text-brandBlue transition-colors">Preços</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Integrações</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Atualizações</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Blog</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Guias</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Suporte</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">API</a></li>
              <li><a href="#" className="text-brandGray-600 hover:text-brandBlue transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brandGray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-brandGray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PostFlow AI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-brandGray-600 hover:text-brandBlue transition-colors">
              Termos de Serviço
            </a>
            <a href="#" className="text-sm text-brandGray-600 hover:text-brandBlue transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
