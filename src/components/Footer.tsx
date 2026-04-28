import type { Content } from "@/content/types";

interface FooterProps {
  copy: Content["footer"];
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer>
      <div className="wrap">
        <span>{copy.copy}</span>
        <div className="meta">
          <span>{copy.hint}</span>
          <span className="kbd">G</span>
        </div>
      </div>
    </footer>
  );
}
