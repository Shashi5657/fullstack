import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ card }) => {
  return (
    <Link
      to={`/product/${card._id}`}
      className="flex flex-col items-center justify-center w-3xl h-5 p-1 bg-gray-200 hover:shadow-lg transition"
    >
      <img
        src={card.image}
        alt={card.name}
        className="w-40 h-40 object-cover"
      />
      <h2 className="text-lg font-bold">{card.name}</h2>
      <p className="text-green-600 font-semibold">${card.price}/-</p>
    </Link>
  );
};

export default ProductCard;
