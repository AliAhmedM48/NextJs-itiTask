import React from "react";
import ProductsCard from "./ProductsCardComponent";
import ProductsCardComponent from "./ProductsCardComponent";

const ProdcutsComponent = (props) => {
  const { products } = props;
  console.log(products);
  return (
    <div className="text-center">
      <h1 className="text-center my-5">Products Page</h1>
      <div className="row g-4">
        {products.map((product) => (
          <ProductsCardComponent key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProdcutsComponent;
