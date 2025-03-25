import React from "react";

function DivisionForm({
  divideBy,
  finalProfit,
  onDivideByChange,
  onCalculateDivision,
  divisionResult,
}) {
  return (
    <div className="profit-calculate">
      <h2>Calcular ganancia dividida</h2>
      <label htmlFor="divideBy">Calcular Monto de ganancia en USD, por una tasa de cambio:</label>
      <input
        type="number"
        id="divideBy"
        value={divideBy}
        onChange={(e) => onDivideByChange(parseFloat(e.target.value))}
        placeholder="Introduce el número para dividir"
      />
      <button onClick={onCalculateDivision}>Calcular Ganancia Dividida</button>
      <div id="division-result">
        <p>
          <strong>Resultado de la división:</strong>
          <span> {divisionResult.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default DivisionForm;