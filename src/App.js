import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <>
    <div className="App">
        <Header />
        <NavBar />
        <ItemListContainer />
        <h1>Hola mundo! estoy usando React</h1>
    </div>
    </>
  );
}

export default App;
