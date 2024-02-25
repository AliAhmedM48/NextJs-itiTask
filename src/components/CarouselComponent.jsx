import React from "react";

const CarouselComponent = (props) => {
  const { images } = props;
  console.log(images);
  return (
    <>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          {images.map((url) => (
            <div key={Math.random()} class="carousel-item active">
              <img
                src={url}
                class="d-block w-100"
                alt="..."
                style={{ height: 300 }}
              />
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default CarouselComponent;
