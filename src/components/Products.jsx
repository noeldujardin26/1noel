import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import "./Products.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "animate.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Ajouté au panier !");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productList);
        setFilter(productList);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <h2 className="display-5 text-center mb-4">Nos Produits</h2>
      <hr />

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filter.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card product-card shadow-sm h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top product-image"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                </div>
                {/* Prévisualisation dynamique */}
                <div className="product-overlay">
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">Prix : {product.price} €</p>
                  <button
                    className="btn btn-outline-light m-1"
                    onClick={() => addProduct(product)}
                  >
                    Ajouter au panier
                  </button>
                  <Link to={`/product/${product.id}`} className="btn btn-danger m-1">
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
