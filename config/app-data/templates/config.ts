export const AVAILABLE_TEMPLATES = {
  BASE: "base",
  SHADOW: "shadow",
};

export type TemplateKey =
  (typeof AVAILABLE_TEMPLATES)[keyof typeof AVAILABLE_TEMPLATES];
