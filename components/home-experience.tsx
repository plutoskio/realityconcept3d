"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Expand,
  Plus,
} from "lucide-react";
import { Hero } from "./hero";
import dynamic from "next/dynamic";
const ExperienceDialog = dynamic(
  () => import("./experience-dialog").then((module) => module.ExperienceDialog),
  { ssr: false },
);
import type { ModelKind } from "./model-viewer";
import { ContactSection } from "./contact-section";

const steps = [
  {
    title: "O seu produto é o ponto de partida.",
    label: "PARTILHAR",
    text: "Envie fotografias, medidas e referências de materiais. Conhecemos a sua peça, o seu catálogo e o que torna a sua marca única.",
    detail: "Fotografias + medidas + acabamentos",
  },
  {
    title: "Nós damos-lhe uma nova dimensão.",
    label: "CRIAR",
    text: "Modelamos a geometria, trabalhamos as texturas e afinamos a luz. Revê e aprova cada detalhe antes de o modelo ficar online.",
    detail: "Modelação 3D + materiais + aprovação",
  },
  {
    title: "Pronto para entrar em qualquer casa.",
    label: "ATIVAR",
    text: "Entregamos a experiência 3D e AR integrada na sua loja. Os seus clientes podem explorar e experimentar, diretamente no navegador.",
    detail: "Integração + alojamento + acompanhamento",
  },
];
const faqs = [
  [
    "É preciso instalar uma aplicação?",
    "Não. A experiência 3D funciona no navegador. Em telemóveis compatíveis, a Realidade Aumentada abre através do Safari ou Chrome, sem instalar uma aplicação. A disponibilidade de AR depende do dispositivo.",
  ],
  [
    "E se ainda não tiver modelos 3D?",
    "Começamos pelas suas fotografias, medidas e referências de materiais. Tratamos da modelação e otimização de cada peça. Se já tiver modelos 3D, podemos avaliar e preparar os seus ficheiros.",
  ],
  [
    "Funciona com a minha loja online?",
    "A experiência pode ser incorporada em plataformas como Shopify e WooCommerce, ou num website à medida. Avaliamos a sua loja e tratamos da integração durante o projeto.",
  ],
  [
    "Quanto custa e quanto tempo demora?",
    "Depende do número de peças, da complexidade e dos acabamentos. Depois de conhecer o catálogo, enviamos uma proposta com âmbito, preço e calendário. A primeira conversa é gratuita e sem compromisso.",
  ],
];

export function HomeExperience() {
  const [model, setModel] = useState<ModelKind | null>(null);
  const [step, setStep] = useState(0);
  useEffect(() => {
    const incoming = new URLSearchParams(window.location.search).get("modelo");
    if (
      incoming === "atelier" ||
      incoming === "lounge" ||
      incoming === "mesa" ||
      incoming === "cadeira"
    )
      setModel(incoming);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  function closeModel() {
    setModel(null);
    const url = new URL(window.location.href);
    if (url.searchParams.has("modelo")) {
      url.searchParams.delete("modelo");
      window.history.replaceState(null, "", url.toString());
    }
  }
  return (
    <>
      <Hero onExplore={() => setModel("atelier")} />
      <section id="introducao" className="intro section-pad">
        <div className="section-index" data-reveal>
          <span className="eyebrow">01 / UMA OUTRA FORMA DE VER</span>
          <ArrowDownRight size={22} strokeWidth={1.2} />
        </div>
        <div className="intro-main" data-reveal>
          <h2>
            Há peças que precisam
            <br />
            de ser vistas. <em>E sentidas.</em>
          </h2>
          <div className="intro-description">
            <p>
              Uma fotografia mostra o seu produto.
              <br />
              Uma experiência aproxima-o de quem o vai escolher.
            </p>
            <p>
              Criamos modelos 3D e experiências de Realidade Aumentada para
              marcas de mobiliário e interiores. Para que cada cliente possa
              explorar os detalhes — e descobrir como a peça fica em sua casa.
            </p>
          </div>
        </div>
        <div className="service-line" data-reveal>
          <span>MODELAÇÃO 3D</span>
          <span className="service-plus">+</span>
          <span>REALIDADE AUMENTADA</span>
          <span className="service-plus">+</span>
          <span>INTEGRAÇÃO NA SUA LOJA</span>
          <span className="service-end">
            DO PRIMEIRO DETALHE AO ÚLTIMO CLIQUE <ArrowUpRight size={15} />
          </span>
        </div>
      </section>
      <section id="modelos" className="collection section-pad">
        <div className="section-heading" data-reveal>
          <div>
            <span className="eyebrow">
              02 / MENOS IMAGINAR. MAIS EXPERIMENTAR.
            </span>
            <h2>
              Olhe mais <em>de perto.</em>
            </h2>
          </div>
          <p>
            Não fique só pela imagem.
            <br />
            Entre, rode e explore.
          </p>
        </div>
        <div className="collection-grid">
          <button
            className="collection-item"
            onClick={() => setModel("atelier")}
            data-reveal
            aria-label="Explorar poltrona em 3D"
          >
            <div className="collection-visual lounge-visual">
              <span className="object-number">01 — ESTUDO DE TEXTURA</span>
              <img
                src="/images/atelier-chair-poster.webp"
                alt="Poltrona em couro castanho com concha de madeira e base metálica"
                width="1000"
                height="1000"
                loading="lazy"
              />
              <span className="collection-open">
                <Expand size={20} strokeWidth={1.5} />
              </span>
              <span className="collection-hover">
                EXPLORAR EM 3D <ArrowUpRight size={17} />
              </span>
            </div>
            <div className="collection-caption">
              <div>
                <h3>Textura que se vê.</h3>
                <span>Poltrona · Couro & madeira</span>
              </div>
              <ArrowUpRight size={24} strokeWidth={1.2} />
            </div>
          </button>
          <button
            className="collection-item collection-second"
            onClick={() => setModel("mesa")}
            data-reveal
            aria-label="Explorar mesa circular em 3D"
          >
            <div className="collection-visual table-visual">
              <span className="object-number">02 — ESTUDO DE FORMA</span>
              <img
                src="/images/coffee-table-poster.webp"
                alt="Modelo tridimensional de uma mesa circular"
                width="1000"
                height="1000"
                loading="lazy"
              />
              <span className="collection-open">
                <Expand size={20} strokeWidth={1.5} />
              </span>
              <span className="collection-hover">
                EXPLORAR EM 3D <ArrowUpRight size={17} />
              </span>
            </div>
            <div className="collection-caption">
              <div>
                <h3>Forma que faz sentido.</h3>
                <span>Mesa circular · Pedra & metal</span>
              </div>
              <ArrowUpRight size={24} strokeWidth={1.2} />
            </div>
          </button>
        </div>
        <p className="collection-disclaimer">
          Uma seleção de modelos de demonstração para explorar a tecnologia.{" "}
          <a href="/creditos">
            Créditos dos modelos <ArrowUpRight size={12} />
          </a>
        </p>
      </section>
      <section id="como-funciona" className="process section-pad">
        <div className="process-title" data-reveal>
          <span className="eyebrow">
            03 / SIMPLES PARA SI. EXTRAORDINÁRIO PARA QUEM COMPRA.
          </span>
          <h2>
            O seu catálogo.
            <br />A nossa <em>perspetiva.</em>
          </h2>
          <p>
            Da primeira fotografia ao botão na sua loja.
            <br />
            Tratamos de todo o processo.
          </p>
          <a href="#contacto" className="text-link">
            Conte-nos o que tem em mente <ArrowUpRight size={17} />
          </a>
          <div className="process-spec">
            <span>FOTOGRAFIA → MODELO → EXPERIÊNCIA</span>
            <div className="process-progress" aria-hidden="true">
              <span style={{ width: `${((step + 1) / 3) * 100}%` }} />
            </div>
          </div>
        </div>
        <div className="process-steps" data-reveal>
          {steps.map((item, i) => (
            <div
              className={`process-step ${step === i ? "is-active" : ""}`}
              key={item.label}
            >
              <h3>
                <button
                  onClick={() => setStep(i)}
                  aria-expanded={step === i}
                  aria-controls={`step-${i}`}
                >
                  <span className="step-number">0{i + 1}</span>
                  <span>{item.label}</span>
                  <Plus size={20} />
                </button>
              </h3>
              <div className="step-content" id={`step-${i}`} inert={step !== i}>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span className="step-detail">{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="integration section-pad">
        <div className="integration-copy" data-reveal>
          <span className="eyebrow">04 / NA SUA LOJA. À SUA MANEIRA.</span>
          <h2>
            Uma experiência
            <br />
            que encaixa <em>em si.</em>
          </h2>
          <p>
            A sua identidade, os seus produtos, a sua loja.
            <br />
            Uma nova forma de os apresentar.
          </p>
          <ul>
            <li>
              <Check size={16} />
              Integração com Shopify, WooCommerce e mais
            </li>
            <li>
              <Check size={16} />
              Modelos alojados na nossa infraestrutura
            </li>
            <li>
              <Check size={16} />
              3D no computador. AR no telemóvel compatível.
            </li>
          </ul>
          <a href="#contacto" className="text-link">
            Vamos falar da sua loja <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="store-preview" data-reveal>
          <div className="store-browser">
            <span />
            <span />
            <span />
            <div>A SUA LOJA / PRODUTO</div>
            <ArrowUpRight size={12} />
          </div>
          <div className="store-brand">
            a sua marca<span>OBJETOS PARA VIVER.</span>
          </div>
          <div className="store-product">
            <img
              src="/images/atelier-chair-poster.webp"
              alt="Pré-visualização de uma poltrona num exemplo de página de produto"
              loading="lazy"
              width="600"
              height="600"
            />
            <button onClick={() => setModel("atelier")}>
              <span>3D</span>Explorar a peça
              <Expand size={14} />
            </button>
          </div>
          <div className="store-detail">
            <span>COLEÇÃO / SALA</span>
            <h3>Poltrona em couro</h3>
            <p>Um lugar para ficar.</p>
            <button onClick={() => setModel("atelier")}>
              Ver no meu espaço <ArrowUpRight size={15} />
            </button>
          </div>
          <p className="store-example">EXEMPLO ILUSTRATIVO DE INTEGRAÇÃO</p>
        </div>
      </section>
      <section id="faq" className="faq section-pad">
        <div className="faq-heading" data-reveal>
          <span className="eyebrow">05 / SEM PONTAS SOLTAS</span>
          <h2>
            É natural ter
            <br />
            <em>perguntas.</em>
          </h2>
          <a href="mailto:rodriguez@realityconcept3d.com" className="text-link">
            Estamos por aqui <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map(([question, answer], i) => (
            <details key={question}>
              <summary>
                <span className="faq-number">0{i + 1}</span>
                {question}
                <Plus size={20} />
              </summary>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <ContactSection />
      {model && <ExperienceDialog kind={model} onClose={closeModel} />}
    </>
  );
}
