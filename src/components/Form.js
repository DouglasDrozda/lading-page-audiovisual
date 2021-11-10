import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';

function Forms() {
  return (
    <form action="https://api.staticforms.xyz/submit" method="POST" id="some-form">
      <h2>FALE CONOSCO</h2>

      <FloatingLabel
        controlId="floatingInput"
        label="Nome"
        className="mb-3"
      >
      <Form.Control type="text" placeholder="name" name="name" required /></FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
      <Form.Control type="email" className="email-effect" placeholder="name@example.com" name="email" required /></FloatingLabel>

      <FloatingLabel controlId="floatingTextarea2" label="Escrever mensagem" className="cont-comentario">
        <Form.Control
          as="textarea"
          maxLength="400"
          required
          style={{ height: '100px' }}
          name="message"
        />
      </FloatingLabel>
      <Button variant="outline-secondary" type="submit">Enviar</Button>{' '}
    </form>
  );
}

export default Forms;
