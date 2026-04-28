import type { Metadata } from "next";
import { CvPage } from "@/components/CvPage";
import { content } from "@/content";

export const metadata: Metadata = {
  title: content.en.meta.title,
  description: content.en.meta.description,
  alternates: {
    canonical: "/",
    languages: { en: "/", ru: "/ru/" },
  },
  openGraph: {
    title: content.en.meta.title,
    description: content.en.meta.description,
    locale: "en_US",
    alternateLocale: ["ru_RU"],
  },
};

export default function HomePage() {
  return <CvPage locale="en" />;
}
