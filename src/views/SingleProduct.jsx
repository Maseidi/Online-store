import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Product from "../components/Product";
import { AppContext } from "../App";

const SingleProduct = () => {
  const { id } = useParams();

  const {created} = useContext(AppContext)

  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setProduct(created.find(x => x.id === Number(id)))
      }
    };
    getProduct();
  }, []);

  return (
    <div>
      <Header toProductCreation={true} toProducts={true} toCart={true}/>
      <Product 
        id={product.id}
        title={product.title} 
        description={product.description} 
        price={product.price} 
        category={product.category} 
        img={product.image}/>  
    </div>
  );
};

export default SingleProduct;
