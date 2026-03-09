import { Link } from "react-router-dom";
import footerLogo from "@/assets/footer-logo.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "/baba-do-bacana", label: "Sistema de Gestão", isRoute: true },
  { href: "#contato", label: "Contato" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-2">
              <img
                src={footerLogo}
                alt="ThinkUp Lab"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 ease-out hover:scale-105 hover:opacity-90"
              />
            </div>

            <p className="text-white/60 text-sm mb-5 max-w-sm leading-relaxed">
              Transformando planilhas em sistemas simples e eficientes para pequenas e médias empresas.
            </p>

          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-left text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>Entre em contato pelo formulário</p>
              <p>ou através das nossas redes sociais.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} ThinkUp Lab. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
