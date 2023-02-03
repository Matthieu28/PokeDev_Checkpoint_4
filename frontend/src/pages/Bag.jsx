/* eslint-disable react/no-array-index-key */
import "./Bag.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonDelete from "./ButtonDelete";

const Bag = () => {
  const [bagPokemon, setBagPokemon] = useState([]);

  const navigate = useNavigate();

  const handleNavigateHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

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
    <div className="container-all-bag">
      <div className="title-div">
        <span>Bag</span>
        <button type="button" onClick={handleNavigateHome}>
          Home
        </button>
      </div>
      <div className="container-content-bag">
        <div className="container-filters">Filter</div>
        <div className="container-pokemon-bag">
          <div className="container-bag-cards">
            {bagPokemon.map((item, index) => (
              <div
                key={`pokemon-${index}${item.id}`}
                className="cards-bag"
                style={{
                  backgroundColor: "white",
                }}
              >
                <img src={item.url} alt={item.name} />
                <span>{item.name}</span>
                <ButtonDelete id={item.bagId} setRefresh={getBagPokemon} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bag;
