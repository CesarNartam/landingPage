import React from "react";

const Contact = () => {
    return(
        <div className="contact-page-wrapper">
            <h1 className="primary-heading">¿Quieres conocer más?</h1>
            <h1 className="primary-text">Mantente en contacto con nosotros</h1>
            <div className="contact-form-container">
                <input type="text" placeholder="youremail@example.com" />
                <button className="secondary-button">Registrar</button>
            </div>
        </div>
    )
}

export default Contact;