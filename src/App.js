import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Saludo from './components/Saludo';
import ItemListContainer from "./components/ItemListContainer";
function App() {
  const myGreeting = () => {}
  return (
    <>
      <div className="App">
        <Header />
        <NavBar />
        <ItemListContainer greeting="Saludo"></ItemListContainer>
        <Saludo name="Mayra" age="40" action={myGreeting} />
        {/* <Saludo name="Nahuel" age="42" /> */}
      </div>
    </>
  );
}

export default App;
