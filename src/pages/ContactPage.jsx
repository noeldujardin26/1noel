import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-4">
        <h1 className="text-center fw-bold mb-4">Nous Contacter</h1>
        <hr />
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <form>
              {/* Nom */}
              <div className="form-group mb-3">
                <label htmlFor="lastName" className="fw-bold">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Entrez votre nom"
                  required
                />
              </div>

              {/* Prénom */}
              <div className="form-group mb-3">
                <label htmlFor="firstName" className="fw-bold">Prénom</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Entrez votre prénom"
                  required
                />
              </div>

              {/* Numéro de téléphone */}
              <div className="form-group mb-3">
                <label htmlFor="phoneNumber" className="fw-bold">Numéro de Téléphone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Entrez votre numéro de téléphone"
                  pattern="[0-9]{10}"
                  required
                />
                <small className="form-text text-muted">
                  Format : 10 chiffres (ex: 0123456789)
                </small>
              </div>

              {/* Email */}
              <div className="form-group mb-3">
                <label htmlFor="email" className="fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Entrez votre adresse email"
                  required
                />
              </div>

          
              {/* Bouton d'envoi */}
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-danger px-4 fw-bold"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
