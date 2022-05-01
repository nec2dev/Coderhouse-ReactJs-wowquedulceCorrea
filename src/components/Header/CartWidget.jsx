const CartWidget = () => {
  return (
    <a
      href="./pages/checkout.html"
      className="text-center text-gray-700 hover:text-primary transition relative"
    >
      <div className="text-2xl">
        <i className="fas fa-shopping-bag"></i>
      </div>
      <div className="text-xs leading-3">Carrito</div>
      <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
        0
      </span>
    </a>
  );
};
export default CartWidget;
