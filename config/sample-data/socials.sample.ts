import { Github, Linkedin, Mail, TwitterIcon } from "lucide-react";
import type { Social } from "../types";

export const UserSocialsData: Record<string, Social> = {
  github: {
    icon: Github,
    url: "https://github.com/yourusername",
    label: "GitHub",
  },
  twitter: {
    icon: TwitterIcon,
    url: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  email: {
    icon: Mail,
    url: "you@example.com",
    label: "Email",
  },
  linkedin: {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/yourusername/",
    label: "LinkedIn",
  },
};
