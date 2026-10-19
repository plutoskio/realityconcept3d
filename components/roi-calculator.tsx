"use client";

import { useState } from "react";

const number = new Intl.NumberFormat("pt-PT", { maximumFractionDigits: 0 });
const money = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});
export function RoiCalculator() {
  const [visitors, setVisitors] = useState(10000);
  const [conversion, setConversion] = useState(2);
  const [order, setOrder] = useState(150);
  const [lift, setLift] = useState(40);
  const extraOrders = (((visitors * conversion) / 100) * lift) / 100;
  const monthly = extraOrders * order;
  return (
    <section
      className="roi-section section-block"
      id="simulador"
      aria-labelledby="roi-title"
    >
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">SIMULADOR DE IMPACTO</p>
          <h2 id="roi-title">O que pode mudar na sua loja?</h2>
          <p>
            Explore um cenário com os seus números. Ajuste os valores e veja o
            impacto de uma possível melhoria na conversão.
          </p>
        </div>
        <div className="roi-grid" data-reveal>
          <div className="roi-inputs">
            <div className="range-field">
              <div>
                <label htmlFor="visitors">Visitantes mensais da loja</label>
                <output htmlFor="visitors">{number.format(visitors)}</output>
              </div>
              <input
                id="visitors"
                type="range"
                min="1000"
                max="200000"
                step="1000"
                value={visitors}
                onChange={(e) => setVisitors(Number(e.target.value))}
                aria-valuetext={`${number.format(visitors)} visitantes`}
              />
            </div>
            <div className="range-field">
              <div>
                <label htmlFor="conversion">Taxa de conversão atual</label>
                <output htmlFor="conversion">
                  {conversion.toLocaleString("pt-PT")}%
                </output>
              </div>
              <input
                id="conversion"
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={conversion}
                onChange={(e) => setConversion(Number(e.target.value))}
                aria-valuetext={`${conversion.toLocaleString("pt-PT")}%`}
              />
            </div>
            <div className="range-field">
              <div>
                <label htmlFor="order">Valor médio da encomenda</label>
                <output htmlFor="order">{money.format(order)}</output>
              </div>
              <input
                id="order"
                type="range"
                min="50"
                max="2000"
                step="10"
                value={order}
                onChange={(e) => setOrder(Number(e.target.value))}
                aria-valuetext={money.format(order)}
              />
            </div>
            <fieldset className="scenario-field">
              <legend>Melhoria de conversão simulada</legend>
              <div>
                {[20, 40].map((value) => (
                  <label
                    key={value}
                    className={lift === value ? "selected" : ""}
                  >
                    <input
                      type="radio"
                      name="lift"
                      value={value}
                      checked={lift === value}
                      onChange={() => setLift(value)}
                    />
                    <span>Cenário +{value}%</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className="roi-result">
            <div role="status" aria-live="polite" aria-atomic="true">
              <p className="result-label">ENCOMENDAS ADICIONAIS</p>
              <p className="orders-result">
                +{number.format(extraOrders)} <span>/mês</span>
              </p>
              <p className="result-label">RECEITA ADICIONAL / MÊS</p>
              <p className="monthly-result">+{money.format(monthly)}</p>
              <div className="annual-result">
                <p className="result-label">RECEITA ADICIONAL / ANO</p>
                <p>+{money.format(monthly * 12)}</p>
              </div>
            </div>
            <a className="button button-light" href="/contacto">
              Conversar sobre o meu catálogo
            </a>
            <p className="result-note">
              Simulação ilustrativa, sem garantia de resultados. Receita
              adicional = visitantes × conversão × melhoria × valor médio. Não
              inclui custos ou margens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
