import "./App.css";
import { useState } from "react";
import useApi from "./hooks/useApi";

function App() {
  const [data, setData] = useState(null);

  const { isLoading, error } = useApi({
    url: "https://fakestoreapi.com/products",
    onSuccess: setData,
  });

  return (
    <div className="App App-header">
      <header>
        <h1>Best Goshdang Ecom Store</h1>
      </header>
      <section>
        {error && <p>OOPS! Looks like something went wrong!</p>}
        {isLoading && <p>Loading...</p>}
        {data?.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <img height="100" src={product.image} alt={product.title} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
