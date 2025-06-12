import { Container } from "../shared/Container";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

// Array de objetos que define os itens de navegação da barra
export const navItems = [
  { href: "#home", text: "Home" },
  { href: "#tickets", text: "Ingressos" },
  //{ href: "#merchandise", text: "Merchandise" },
  { href: "#donations", text: "Contribuir" },
];

export const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-6 bg-[#1A1A1A] shadow-lg border-b border-gray-800">
      <Container>
        <nav className="w-flu flex justify-between gap-6 relative">
          {/*logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img
                src="/logo-high-transparent.png"
                alt="HOPE '25 Logo"
                className="w-28 h-12 -my-6"
              />
            </a>
          </div>
          {/* Container para os itens de navegação e o botão de ação.*/}
          <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-[#1A1A1A] lg:bg-transparent border-x border-gray-800 lg:border-x-0 lg:h-auto h-0 overflow-hidden">
            <ul className="border-t border-gray-800 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-6 text-lg text-gray-300 w-full lg:justify-center lg:items-center">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-800 lg:border-0 px-6 lg:px-0">
              <BtnLink
                text="Comprar Ingressos"
                href="#tickets"
                className="bg-[#FF9800] hover:bg-[#F57C00] font-semibold"
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
