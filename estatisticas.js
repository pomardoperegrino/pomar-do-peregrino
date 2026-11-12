/* Estatísticas do Pomar do Peregrino.
 * Após criar um site no GoatCounter, informe seu domínio abaixo.
 * Exemplo: "pomardoperegrino.goatcounter.com" (somente se realmente registrado).
 * Nunca insira senhas, chaves privadas ou dados pessoais neste arquivo público.
 */
(function () {
  "use strict";
  const DOMINIO_GOATCOUNTER = "";
  const total = document.getElementById("total-visitas");
  const info = document.getElementById("visitas-info");
  if (!DOMINIO_GOATCOUNTER) return;
  if (!/^[a-z0-9-]+\.goatcounter\.com$/.test(DOMINIO_GOATCOUNTER)) {
    if (info) info.textContent = "Configuração de estatísticas inválida.";
    return;
  }
  const base = "https://" + DOMINIO_GOATCOUNTER;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://gc.zgo.at/count.js";
  script.dataset.goatcounter = base + "/count";
  document.head.appendChild(script);
  if (!total) return;
  fetch(base + "/counter/TOTAL.json", {mode:"cors", cache:"no-store"})
    .then(r => { if (!r.ok) throw new Error("indisponível"); return r.json(); })
    .then(data => {
      const n = Number(String(data.count || "").replace(/[^0-9]/g, ""));
      if (!Number.isSafeInteger(n) || n < 0) throw new Error("contagem inválida");
      total.textContent = new Intl.NumberFormat("pt-BR").format(n) + " visualizações";
      if (info) info.textContent = "Total de visualizações registradas desde a ativação das estatísticas.";
    })
    .catch(() => {
      total.textContent = "Estatísticas em atualização";
      if (info) info.textContent = "O registro pode estar funcionando mesmo quando o total público está indisponível.";
    });
})();