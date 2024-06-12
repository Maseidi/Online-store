import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../views/ProductsPage";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products">
      {products.map((elem) => (
        <ProductCard
          key={elem.id}
          id={elem.id}
          title={elem.title}
          description={elem.description}
          price={elem.price}
          category={elem.category}
          img={elem.image}
        />
      ))}
    </div>
  );
};

export default Products
