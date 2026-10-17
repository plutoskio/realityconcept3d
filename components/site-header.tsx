"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./logo";

const links = [
  { href: "/#modelos", label: "Experiências" },
  { href: "/#como-funciona", label: "O processo" },
  { href: "/#faq", label: "Perguntas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <div className="header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="/#contacto">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Navegação móvel"
        inert={!open}
      >
        {links.map((link, i) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            <span>0{i + 1}</span>
            {link.label}
            <ArrowUpRight />
          </a>
        ))}
        <a href="/#contacto" onClick={() => setOpen(false)}>
          <span>04</span>Vamos conversar
          <ArrowUpRight />
        </a>
      </nav>
    </header>
  );
}
