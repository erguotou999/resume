"use client";

import { useI18n } from "@/config/i18n/locale-provider";
import type { Localized } from "@/config/types";

/**
 * Renders a `Localized` value in the active locale. Falls back to plain
 * React children when the value isn't localized.
 */
export function LocalizedText({ value }: { value: Localized }) {
  const { t } = useI18n();
  return <>{t(value)}</>;
}
