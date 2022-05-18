import {Link} from "react-router-dom";

function ItemTest({prod}) {
	return (
		<div className='col-md-4'>
            <div className="card mt-5">
                <img src={prod.imagen} className="card-img-top card-img-products" alt={prod.nombre}/>
                <div className="card-body text-center">
                    <h4 className="card-title">{prod.nombre}</h4>
                    <h5 className="card-text">${prod.precio}</h5>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/producto/${prod.id}`}>
                        <button className="btn btn-danger bg-gradient">Ver Más</button>
                    </Link>
                </div>
            </div>
		</div>
	);
}

export default ItemTest;