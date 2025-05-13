// Lista de Planos de Internet com Preços e Benefícios
// ----------------------------------------------------------
// Este array contém os dados usados para exibir os planos
// comerciais disponíveis na G3NET.
// Cada objeto representa um plano com título, preço e
// recursos (features)

export const plansPricing = [
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
