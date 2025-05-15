import { services } from "../../utils/services";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// Componente Services: Seção Servicos oferecidos da página inicial (Service section).

export const Services = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Title>Por que escolher a G3NET</Title>
            <Paragraph>
              Oferecemos mais do que internet, entregamos uma experiência completa
              de conectividade.
            </Paragraph>
          </div>
        </FadeInSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, key) => (
            <FadeInSection key={key} delay={key * 200}>
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
