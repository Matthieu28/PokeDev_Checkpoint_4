import "./Bag.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Bag = () => {
  const [bagPokemon, setBagPokemon] = useState([]);

  const getBagPokemon = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/bagpokemons`
      );
      setBagPokemon(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBagPokemon();
  }, []);

  return (
    <div>
      <h1>Bag</h1>
      {bagPokemon.map((item) => (
        <div key={item.id}>
          <h1>{item.pokemonId}</h1>
        </div>
      ))}
    </div>
  );
};

export default Bag;
