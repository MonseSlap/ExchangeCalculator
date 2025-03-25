import React, { useState } from "react";
import EmailForm from "./EmailForm";


function OrderItem({ order, onDeleteOrder }) {
  const [showEmailForm, setShowEmailForm] = useState(false);

  // Función para copiar al portapapeles (existente)
  const copyToClipboard = () => {
    const textToCopy = `ID de Orden: ${order.id} | Monto en USD: ${order.usdAmount} | Ganancia Neta: ${order.netProfit.toFixed(2)} | Comisión Referido: ${order.referralCommission.toFixed(2)} | Ganancia Final: ${order.finalProfit.toFixed(2)}`;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => alert("Información copiada al portapeles"))
      .catch(() => alert("Error al copiar"));
  };

  // 🔥 Nueva función para WhatsApp
  const sendWhatsApp = () => {
    const message = 
    `📊 *DETALLES DE LA ORDEN* 📊\n\n` +
    `🆔 *ID de Orden:* ${order.id}\n` +
    `📅 *Fecha:* ${new Date().toLocaleDateString()}\n\n` +
    `💵 *Monto en USD:* $${order.usdAmount}\n` +
    `📈 *Ganancia Neta:* ${order.netProfit.toFixed(2)} \n` +
    `👥 *Perdida Cambiaria:* ${order.referralCommission.toFixed(2)} \n` +
    `💰 *Ganancia Final:* ${order.finalProfit.toFixed(2)} \n\n` +
    `_¡Gracias por usar nuestro servicio!_ ✨`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="order-item">
      <strong>ID de Orden:</strong> {order.id} |{" "}
      <strong>Monto en USD:</strong> {order.usdAmount} |{" "}
      <strong>Ganancia Neta:</strong> {order.netProfit.toFixed(2)} |{" "}
      <strong>Comisión Referido:</strong> {order.referralCommission.toFixed(2)} |{" "}
      <strong>Ganancia Final:</strong> {order.finalProfit.toFixed(2)}

      <div className="order-buttons">
        <button className="copy-info-btn" onClick={copyToClipboard}>
          Copiar Información
        </button>
        
        {/* 🔥 Nuevo botón de WhatsApp */}
        <button className="whatsapp-btn" onClick={sendWhatsApp}>
  Enviar por WhatsApp
</button>
<button 
    className="email-btn" 
    onClick={() => setShowEmailForm(!showEmailForm)}
  >
    {showEmailForm ? "Cancelar envío" : "Enviar por correo"}
  </button>

        <button 
          className="delete-order-btn" 
          onClick={() => onDeleteOrder(order.id)}
        >
          Eliminar
        </button>
      </div>

      {showEmailForm && <EmailForm order={order} />}
    </div>
  );
}

export default OrderItem;