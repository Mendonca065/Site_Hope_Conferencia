// Lista de Planos de Internet com Preços e Benefícios
// ----------------------------------------------------------
// Este array contém os dados usados para exibir os planos
// comerciais disponíveis na G3NET.
// Cada objeto representa um plano com título, preço e
// recursos (features)

// Definição do tipo Plan para garantir consistência nos dados
export interface Plan {
  title: string;
  price: string;
  features: string[];
  bestValue?: boolean;
}

export const apartmentPlans: Plan[] = [
  {
    title: "600 MEGA",
    price: "R$99,90/mês",
    features: [
      "Download até 600 MEGA",
      "Upload até 300 MEGA",
      "1 ponto Wi-Fi 6 de alta performace",
      "Instalação Gratuita",
    ],
  },
  {
    title: "1 GIGA",
    price: "R$119,90/mês",
    features: [
      "Download até 1000 MEGA",
      "Upload até 500 MEGA",
      "1 ponto Wi-Fi 6 Plus de alta performace",
      "Streaming 4K sem travamentos",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "1.5 GIGA",
    price: "R$249,90/mês",
    features: [
      "Download até 1500 MEGA",
      "Upload até 750 MEGA",
      "1 ponto Wi-Fi 7 de alta performace",
      "Roteador com portas 2.5GE",
      "Instalação Gratuita",
    ],
  },
];

export const housePlans: Plan[] = [
  {
    title: "Essencial",
    price: "R$250/mês",
    features: [
      "Download até 1000 MEGA",
      "Upload até 500 MEGA",
      "Wi-Fi 6+ (ultravelocidade)",
      "Portas Gigabit Ethernet",
      "Projeto de rede exclusivo para sua residência",
      "Garantia de velocidade contratada",
      "Instalação Gratuita",
      "Suporte Técnico 24/7",
    ],
    bestValue: true,
  },
  {
    title: "Premium",
    price: "R$450/mês",
    features: [
      "Download até 2000 MEGA",
      "Upload até 1000 MEGA",
      "Ponto Wi-Fi 7 (tecnologia de ponta)",
      "Portas 2.5 Gigabit Ethernet",
      "Projeto de rede exclusivo para sua residência",
      "Garantia de velocidade contratada",
      "Instalação Gratuita",
      "Suporte Técnico 24/7",
    ],
  },
];

/**
 * Planos Mesh para Apartamentos
 * - Otimizados para espaços menores
 * - Começam com 2 pontos de acesso
 * - Coberturas de 120m² a 300m²
 */
export const apartmentMeshPlans: Plan[] = [
  {
    title: "Mesh 800 Mega",
    price: "R$129,90/mês",
    features: [
      "Download até 800 Mbps",
      "Upload até 400 Mbps",
      "2 Pontos Mesh Wi-Fi 6+", // Melhor custo-benefício
      "Zero dead zones",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "Mesh 1 Giga",
    price: "R$149,90/mês",
    features: [
      "Download até 1000 Mbps",
      "Upload até 500 Mbps",
      "2 Pontos Mesh Wi-Fi 6+", // Para apartamentos grandes/cobertura
      "Zero dead zones",
      "Instalação Gratuita",
    ],
  },
];
