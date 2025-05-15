import { plansPricing } from "../../utils/plan-pricing";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

// Componente Plans: Seção de Planos da página inicial (Plans section).

export const Plans = () => {
  return (
    <section id="plans" className="py-5">
      <FadeInSection>
        <Container className="text-center">
          <Title>Nossos Planos</Title>
          <Paragraph className="mt-4">Escolha o plano ideal para você</Paragraph>
        </Container>
      </FadeInSection>
      
      <Container className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plansPricing.map((plan, key) => (
            <FadeInSection key={key} delay={key * 200}>
              <div className="relative group h-full transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                  <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                    {plan.bestValue && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-blue text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 ">
                        Melhor Preço
                      </div>
                    )}
                    <h3 className="text-2xl font-semibold text-heading-1">
                      {plan.title}
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-heading-1">
                      {plan.price}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                      {plan.features.map((feature, keyFeatures) => (
                        <li key={keyFeatures} className="flex items-center gap-2">
                          <span className="text-primary">✅</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button
                        className="w-full text-blue"
                        onClick={() => window.open('LINK', '_blank')}
                      >
                        Escolher esse plano
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
};
