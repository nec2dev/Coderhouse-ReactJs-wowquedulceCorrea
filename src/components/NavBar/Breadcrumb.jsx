import React from "react";

const Breadcrumb = () => {
  return (
    <>
      <div className="container py-4 flex items-center">
        <a href="../index.html" class="text-primary text-base">
          <i class="fas fa-home"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium"> Tienda</p>
      </div>
    </>
  );
};

export default Breadcrumb;
