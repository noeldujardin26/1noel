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
        <div className="row g-3">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 col-sm-6">
              <div className="product-card shadow-sm">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-body">
                  <h5 className="product-title">{product.name}</h5>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
