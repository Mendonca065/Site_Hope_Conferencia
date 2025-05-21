import { Container } from "../shared/Container";
import logo from "../../assets/LOGO HIGH TRANSPARENT.png";

// Componente Footer: Rodapé do site com informações da empresa,
// redes sociais, contato e copyright

export const Footer = () => {
  return (
    <footer className="pt-8 pb-12 bg-[#4B6BA2] text-white mt-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Primeira seção: Logo, descrição e redes sociais */}
          <div className="space-y-6">
            <div className="flex flex-col space-y-4">
              <img src={logo} alt="G3NET Logo" className="w-32" />
            </div>
            {/* Descrição da empresa */}
            <p className="text-gray-200">
              Conectando você ao que realmente importa. Internet rápida, estável
              e com o melhor suporte.
            </p>
          </div>

          {/* Segunda seção: Informações de contato */}
          <div className="lg:col-span-2 lg:justify-self-end">
            <h3 className="text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {/* Endereço com ícone */}
              <p className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt"></i>
                Av. Pres. José Linhares, 204 - Sala 203 - Bessa, João Pessoa - PB
              </p>
              {/* Telefone com ícone */}
              <p className="flex items-center gap-2">
                <i className="fas fa-phone"></i>
                (83) 31429400
              </p>
              {/* Email com ícone */}
              <p className="flex items-center gap-2">
                <i className="fas fa-envelope"></i>
                contato@g3netfibra.com.br
              </p>
            </div>
          </div>
        </div>

        {/* Seção de copyright com borda superior */}
        <div className="border-t border-gray-400/20 mt-12 pt-8 text-center">
          <p>© 2025 G3NET. Todos os direitos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};
