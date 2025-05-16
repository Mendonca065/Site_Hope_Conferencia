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
    title: "Ultra 600 Mbps",
    price: "R$79,90/mês",
    features: [
      "Download até 600 Mbps",
      "Upload até 300 Mbps",
      "Wi-Fi 6 de alta performace",
      "Instalação Gratuita",
    ],
  },
  {
    title: "Ultra 1 Gbps",
    price: "R$119,90/mês",
    features: [
      "Download até 1 Gbps",
      "Upload até 500 Mbps",
      "Wi-Fi 6 de alta performace",
      "Instalação Gratuita",
    ],
    bestValue: true,
  },
  {
    title: "Ultra 1.5 Gbps",
    price: "R$249,90/mês",
    features: [
      "Download até 1.5 Gbps",
      "Upload até 750 Mbps",
      "Wi-Fi 7 de alta performace",
      "Instalação Gratuita",
    ],
  },
];

export const housePlans: Plan[] = [
  {
    title: "Casa 400 Mbps",
    price: "R$89,90/mês",
    features: [
      "Download até 400 Mbps",
      "Upload até 200 Mbps",
      "Wi-Fi 6 de alta performance",
      "Instalação Gratuita + Roteador",
    ],
  },
  {
    title: "Casa 800 Mbps",
    price: "R$129,90/mês",
    features: [
      "Download até 800 Mbps",
      "Upload até 400 Mbps",
      "Wi-Fi 6 de alta performance",
      "Instalação Gratuita + Roteador",
    ],
    bestValue: true,
  },
  {
    title: "Casa 1.2 Gbps",
    price: "R$199,90/mês",
    features: [
      "Download até 1.2 Gbps",
      "Upload até 600 Mbps",
      "Wi-Fi 6 de alta performance",
      "Instalação Gratuita + 2 Roteadores",
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
    title: "Mesh Apartamento Básico",
    price: "R$149,90/mês",
    features: [
      "2 Pontos de Wi-Fi Mesh", // Ideal para apartamentos pequenos
      "Cobertura até 120m²",
      "Wi-Fi 6 de alta performance",
      "Configuração Profissional",
      "Suporte Técnico Prioritário",
    ],
  },
  {
    title: "Mesh Apartamento Plus",
    price: "R$199,90/mês",
    features: [
      "3 Pontos de Wi-Fi Mesh", // Melhor custo-benefício
      "Cobertura até 200m²",
      "Wi-Fi 6 de alta performance",
      "Configuração Profissional",
      "Suporte Técnico Prioritário",
      "App de Gerenciamento",
    ],
    bestValue: true,
  },
  {
    title: "Mesh Apartamento Pro",
    price: "R$299,90/mês",
    features: [
      "4 Pontos de Wi-Fi Mesh", // Para apartamentos grandes/cobertura
      "Cobertura até 300m²",
      "Wi-Fi 6E de alta performance",
      "Configuração Profissional",
      "Suporte Técnico VIP 24/7",
      "App de Gerenciamento Premium",
      "Personalização de Rede",
    ],
  },
];

/**
 * Planos Mesh para Casas
 * - Adaptados para residências maiores
 * - Começam com 3 pontos de acesso
 * - Coberturas de 200m² a 500m²
 * - Preços ajustados para maior área e mais equipamentos
 */
export const houseMeshPlans: Plan[] = [
  {
    title: "Mesh Casa Básico",
    price: "R$189,90/mês",
    features: [
      "3 Pontos de Wi-Fi Mesh", // Mínimo recomendado para casas
      "Cobertura até 200m²",
      "Wi-Fi 6 de alta performance",
      "Configuração Profissional",
      "Suporte Técnico Prioritário",
    ],
  },
  {
    title: "Mesh Casa Plus",
    price: "R$249,90/mês",
    features: [
      "4 Pontos de Wi-Fi Mesh", // Ideal para maioria das casas
      "Cobertura até 350m²",
      "Wi-Fi 6 de alta performance",
      "Configuração Profissional",
      "Suporte Técnico Prioritário",
      "App de Gerenciamento",
    ],
    bestValue: true,
  },
  {
    title: "Mesh Casa Pro",
    price: "R$349,90/mês",
    features: [
      "5 Pontos de Wi-Fi Mesh", // Para casas grandes/sobrados
      "Cobertura até 500m²",
      "Wi-Fi 6E de alta performance",
      "Configuração Profissional",
      "Suporte Técnico VIP 24/7",
      "App de Gerenciamento Premium",
      "Personalização de Rede",
    ],
  },
];
