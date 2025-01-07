import { useState } from 'react';

const ProductCarousel = () => {
  const productImages = [
    "https://via.placeholder.com/300x200?text=Image+1",  
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + productImages.length) % productImages.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        <img
          src={productImages[currentImageIndex]}
          alt="Product"
          className="carousel-image"
        />
      </div>
      <div className="carousel-controls">
        <button onClick={prevImage} className="carousel-button prev-button">
          &#10094; {/* Left arrow */}
        </button>
        <button onClick={nextImage} className="carousel-button next-button">
          &#10095; {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
