import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

// Componente Hero: Seção principal da página inicial (Hero section).

export const Hero = () => {
  return (
    <section
      className="relative pt-32 lg:pt-36 min-h-[90vh] lg:min-h-[100vh] flex items-center"
      id="home"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full inset-y-0">
          <span className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-[#FF9800] blur-[128px] opacity-20"></span>
          <span className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-[#FF9800] blur-[128px] opacity-20"></span>
        </div>
        <div className="relative flex flex-col items-center text-center lg:py-8 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold w-full mb-6">
            HOPE <span className="text-[#FF9800]">'25</span>
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-8">
            Transformando vidas através da fé
          </div>
          <Paragraph className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12">
            Junte-se a nós para uma experiência única de adoração, conexão e transformação.
            Um evento que vai marcar sua vida e fortalecer sua fé.
          </Paragraph>
          <Button
            className="min-w-max text-white bg-[#FF9800] hover:bg-[#F57C00] transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-lg px-8 py-4"
            onClick={() => {
              const ticketsSection = document.getElementById("tickets");
              ticketsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-[5]">Garanta seu lugar</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};
