import { useState } from "react";
import { apartmentPlans, housePlans } from "../../utils/plan-pricing";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { FadeInSection } from "../shared/FadeInSection";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

/**
 * Componente Plans: Seção de planos de internet da página inicial
 * 
 * Principais características:
 * - Toggle entre planos de apartamento e casa
 * - Cards com animação de fade-in e hover
 * - Preços e características específicas para cada tipo de plano
 * - Link direto para WhatsApp ao escolher um plano
 */
export const Plans = () => {
  // Estado para controlar qual tipo de plano está sendo exibido
  const [isHousePlans, setIsHousePlans] = useState(false);
  // Seleciona o conjunto de planos baseado no estado
  const currentPlans = isHousePlans ? housePlans : apartmentPlans;

  return (
    <section id="plans" className="py-16">
      <FadeInSection>
        <Container className="text-center max-w-4xl mx-auto">
          {/* Tag flutuante com ícone de usuários */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-600">
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Planos para você
            </span>
          </div>

          {/* Cabeçalho da seção */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Escolha o melhor plano para você
          </h2>
          <Paragraph className="text-lg text-gray-600 mb-8">
            Internet de fibra óptica com velocidade e estabilidade para sua casa ou negócio.
          </Paragraph>

          {/* Toggle personalizado com ícones para alternar entre tipos de plano
              - Usa ícones diferentes para casa e apartamento
              - Aplica estilo ativo ao botão selecionado
              - Transições suaves na mudança de estado */}
          <div className="inline-flex items-center justify-center p-1 bg-gray-100 rounded-full mb-12">
            <button
              onClick={() => setIsHousePlans(false)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                !isHousePlans
                  ? 'bg-white shadow-md text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
              Apartamento
            </button>
            <button
              onClick={() => setIsHousePlans(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isHousePlans
                  ? 'bg-white shadow-md text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
              </svg>
              Casa
            </button>
          </div>
        </Container>
      </FadeInSection>
      
      {/* Grid de cards de planos
          - Layout responsivo: 1 coluna em mobile, 3 colunas em desktop
          - Animação de entrada com delay progressivo
          - Efeito de hover com scale */}
      <Container className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, key) => (
            <FadeInSection key={key} delay={key * 200}>
              {/* Card do plano com gradiente na borda e hover animation */}
              <div className="relative group h-full transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-1 rounded-3xl h-full">
                  <div className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 flex flex-col h-full relative">
                    {/* Badge de "Melhor Preço" quando aplicável */}
                    {plan.bestValue && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Melhor Preço
                      </div>
                    )}
                    
                    {/* Informações do plano */}
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {plan.title}
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-gray-900">
                      {plan.price}
                    </p>

                    {/* Lista de características com ícones de check */}
                    <ul className="mt-6 flex-1 space-y-3 text-left text-gray-600">
                      {plan.features.map((feature, keyFeatures) => (
                        <li key={keyFeatures} className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Botão de ação com link para WhatsApp */}
                    <div className="mt-8">
                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium"
                        onClick={() => window.open('LINK', '_blank')} // TODO: Adicionar link do WhatsApp
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
