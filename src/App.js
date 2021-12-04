import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import ProductsList from "./components/ProductsList/ProductsList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="section">
        <section className="section-center products-page">
          <Filters />
          <ProductsList />
        </section>
      </main>
    </div>
  );
}

export default App;
