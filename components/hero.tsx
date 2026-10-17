"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Expand, Pause, Play } from "lucide-react";
import { ModelViewer } from "./model-viewer";

export function Hero({ onExplore }: { onExplore: () => void }) {
  const [playing, setPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  return (
    <section className="hero-opening" aria-label="Do ecrã para a vida">
      <div className="hero-topline">
        <span className="eyebrow">
          <span className="status-dot" />A PRÓXIMA DIMENSÃO DO SEU CATÁLOGO
        </span>
        <span className="hero-edition">3D / REALIDADE AUMENTADA</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy">
          <h1>
            Do ecrã.
            <br />
            <span>
              Para a <em>vida.</em>
            </span>
          </h1>
          <p>
            Os seus produtos, em 3D.
            <br />
            No espaço de quem os vai escolher.
          </p>
          <a href="#contacto" className="round-link">
            <span className="round-arrow">
              <ArrowUpRight size={23} strokeWidth={1.5} />
            </span>
            Dar uma nova dimensão à minha marca
          </a>
        </div>
        <div
          className="hero-product"
          aria-label="Apresentação animada da poltrona"
        >
          <ModelViewer
            id="hero-model"
            kind="atelier"
            interactive={false}
            autoRotate={playing && !reducedMotion}
          />
        </div>
      </div>
      <div className="hero-object-details">
        <span className="eyebrow">OBJETO Nº 001 / ESTUDO DE MATERIAIS</span>
        <span>Couro, madeira e uma outra perspetiva.</span>
      </div>
      <div className="hero-bottom">
        <a href="#introducao" className="scroll-cue">
          <ArrowDown size={17} />
          DESLIZE PARA DESCOBRIR
        </a>
        <span className="hero-demo-note">EXPERIÊNCIA DE DEMONSTRAÇÃO</span>
        <div className="hero-actions">
          {!reducedMotion && (
            <button
              className="rotation-toggle"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? "Pausar rotação" : "Retomar rotação"}
              aria-pressed={!playing}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
              <span>{playing ? "Pausar" : "Retomar"}</span>
            </button>
          )}
          <button className="hero-explore" onClick={onExplore}>
            Explorar em 3D <Expand size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
