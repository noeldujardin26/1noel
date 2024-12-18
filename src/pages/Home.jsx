import { Navbar, Main, Product, Footer } from "../components";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Product />
      
      {/* Section promotionnelle dynamique déplacée */}
      <div className="bg-danger text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold animate__animated animate__fadeInLeft">
            Ne manquez pas nos{" "}
            <span style={{ textDecoration: "underline" }}>offres limitées</span>{" "}
            !
          </h2>
          <p className="mt-3 animate__animated animate__fadeInRight">
            Chaque jour, des promotions exclusives sont ajoutées. Revenez souvent
            pour ne rien manquer.
          </p>
          <a href="/contact" className="btn btn-light btn-lg mt-3">
            Contactez-nous
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
