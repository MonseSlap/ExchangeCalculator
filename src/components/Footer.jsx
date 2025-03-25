import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FaHeartCircleCheck } from 'react-icons/fa6';
import DocumentationModal from './DocumentationModal';

const Footer = ({ onShowDocumentation }) => {
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Calculadora de Remesas</h4>
            <p className="small-text">
              Esta app de uso libre permite calcular ganancias para los montos de tus transacciones 
              a altas velocidades. Aunque aún está en desarrollo, puedes ayudar a su progreso 
              donando al siguiente botón.
            </p>
            <a 
              href="https://paypal.me/MonseSlap?country.x=VE&locale.x=es_XC" 
              className="donate-button" 
              aria-label="Donar" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button>
                <FaHeartCircleCheck /> Donar
              </button>
            </a>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-links">
              <a 
                href="https://api.whatsapp.com/send?phone=584125908047" 
                aria-label="WhatsApp"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> Soporte
              </a>
              <a 
                href="https://github.com/MonseSlap" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/alejandro-monserrat-nu%C3%B1ez-rangel-b5853025b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <p>© A&M Calculator {new Date().getFullYear()}</p>
            <p>Todos los derechos reservados</p>
            <button 
               onClick={onShowDocumentation} 
              className="doc-link"
              aria-label="Documentación técnica"
            >
              Ver Documentación Técnica
            </button>
          </div>
        </div>
      </footer>

      <DocumentationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;