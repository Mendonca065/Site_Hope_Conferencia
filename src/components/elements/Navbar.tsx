// Importações necessárias para o componente
import React from "react";
import { Container } from "../shared/Container"; // Container para layout responsivo
import logo from "../../assets/LOGO HIGH TRANSPARENT.png"; // Logo da empresa
import { NavItem } from "../shared/NavItem"; // Componente para itens do menu
import { BtnLink } from "../shared/BtnLink"; // Componente para botões com link

// Array de objetos que define os itens de navegação da barra
// Cada item tem uma URL de destino (href) e o texto a ser exibido
export const navItems = [
  { href: "#home", text: "Home" },
  { href: "#plans", text: "Planos" },
  { href: "#services", text: "Serviços" },
  { href: "#support", text: "Suporte" },
];

export const Navbar = () => {
  // Estado para controlar a visibilidade do menu em dispositivos móveis
  // isMenuOpen: true quando o menu está aberto, false quando fechado
  // setIsMenuOpen: função para alternar o estado do menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    // Header fixo no topo com sombra e fundo branco
    <header className="fixed inset-x-0 top-0 z-50 py-6 bg-white shadow-md">
      <Container>
        {/* Barra de navegação com layout flexível */}
        <nav className="w-flu flex justify-between gap-6 relative">
          {/* Container da logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img
                src={logo}
                alt="G3NET Logo"
                className="w-28 h-28 -my-6" // Tamanho ajustado para 112px com margem negativa para alinhamento
              />
            </a>{" "}
          </div>
          {/* Botão do menu móvel - Só aparece em telas menores que lg */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {/* Ícone do menu - muda entre hamburger e X */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Renderiza X quando menu está aberto, hamburger quando fechado */}
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" // Ícone X
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" // Ícone hamburger
                />
              )}
            </svg>
          </button>{" "}
          {/* Container para os itens de navegação e o botão de ação 
              - Em mobile: menu dropdown com fundo branco
              - Em desktop: menu horizontal com fundo transparente */}
          <div
            className={`flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-white lg:bg-transparent border-x border-x-box-border lg:border-x-0 transition-all duration-300 ${
              isMenuOpen
                ? "h-auto opacity-100 visible"
                : "h-0 lg:h-auto opacity-0 lg:opacity-100 invisible lg:visible overflow-hidden"
            }`}
          >
            {/* Lista de links de navegação
                - Em mobile: vertical com bordas e padding
                - Em desktop: horizontal centralizado */}
            <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
              {navItems.map((item, key) => (
                <NavItem href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            {/* Container do botão Central do Cliente
                - Em mobile: largura total e borda inferior
                - Em desktop: largura automática sem bordas */}{" "}
            <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-0 mt-4">
              <BtnLink
                text="Central do Cliente"
                href="https://g3net.centralassinante.com.br/#/login"
                className=""
                target="_blank"
              />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
