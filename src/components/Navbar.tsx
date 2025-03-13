
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-subtle py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-brandBlue transition-colors">
            PostFlow<span className="text-brandGray-900">AI</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <a href="#features" className="nav-link">Funcionalidades</a>
          <a href="#pricing" className="nav-link">Preços</a>
          <a href="#testimonials" className="nav-link">Depoimentos</a>
          <a href="#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="rounded-full">Entrar</Button>
          <Button className="rounded-full bg-brandBlue hover:bg-brandBlue-600">
            Experimente Grátis
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brandGray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <a 
              href="#features" 
              className="nav-link block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Funcionalidades
            </a>
            <a 
              href="#pricing" 
              className="nav-link block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Preços
            </a>
            <a 
              href="#testimonials" 
              className="nav-link block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#faq" 
              className="nav-link block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="w-full rounded-full">
                Entrar
              </Button>
              <Button className="w-full rounded-full bg-brandBlue hover:bg-brandBlue-600">
                Experimente Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
