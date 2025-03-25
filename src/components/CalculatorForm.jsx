import React from "react";

function CalculatorForm({
  usdAmount,
  exchangeRate,
  sellRate,
  commissionRate,
  onUsdAmountChange,
  onExchangeRateChange,
  onSellRateChange,
  onCommissionRateChange,
  onCalculate,
}) {
  return (
    <div>
      {/* Input: Monto en dólares */}
      <label htmlFor="usdAmount">Monto en dólares:</label>
      <input
        type="number"
        id="usdAmount"
        value={usdAmount}
        onChange={(e) => {
          const value = Math.max(0, parseFloat(e.target.value) || 0);
          onUsdAmountChange(value);
        }}
        placeholder="Introduce el monto en dólares"
      />

      {/* Input: Tasa de cambio */}
      <label htmlFor="exchangeRate">Tasa de cambio:</label>
      <input
        type="number"
        id="exchangeRate"
        value={exchangeRate}
        onChange={(e) => {
          const value = Math.max(0, parseFloat(e.target.value) || 0);
          onExchangeRateChange(value);
        }}
        placeholder="Introduce la tasa de cambio"
      />

      {/* Input: Tasa de venta */}
      <label htmlFor="sellRate">Tasa de venta:</label>
      <input
        type="number"
        id="sellRate"
        value={sellRate}
        onChange={(e) => {
          const value = Math.max(0, parseFloat(e.target.value) || 0);
          onSellRateChange(value);
        }}
        placeholder="Introduce la tasa de venta"
      />
 
      <label htmlFor="commissionRate">Comisión por perdida cambiaria (Valor Porcentual '%'):</label>
      <input
        type="number"
        id="commissionRate"
        value={commissionRate}
        onChange={(e) => {
          const value = Math.max(0, parseFloat(e.target.value) || 0);
          onCommissionRateChange(value);
        }}
        placeholder="Introduce la comisión"
      />

      <button onClick={onCalculate}>Calcular Ganancia y Comisión</button>
    </div>
  );
}

export default CalculatorForm;