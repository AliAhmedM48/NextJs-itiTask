import { useRouter } from "next/router";
import React from "react";
const HomeComponent = () => {
  const router = useRouter();
  function goToProducts() {
    router.push("/products");
  }
  return (
    <div className="text-center">
      <h1 className="text-center my-5">Home Page</h1>
      <button
        onClick={goToProducts}
        className="bg-dark text-white rounded fs-5"
      >
        Go to Products
      </button>
    </div>
  );
};

export default HomeComponent;
