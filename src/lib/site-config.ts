import type {
  StatItem,
  ServiceItem,
  TestimonialItem,
  FaqItem,
  NavLink,
  SocialLink,
} from "@/types/content";

/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * -----------------------------------------------------------------------
 * Este arquivo concentra todos os textos e dados editáveis da landing
 * page. Para atualizar conteúdo (nome, telefone, depoimentos, etc.),
 * troque os valores aqui — os componentes não precisam ser tocados.
 */

export const site = {
  professionalName: "Dra. [Nome da Nutricionista]",
  credential: "CRN 3 XXXXX · Nutrição Esportiva",
  brandName: "[Nome da Marca]",
  tagline: "Nutrição esportiva sob medida para quem treina sério",
  whatsappNumber: "5511999999999", // formato: 55 + DDD + número, somente dígitos
  whatsappMessageDefault:
    "Olá! Vim pelo site e quero agendar minha avaliação nutricional.",
  email: "contato@seudominio.com.br",
  city: "São Paulo, SP",
  siteUrl: "https://www.seudominio.com.br",
};

export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessageDefault);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/", icon: "instagram" },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: "whatsapp",
  },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com/", icon: "youtube" },
];

export const heroStats: StatItem[] = [
  { value: "+12", label: "anos de experiência" },
  { value: "+800", label: "atletas atendidos" },
  { value: "100%", label: "planos individuais" },
];

export const aboutCredentials: string[] = [
  "Graduação em Nutrição · Pós em Nutrição Esportiva",
  "Especialista em composição corporal e bioimpedância",
  "Coach de musculação certificado",
  "Atendimento presencial e online",
];

export const services: ServiceItem[] = [
  {
    code: "ANAM",
    title: "Anamnese completa",
    description:
      "Antes de qualquer plano, uma avaliação profunda: histórico de saúde, rotina de treino, exames, composição corporal e objetivos reais — não um questionário genérico.",
    bullets: [
      "Avaliação de composição corporal",
      "Análise de exames e histórico clínico",
      "Mapeamento da rotina de treino e sono",
    ],
    icon: "clipboard",
  },
  {
    code: "PLANO",
    title: "Plano alimentar individual",
    description:
      "A dieta é construída a partir da sua anamnese — sem planilha pronta. Ajustada ao seu gasto energético, preferências alimentares e fase de treino.",
    bullets: [
      "Macros calculados para seu objetivo",
      "Cardápio flexível, com substituições",
      "Ajustes por fase (cutting, bulking, manutenção)",
    ],
    icon: "chart",
  },
  {
    code: "ACOMP",
    title: "Acompanhamento contínuo",
    description:
      "Nutrição esportiva não é estática. Reavaliações periódicas e ajuste fino do plano conforme sua resposta e evolução no treino.",
    bullets: [
      "Retornos periódicos agendados",
      "Suporte direto por WhatsApp",
      "Ajuste de estratégia conforme resultado",
    ],
    icon: "dumbbell",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Marcos T.",
    role: "Powerlifting · 3 anos de acompanhamento",
    quote:
      "Troquei três nutricionistas antes. Foi a primeira vez que o plano considerou meus horários de treino e trabalho de verdade.",
    result: "Ganho de 6kg de massa magra em 8 meses",
    avatar: "testimonial-1",
  },
  {
    name: "Camila R.",
    role: "Corrida de rua · preparação para maratona",
    quote:
      "A anamnese foi mais completa que qualquer consulta que já tive. Senti que o plano era realmente sobre o meu corpo, não uma dieta padrão.",
    result: "Melhora de 14min no tempo de maratona",
    avatar: "testimonial-2",
  },
  {
    name: "Diego A.",
    role: "Musculação · foco em recomposição corporal",
    quote:
      "O acompanhamento contínuo fez toda a diferença. Cada retorno o plano era ajustado com base no que estava funcionando de verdade.",
    result: "Redução de 8% de gordura corporal mantendo força",
    avatar: "testimonial-3",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Como funciona a primeira avaliação?",
    answer:
      "A primeira etapa é a anamnese completa: uma conversa aprofundada sobre seu histórico de saúde, rotina de treino, hábitos alimentares e objetivos. A partir disso, o plano é construído individualmente — nada é entregue antes dessa avaliação.",
  },
  {
    question: "O atendimento é só presencial ou também online?",
    answer:
      "Os dois formatos estão disponíveis. A anamnese e as reavaliações podem ser feitas por videochamada com a mesma profundidade do atendimento presencial.",
  },
  {
    question: "Em quanto tempo eu vejo resultado?",
    answer:
      "Depende do objetivo e do ponto de partida, mas a maioria dos pacientes percebe mudanças consistentes de energia e desempenho já nas primeiras semanas, com ajustes de composição corporal mais visíveis a partir do segundo mês.",
  },
  {
    question: "O plano é fixo ou pode ser ajustado?",
    answer:
      "É ajustado. Nutrição esportiva exige acompanhamento contínuo — o plano evolui conforme sua resposta ao treino, exames de rotina e mudanças de fase (ganho de massa, definição, manutenção).",
  },
  {
    question: "Vocês atendem quem não é atleta profissional?",
    answer:
      "Sim. O acompanhamento é voltado para qualquer pessoa que treina com consistência e quer um plano alimentar estruturado — de quem está começando na musculação a atletas competitivos.",
  },
];
