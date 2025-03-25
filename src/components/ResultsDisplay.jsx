import React from "react";

function ResultsDisplay({ netProfit, referralCommission, finalProfit }) {
  return (
    <div id="results">
      <h2>Resultados</h2>
      <p>
        <strong>Ganancia neta: </strong>
        <span>{netProfit.toFixed(2)}</span>
      </p>
      <p>
        <strong>Comisión para referidos: </strong>
        <span>{referralCommission.toFixed(2)}</span>
      </p>
      <p>
        <strong>Ganancia neta después de comisión: </strong>
        <span>{finalProfit.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default ResultsDisplay;