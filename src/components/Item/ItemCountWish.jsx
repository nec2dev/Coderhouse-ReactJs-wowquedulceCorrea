import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCountWish = ({ initialWish, stockWish, onAddWish }) => {
  const [countWish] = useState(initialWish);
  return (
    <div>
      <Link to="#" onClick={() => onAddWish(countWish)} className="text-xl flex items-center justify-center cursor-pointer select-none">
        <i className="fas fa-heart text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition"></i>
      </Link>
    </div>
  );
};

export default ItemCountWish;
