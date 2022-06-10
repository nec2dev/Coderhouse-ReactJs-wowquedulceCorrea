import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCountWish = ({ initialWish, stockWish, onAddWish }) => {
  const [countWish, setCountWish] = useState(initialWish);
  const handleSubstractWish = () => {
    if (countWish > initialWish) {
      setCountWish((counterWish) => counterWish - 1);
    }
  };
  const handleAddWish = () => {
    if (countWish < stockWish) {
      setCountWish((counterWish) => counterWish + 1);
    }
  };
  return (
    <div>
      <Link to="#" onClick={() => onAddWish(countWish)} className="text-xl flex items-center justify-center cursor-pointer select-none">
        <i className="fas fa-heart text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-400 transition"></i>
      </Link>
    </div>
  );
};

export default ItemCountWish;
