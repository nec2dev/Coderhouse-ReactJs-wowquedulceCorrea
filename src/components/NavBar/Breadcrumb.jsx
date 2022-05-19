import React from "react";
import { useParams } from 'react-router-dom';

const Breadcrumb = () => {
  const { id } = useParams();
  return (
    <div className="container py-1 bg-white flex items-center">
      <a href="/" className="text-primary text-base">
        <i className="fas fa-home"></i>
      </a>
      <span className="text-sm text-gray-400">
        <i className="fa fa-chevron-right"></i>
      </span>
      <p className="text-gray-600 font-medium">{id}</p>
    </div>
  );
};
export default Breadcrumb;
