import React from "react";
import "./Footer.css"; // Fichier CSS lié

const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="row">

          {/* À propos de nous */}
          <div className="col-md-3">
            <h3 className="footer__title">À propos de nous</h3>
            <p className="footer__desc">
              Bienvenue sur DestockNoël, votre destination pour des offres incroyables.
              Découvrez des promotions exceptionnelles pour un Noël magique. 🎄
            </p>
            <ul className="footer__social">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a></li>
            </ul>
          </div>

          {/* Mon compte */}
          <div className="col-md-3">
            <h3 className="footer__title">Mon Compte</h3>
            <ul className="footer__links">
              <li><a href="/cart">Panier</a></li>
              <li><a href="/checkout">Passer à la caisse</a></li>
              <li><a href="/wishlist">Liste de souhaits</a></li>
            </ul>
          </div>

          {/* Catégories */}
          <div className="col-md-3">
            <h3 className="footer__title">Catégories</h3>
            <ul className="footer__links">
              <li><a href="/about">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy-policy">Politique de confidentialité</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3">
            <h3 className="footer__title">Newsletter</h3>
            <p className="footer__desc">Recevez nos dernières offres directement dans votre boîte mail !</p>
            <form className="newsletter__form">
              <input type="email" placeholder="Adresse email" className="newsletter__input" />
              <button type="submit" className="newsletter__button">S'abonner</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom d-flex justify-content-between align-items-center mt-4">
          <p className="footer__copyright">
            Copyright &copy; 2024 <a href="/">DestockNoël</a>. Tous droits réservés.
          </p>
          <img src="/assets/payment-visa-card.png" alt="Méthodes de paiement" className="footer__payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
