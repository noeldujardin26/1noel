// Importation des bibliothèques nécessaires
import React from "react";
import { Footer, Navbar } from "../components"; // Importation des composants personnalisés
import { useSelector } from "react-redux"; // Utilisé pour accéder à l'état global via Redux
import { Link } from "react-router-dom"; // Utilisé pour gérer la navigation entre les pages

// Composant principal pour la page de commande
const Checkout = () => {
  // Récupération de l'état global contenant les articles du panier
  const state = useSelector((state) => state.handleCart);

  // Composant affiché lorsque le panier est vide
  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Aucun article dans le panier</h4>
            {/* Lien pour retourner à la page d'accueil et continuer les achats */}
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continuer vos achats
            </Link>
          </div>
        </div>
      </div>
    );
  };

  // Composant affichant les détails du panier et le formulaire de commande
  const ShowCheckout = () => {
    let subtotal = 0; // Calcul du sous-total des articles
    let shipping = 30.0; // Frais de livraison fixes
    let totalItems = 0; // Nombre total d'articles dans le panier

    // Calcul du sous-total en fonction des prix et quantités
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    // Calcul du nombre total d'articles dans le panier
    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            {/* Section : Résumé de la commande */}
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Résumé de la commande</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Produits ({totalItems})<span>{Math.round(subtotal)} €</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Livraison
                      <span>{shipping} €</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Montant total</strong>
                      </div>
                      <span>
                        <strong>{Math.round(subtotal + shipping)} €</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section : Formulaire d'adresse de facturation */}
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Adresse de facturation</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      {/* Champs : Nom et prénom */}
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">
                          Prénom
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          required
                        />
                        <div className="invalid-feedback">
                          Un prénom valide est requis.
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">
                          Nom
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          required
                        />
                        <div className="invalid-feedback">
                          Un nom valide est requis.
                        </div>
                      </div>

                      {/* Champs : Email */}
                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          required
                        />
                        <div className="invalid-feedback">
                          Veuillez entrer une adresse email valide.
                        </div>
                      </div>

                      {/* Champs : Adresse */}
                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">
                          Adresse
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          required
                        />
                        <div className="invalid-feedback">
                          Veuillez entrer une adresse valide.
                        </div>
                      </div>

                      {/* Sélection : Pays */}
                      <div className="col-md-5 my-1">
                        <label htmlFor="country" className="form-label">
                          Pays
                        </label>
                        <select className="form-select" id="country" required>
                          <option value="">Choisissez...</option>
                          <option>France</option>
                        </select>
                        <div className="invalid-feedback">
                          Veuillez sélectionner un pays.
                        </div>
                      </div>

                      {/* Sélection : Région */}
                      <div className="col-md-4 my-1">
                        <label htmlFor="state" className="form-label">
                          Région
                        </label>
                        <select className="form-select" id="state" required>
                          <option value="">Choisissez...</option>
                          <option>Ile-de-France</option>
                        </select>
                        <div className="invalid-feedback">
                          Veuillez fournir une région valide.
                        </div>
                      </div>

                      {/* Champs : Code postal */}
                      <div className="col-md-3 my-1">
                        <label htmlFor="zip" className="form-label">
                          Code postal
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          required
                        />
                        <div className="invalid-feedback">
                          Le code postal est requis.
                        </div>
                      </div>
                    </div>

                    {/* Section : Paiement */}
                    <h4 className="mb-3">Paiement</h4>
                    <div className="row gy-3">
                      {/* Champs : Nom sur la carte */}
                      <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                          Nom sur la carte
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          required
                        />
                        <small className="text-muted">
                          Nom complet tel qu'affiché sur la carte.
                        </small>
                        <div className="invalid-feedback">
                          Le nom sur la carte est requis.
                        </div>
                      </div>

                      {/* Champs : Numéro de carte */}
                      <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                          Numéro de carte
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          required
                        />
                        <div className="invalid-feedback">
                          Le numéro de carte est requis.
                        </div>
                      </div>

                      {/* Champs : Date d'expiration */}
                      <div className="col-md-3 my-1">
                        <label htmlFor="cc-expiration" className="form-label">
                          Date d'expiration
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          required
                        />
                        <div className="invalid-feedback">
                          La date d'expiration est requise.
                        </div>
                      </div>

                      {/* Champs : Code CVV */}
                      <div className="col-md-3 my-1">
                        <label htmlFor="cc-cvv" className="form-label">
                          Code CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          required
                        />
                        <div className="invalid-feedback">
                          Le code de sécurité est requis.
                        </div>
                      </div>
                    </div>

                    {/* Bouton : Continuer */}
                    <button
                      className="w-100 btn btn-primary"
                      type="submit"
                      disabled
                    >
                      Continuer vers le paiement
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {/* Barre de navigation */}
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Passer la commande</h1>
        <hr />
        {/* Affichage du composant en fonction du contenu du panier */}
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      {/* Pied de page */}
      <Footer />
    </>
  );
};

// Exportation du composant
export default Checkout;
