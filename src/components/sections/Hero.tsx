import { useRef, useState } from "react";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

// Componente Hero: Seção principal da página inicial (Hero section).

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    setMuted((prev) => {
      const newMuted = !prev;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      return newMuted;
    });
  };

  return (
    <section
      className="relative pt-32 lg:pt-36 min-h-[90vh] lg:min-h-[100vh] flex items-center overflow-hidden"
      id="home"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Video de background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/event-videos/HOPE23.mp4"
        autoPlay
        loop
        muted={muted}
        playsInline
      />
      {/* Botão de mute/unmute no canto superior direito da sessão Hero */}
      <button
        onClick={toggleMute}
        className="fixed top-6 right-6 md:top-7 md:right-10 z-50 bg-[#FF9800] hover:bg-[#F57C00] text-white rounded-full p-2 transition-colors focus:outline-none shadow-2xl border-2 border-white"
        aria-label={muted ? "Ativar som do vídeo" : "Desativar som do vídeo"}
        type="button"
        style={{
          boxShadow:
            "0 0 0 2px rgba(0,0,0,0.25), 0 2px 12px 0 rgba(0,0,0,0.5)",
        }}
      >
        {muted ? (
          // Ícone de som desligado
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9v6h4l5 5V4l-5 5H9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 19L5 5"
            />
          </svg>
        ) : (
          // Ícone de som ligado
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9v6h4l5 5V4l-5 5H9z"
            />
          </svg>
        )}
      </button>
      {/* Gradiente escuro à esquerda para contraste do texto */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-2/3 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 relative z-20 w-full">
        {/* Blobs decorativos */}
        <div className="absolute w-full inset-y-0 pointer-events-none z-30">
          <span className="absolute left-1/4 top-1/3 w-96 h-96 rounded-full bg-[#FF9800] blur-[128px] opacity-20"></span>
          <span className="absolute right-1/4 bottom-1/3 w-96 h-96 rounded-full bg-[#FF9800] blur-[128px] opacity-20"></span>
        </div>
        {/* Conteúdo alinhado à esquerda */}
        <div className="relative flex flex-col items-start text-left lg:py-8 max-w-4xl mr-auto w-full">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold w-full mb-6">
            HOPE <span className="text-[#FF9800]">'25</span>
          </h1>
          <div className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light mb-8 w-full">
            Transformando vidas através da fé
          </div>
          <Paragraph className="text-gray-400 text-lg sm:text-xl max-w-2xl mb-12 w-full">
            Junte-se a nós para uma experiência única de adoração, conexão e
            transformação. Um evento que vai marcar sua vida e fortalecer sua fé.
          </Paragraph>
          <Button
            className="min-w-max text-white bg-[#FF9800] hover:bg-[#F57C00] transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-lg px-8 py-4 self-start"
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
