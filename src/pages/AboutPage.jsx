import React from "react";
import { Footer, Navbar } from "../components";
import "./AboutPage.css"; // Assure-toi d'avoir le CSS associé

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Section Hero */}
        <div className="hero-section text-center py-5">
          <h1 className="hero-title animate__animated animate__fadeInDown">
            Bienvenue chez <span className="highlight">DestockNoël 🎄</span>
          </h1>
          <p className="hero-subtitle animate__animated animate__fadeInUp">
            Offres exceptionnelles - Premier arrivé, premier servi !
          </p>
        </div>

        {/* À propos */}
        <div className="container py-5">
          <h2 className="section-title text-center mb-4">À propos de nous</h2>
          <p className="lead about-text text-center">
            Bienvenue chez DestockNoël, votre destination incontournable pour
            réaliser vos achats de Noël à prix exceptionnels. Spécialisé dans la
            vente en destockage, nous vous proposons des offres imbattables sur
            des produits issus des grandes marques, avec un concept simple :{" "}
            <strong>Premier arrivé, premier servi.</strong>
          </p>
          <p className="about-details text-justify">
            DestockNoël est né de l'idée de permettre à chacun de célébrer les
            fêtes de fin d'année dans la joie et la générosité, sans se ruiner.
            Nous travaillons en partenariat avec des grandes marques reconnues
            pour offrir des produits neufs, des invendus ou des fins de séries à
            des prix défiant toute concurrence.
          </p>
          <h4 className="text-center my-4">Notre Concept : Premier arrivé, premier servi ⏳</h4>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              🎁 <strong>Articles électroniques :</strong> Smartphones,
              ordinateurs portables, accessoires.
            </li>
            <li className="list-group-item">
              🎁 <strong>Mode et habillement :</strong> Vêtements pour hommes,
              femmes et enfants.
            </li>
            <li className="list-group-item">
              🎁 <strong>Jouets et jeux :</strong> Cadeaux pour petits et grands.
            </li>
            <li className="list-group-item">
              🎁 <strong>Électroménager :</strong> Petit électroménager pour la
              maison.
            </li>
            <li className="list-group-item">
              🎁 <strong>Produits de beauté :</strong> Coffrets cadeaux et soins
              de grandes marques.
            </li>
          </ul>
          <div className="row text-center my-5">
            <div className="col-md-4">
              <div className="card h-100 about-card">
                <i className="fas fa-tags fa-3x my-3 text-danger"></i>
                <h5 className="fw-bold">Des Prix Imbattables 🏷️</h5>
                <p>
                  Promotions jusqu’à <strong>-70%</strong> pour célébrer Noël
                  sans se ruiner.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 about-card">
                <i className="fas fa-truck fa-3x my-3 text-danger"></i>
                <h5 className="fw-bold">Livraison Rapide 🚚</h5>
                <p>Recevez vos commandes rapidement, prêtes à mettre sous le sapin.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 about-card">
                <i className="fas fa-star fa-3x my-3 text-danger"></i>
                <h5 className="fw-bold">Produits de Grandes Marques ⭐</h5>
                <p>Authentiques, de qualité et issus des meilleures marques.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi choisir DestockNoël */}
        <div className="container py-5">
          <h2 className="section-title text-center mb-4">
            Pourquoi choisir DestockNoël ? 🎅
          </h2>
          <ul className="list-unstyled text-center">
            <li>✅ Des promotions toute l’année, amplifiées pour Noël.</li>
            <li>✅ Un large choix de cadeaux pour toute la famille.</li>
            <li>✅ Des stocks limités pour des offres exclusives.</li>
            <li>✅ Une livraison rapide pour que chaque cadeau arrive à temps.</li>
          </ul>
        </div>

        {/* Appel à l'action */}
        <div className="container text-center py-5">
          <h3 className="fw-bold mb-3">Faites de cette année un Noël magique avec DestockNoël 🎄</h3>
          <p>Rejoignez des milliers de clients satisfaits et profitez des meilleures offres de Noël !</p>
          <button className="btn btn-danger btn-lg">Voir les Offres 🎁</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
