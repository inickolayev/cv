import type { Metadata } from "next";
import { CvPage } from "@/components/CvPage";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.ru.meta.title,
  description: content.ru.meta.description,
  alternates: {
    canonical: "/ru/",
    languages: { en: "/", ru: "/ru/" },
  },
  openGraph: {
    title: content.ru.meta.title,
    description: content.ru.meta.description,
    locale: "ru_RU",
    alternateLocale: ["en_US"],
  },
};

export default function RuHomePage() {
  return <CvPage locale="ru" />;
}
