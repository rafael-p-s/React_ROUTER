import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

export function Product() {
  // 4 - rota dinâmica
  // {id} está fazendo uma referencia ao id pego no App.js
  const { id } = useParams();

  // 5 - carregamento dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {/* {loading && <p>Carregando...</p>} */}
      {product && (
        <div>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            {/* 6 - nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações:</Link>
        </div>
      )}
    </>
  );
}
