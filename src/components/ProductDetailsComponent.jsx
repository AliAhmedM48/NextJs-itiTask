import { useRouter } from "next/router";
import React from "react";
import CarouselComponent from "./CarouselComponent";

const ProductDetailsComponent = (props) => {
  const { thumbnail, title, category, rating, price, description, images } =
    props;
  console.log(images);

  const router = useRouter();

  function handleBack() {
    //  router.push("/products");
    router.back();
  }
  return (
    <>
      <div className="container card py-5 my-5">
        <figure className="text-center">
          <img
            className="mx-auto text-center"
            src={thumbnail}
            style={{ height: 500 }}
            alt={title}
          />
        </figure>
        <div className="row">
          <div className="col-md-6">
            <CarouselComponent images={images} />
          </div>
          <div className="col-md-6">
            <h1 className="h5">{title}</h1>
            <p>
              Category: <span>{category}</span>
            </p>
            <p>
              Rate: <span>{rating}</span>
            </p>
            <p>
              Description: <span>{description}</span>
            </p>
            <p>
              Price: <span>{price}</span>
            </p>
          </div>
        </div>
        <button onClick={handleBack} className="btn btn-dark text-white">
          Back
        </button>
      </div>
    </>
  );
};
export default ProductDetailsComponent;
