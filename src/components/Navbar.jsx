import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import PromoBanner from "../components/PromoBanner";
import "./Navbar.css"; // CSS amélioré pour la Navbar

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <>
      {/* Bannière Promotionnelle */}
      <PromoBanner />

      {/* Barre de Navigation */}
      <nav className="navbar navbar-expand-lg sticky-navbar py-3">
        <div className="container">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              src="/assets/logo-2.png" // Remplace par le chemin de ton logo
              alt="DestockNoël"
              className="navbar-logo"
            />
          </NavLink>

          {/* Toggler pour Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenu de la Navbar */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav m-auto text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Accueil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">
                  Produits
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  À propos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Bouton Panier */}
            <div className="buttons text-center">
              <NavLink to="/cart" className="btn m-2">
                <i className="fa fa-cart-shopping me-1"></i> Panier ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
