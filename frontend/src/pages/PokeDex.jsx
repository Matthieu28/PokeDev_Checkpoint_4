import "./PokeDex.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MakeList() {
  const [pokeList, setPokeList] = useState([]);
  const navigate = useNavigate();

  const getPokeList = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/pokemons`
      );
      setPokeList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPokeList();
  }, []);

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="container-all-pokedex">
      <div className="pokedex-title">
        <button type="button" onClick={handleNavigate}>
          Home
        </button>
        <span>PokeDex</span>
      </div>
      <div className="pokedex-cards">
        <div className="container-cards">
          {pokeList.map((poke) => (
            <div className="cards" key={poke.id}>
              <img src={poke.url} alt={poke.name} />
              <span>{poke.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
