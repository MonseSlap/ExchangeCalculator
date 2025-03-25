import React, { useState } from "react";
import emailjs from "emailjs-com";

function EmailForm({ order }) {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Configuración de EmailJS
    const templateParams = {
      to_email: email,
      orderId: order.id,
      usdAmount: order.usdAmount,
      netProfit: order.netProfit.toFixed(2),
      referralCommission: order.referralCommission.toFixed(2),
      finalProfit: order.finalProfit.toFixed(2),
    };

    emailjs
      .send(
        "service_2n848dp", // Reemplaza con tu Service ID
        "template_gocpapg", // Reemplaza con tu Template ID
        templateParams,
        "YYnK47VghNky7cueW" // Reemplaza con tu User ID (Public Key)
      )
      .then(
        () => {
          setIsSent(true);
          setEmail("");
        },
        (error) => {
          alert("Error al enviar el correo: " + error.text);
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Ingresa tu correo electrónico"
        required
      />
      <button type="submit" disabled={isSending}>
        {isSending ? "Enviando..." : "Enviar información al correo"}
      </button>
      {isSent && <p className="success-message">¡Correo enviado con éxito! (Recuerde comprobar su bandeja de spam en caso de no encontrar el correo.)</p>}
    </form>
  );
}

export default EmailForm;