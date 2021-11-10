import React from "react";
import Forms from './Form';

import '../styles/Contact.css';

function Contact() {
  return (
    <section className="section-contact" id="contato">
      <div className="container-contact">
        <h2>FAÇA SEU ORÇAMENTO</h2>
        <div className="information">
          <div className="con-1">
            <div className="title-2">
              <h2>CONTATO</h2>
              <hr size="5" width="100%" align="center" />
            </div>
            <div className="cont-address">
              <img src="" alt="" />
              <h5>ENDEREÇO:</h5>
              <p>Rua Lorem Ipsum, 3128</p>
              <p>CEP 40.333.144</p>
            </div>
            <div className="cont-telephone">
              <img src="" alt="" />
              <h5>TELEFONE:</h5>
              <p>+55 (99) 9 9999-9999</p>
            </div>
            <div className="cont-email">
              <img src="" alt="" />
              <h5>E-MAIL::</h5>
              <p>teste.io@teste.com</p>
            </div>
            <div className="title-2">
              <hr size="5" width="100%" align="center" />
              <h2>REDES SOCIAIS</h2>
            </div>
            <div className="icons-contact">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="con-2">
            <Forms />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
