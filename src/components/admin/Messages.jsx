// src/components/admin/Messages.jsx
import React from 'react';
import './Messages.css'; // Estilos para este componente

const Messages = () => (
  <div className="messages-container">
    <h2 className="section-title">Mensajes de Contacto</h2>
    <div className="messages-list-placeholder">
      <p>Bandeja de entrada (simulada)</p>
      <div className="message-item">De: Cliente1@example.com - Asunto: Pregunta sobre horario</div>
      <div className="message-item">De: Cliente2@example.com - Asunto: Comentario sobre el servicio</div>
    </div>
  </div>
);

export default Messages;