import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

// Componente Hero: Seção principal da página inicial (Hero section).

export const Hero = () => {
  return (
    // Fundo da seção hero alterado para #D3DEEC e altura aumentada
    <section
      className="relative pt-32 lg:pt-36 min-h-[70vh] lg:min-h-[80vh] flex items-center"
      id="home"
      style={{ backgroundColor: "#D3DEEC" }}
    >
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12">
        <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
          <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-[#0096FF] to-blue-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
          <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-[#0096FF] blur-xl opacity-80"></span>
        </div>
        <div className="relative flex flex-col items-start text-left lg:py-8 lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
          {" "}
          <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold w-full">
            Tenha a Internet mais Rápida com{" "}
            <span className="text-[#0096FF]">G3NET</span>
          </h1>
          <Paragraph className="mt-8">
            Navegue, trabalhe e se divirta com a melhor experiência de internet.
            Planos que cabem no seu bolso com máxima velocidade.
          </Paragraph>
          <Button
            className="min-w-max text-white bg-[#0096FF] hover:bg-blue-500 transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 mt-8"
            onClick={() => {
              const plansSection = document.getElementById("plans");
              plansSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-[5]">Assine Já</span>
          </Button>
        </div>{" "}
        <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
          {" "}
          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
            alt="Profissional usando tecnologia"
            width={2350}
            height={2359}
            className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
          />
        </div>
      </Container>
    </section>
  );
};
