import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:5000/products`);
        const products = await response.json();
        const selectedProduct = products.find((item) => item.id === parseInt(id));
        setProduct(selectedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="text-center my-5">
      <Skeleton height={400} width={400} />
    </div>
  );

  const ShowProduct = () => (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="lead">{product.description}</p>
          <h3>${product.price}</h3>
          <button className="btn btn-outline-dark" onClick={() => addProduct(product)}>
          Ajouter au panier
          </button>
          <Link to="/cart" className="btn btn-dark mx-3">
          Aller au panier
          </Link>
        </div>
      </div>
    </div>
  );

  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default Product;
