import Link from "next/link";
import type { Locale } from "@/lib/locale";

interface LangSwitchProps {
  locale: Locale;
}

export function LangSwitch({ locale }: LangSwitchProps) {
  return (
    <div className="lang-switch" role="group" aria-label="Language">
      {locale === "en" ? (
        <span className="active" aria-current="true">
          EN
        </span>
      ) : (
        <Link href="/" hrefLang="en" aria-label="Switch to English">
          EN
        </Link>
      )}
      {locale === "ru" ? (
        <span className="active" aria-current="true">
          RU
        </span>
      ) : (
        <Link href="/ru/" hrefLang="ru" aria-label="Переключить на русский">
          RU
        </Link>
      )}
    </div>
  );
}
