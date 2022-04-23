const Saludo = (props) => {
  return (
    <>
      <div class="container-card">
        <div class="content-card sm:flex sm:items-center">
          <img
            class="content-card__img sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24"
            src="https://picsum.photos/100/100"
            alt=""
          />
          <div class="content-card__info sm:mt-0 sm:ml-4 text-center sm:text-left">
            <h1>Mi primer componente de React Js</h1>
            <p class="content-card__name">Nahuel Correa</p>
            <p class="content-card__work">Developer</p>
            <div class="content-card__btns">
              <div className="text-3xl">
                Hola mundo! Saludos a {props.name} !!
              </div>
              <div>Edad: {props.age} años</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Saludo;
