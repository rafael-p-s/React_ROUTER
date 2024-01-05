import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function SearchForm() {
  // Essa parte aqui eśta sendo criada uma varial para receber a busca, a busca e como ela irá ser usada
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit=(e)=> {
    e.preventDefault();
    navigate("/search?q=" + query);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
}
