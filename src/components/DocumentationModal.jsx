import React from 'react';

const DocumentationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
         
        <h2>Documentación de la Calculadora de Remesas</h2>
        
        <div className="documentation-section">
          <h3>📌 Funcionalidades Principales</h3>
          <ul>
            <li><strong>Cálculo de ganancias:</strong> Convertimos USD a otra moneda usando tasas personalizables</li>
            <li><strong>Perdida Cambiaria:</strong> Calculamos automáticamente la Perdida cambiaria</li>
            <li><strong>Historial:</strong> Registro permanente de todas las operaciones</li>
          </ul>
        </div>

        <div className="documentation-section">
          <h3>⚙️ Cómo Usar</h3>
          <ol>
            <li>Ingrese el monto en dólares</li>
            <li>Configure las tasas de cambio y comisión</li>
            <li>Haga clic en "Calcular"</li>
            <li>Registre las órdenes cuando lo necesite</li>
          </ol>
        </div>

        <div className="documentation-section">
          <h3>📊 Fórmulas Utilizadas</h3>
          <pre>
            {`Ganancia Neta = (USD * Tasa Venta) - (USD * Tasa Cambio)
Comisión Referido = Ganancia Neta * (% Comisión / 100)
Ganancia Final = Ganancia Neta - Comisión Referido`}
          </pre>
        </div>

        <button className="modal-confirm-btn" onClick={onClose}>Entendido</button>
      </div>
    </div>
  );
};

export default DocumentationModal;