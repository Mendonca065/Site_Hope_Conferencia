import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";

export const Sponsors = () => {
  const sponsors = [
    { name: "Tune", image: "/sponsors/tune-logo.png" },
    { name: "Rock CK", image: "/sponsors/rock-ck-logo.png" },
    { name: "East Flow", image: "/sponsors/east-flow-logo.png" },
    { name: "Wave", image: "/sponsors/wave-logo.png" },
    { name: "Instrumental Weekly", image: "/sponsors/instrumental-logo.png" }
  ];

  return (
    <section className="py-16 bg-[#262626]">
      <Container>
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-[#FF9800] text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase">
              Nossos Patrocinadores
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <div className="w-full max-w-[200px] h-[60px] flex items-center justify-center bg-[#1A1A1A] p-6 rounded-xl border border-[#FF9800]/10 hover:border-[#FF9800]/30 transition-colors">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain opacity-50 hover:opacity-70 transition-opacity duration-300"
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};
