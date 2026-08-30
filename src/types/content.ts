export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  code: string; // tag curta estilo "ficha" (ex: "AVAL", "TREINO") — não é sequência
  title: string;
  description: string;
  bullets: string[];
  icon: "clipboard" | "dumbbell" | "chart";
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
  result: string;
  avatar: string; // slug do arquivo em /public/images (sem extensão)
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "instagram" | "whatsapp" | "linkedin" | "youtube";
}
