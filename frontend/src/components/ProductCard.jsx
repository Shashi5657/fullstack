import React from "react";

const ProductCard = ({ card }) => {
  return (
    <div className="flex flex-col items-center justify-center w-3xl h-5 p-1 bg-gray-200">
      <img src={card.image} alt={card.name} />
      <h2>{card.name}</h2>
      <p>{card.price}/-</p>
    </div>
  );
};

export default ProductCard;
