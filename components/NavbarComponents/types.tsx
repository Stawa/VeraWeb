import { ReactNode } from "react";

export interface NavLink {
  href: string;
  text: string;
  icon: ReactNode;
}

export interface LanguageOption {
  code: string;
  name: string;
  icon: ReactNode;
}
