import React from "react";
import "./main.css"; // Assure-toi d'importer le CSS pour la responsivité

const Main = () => {
  return (
    <>
      {/* Section principale avec bannière */}
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid hero-image"
            src="./assets/main22.png"
            alt="Bannière principale"
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center text-center">
            <div className="container">
              <h1 className="card-title fw-bold animate__animated animate__fadeInDown">
                Arrivages Spéciaux pour Noël
              </h1>
              <p className="card-text fs-5 d-none d-md-block animate__animated animate__fadeInUp">
                Découvrez nos offres exclusives et promotions limitées pour les fêtes de
                fin d'année. <br />
                Profitez des réductions exceptionnelles sur une large gamme de produits !
              </p>
              <a
                href="/product"
                className="btn btn-danger btn-lg mt-3 animate__animated animate__zoomIn"
              >
                Découvrir les Offres
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
