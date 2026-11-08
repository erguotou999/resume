import type { LocalizedText } from "./i18n/dictionary";

/**
 * Shared shapes for user-editable content.
 *
 * Any field typed `LocalizedText | string` accepts either a plain string or a
 * `{ en, zh }` pair. Use `{ en, zh }` when the text is prose that should be
 * translated; plain strings are fine for proper nouns, tech names and tags.
 */

export type Localized = LocalizedText | string;

/** A project card. Rendered in the featured strip and the projects grid. */
export interface Project {
  title: string;
  /** Short role/credit line, e.g. "Creator and Maintainer". */
  role: Localized;
  description: Localized;
  url: string;
  /** Local path under /public, or an absolute https URL. */
  previewImage: string;
  /** Eyebrow chips shown above the title, e.g. ["CLI", "Open Source"]. */
  tags: string[];
  /** Display year, e.g. "2024". */
  year?: string;
  /** When true the project is promoted into the "In focus" strip. */
  featured?: boolean;
  /** Alt text for the preview image — good for SEO and a11y. */
  imageAlt?: string;
}

/** The kind of engagement, used for the chip next to each role. */
export type EngagementType =
  | "full-time"
  | "contract"
  | "freelance"
  | "open-source";

export interface IWorkExperience {
  company: string;
  companyUrl?: string;
  projectUrl?: string;
  position: string;
  period: string;
  responsibilities: Localized[];
  shortDescription?: Localized;
  type?: EngagementType;
  /** Marks the current role so the UI can show a "Present" badge. */
  current?: boolean;
}

/** A capability card. */
export interface Skill {
  name: string;
  description: Localized;
  /** How many projects shipped with this skill, e.g. "30+". */
  projects_completed: string;
  /** Optional grouping label, e.g. "Core", "Infrastructure". */
  group?: string;
  /** Self-assessed proficiency, 1–5. Rendered as a small level indicator. */
  level?: number;
}

/** A social link. `icon` is a lucide-react component. */
export interface Social {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  url: string;
  /** Optional display label; falls back to the key name. */
  label?: string;
}
