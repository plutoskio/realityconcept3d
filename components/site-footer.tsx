import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CookiePreferences } from "./cookie-banner";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <span>
          UMA NOVA DIMENSÃO.
          <br />A MESMA ESSÊNCIA.
        </span>
        <a href="/#conteudo" className="footer-back">
          Voltar ao início <ArrowUpRight size={17} />
        </a>
        <span>
          MODELAÇÃO 3D
          <br />& REALIDADE AUMENTADA
        </span>
      </div>
      <a
        href="/"
        className="footer-wordmark"
        aria-label="Reality Concept — início"
      >
        reality concept<span>®</span>
      </a>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Reality Concept 3D</span>
        <nav aria-label="Informação legal">
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/termos">Termos</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/creditos">Créditos</Link>
          <CookiePreferences />
        </nav>
        <a
          href="https://www.livroreclamacoes.pt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Livro de Reclamações <ArrowUpRight size={12} />
        </a>
      </div>
    </footer>
  );
}
