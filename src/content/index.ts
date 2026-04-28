import { en } from "./en";
import { ru } from "./ru";
import type { Content } from "./types";
import type { Locale } from "../lib/locale";

export const content: Record<Locale, Content> = { en, ru };

export type { Content };
