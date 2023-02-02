import "./Catch.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const Catch = () => {
  const [catchPokemon, setCatchPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const [cooldown, setCooldown] = useState(0);
  const [count, setCount] = useState(0);

  const { currentUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleNavigateHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  const getCatchPokemon = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/pokemons`
      );
      setCatchPokemon(data);
      setCurrentPokemon(data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClickCatch = () => {
    if (cooldown === 0) {
      setCurrentPokemon(
        catchPokemon[Math.floor(Math.random() * catchPokemon.length)]
      );
      setCooldown(2);
    }
  };

  const handlePokeball = () => {
    if (Object.keys(currentPokemon).length === 0) {
      return;
    }
    if (Math.random() < 0.75) {
      // eslint-disable-next-line no-alert
      alert("Catched");
      setCount(count + 1);
      setCurrentPokemon({});
    } else {
      // eslint-disable-next-line no-alert
      alert("Escaped");
      setCount(0);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (cooldown > 0) {
        setCooldown(cooldown - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [cooldown]);

  useEffect(() => {
    getCatchPokemon();
  }, []);

  return (
    <div className="container-all-catch">
      <div className="pokediv">
        <div className="pokeHealBar">
          <div className="pokeHealBar-inside">
            <div className="pokeHealBar-inside-in">
              <div className="pokeHealBar-inside-in-up">
                <p>{currentPokemon.name}</p>
                <p>Lv. 1</p>
              </div>
              <div className="pokeHealBar-inside-in-down">
                <div className="healBar" />
              </div>
            </div>
          </div>
        </div>
        <img src={currentPokemon.url} alt={currentPokemon.name} />
      </div>
      <div className="pokediv2">
        <div className="pokediv2-avatar">
          <img
            src="https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png"
            alt={currentUser.username}
          />
          <div className="barnav" />
        </div>
        <div className="pokediv2-button">
          <div className="spawn-button">
            <button type="button" onClick={handleClickCatch}>
              {cooldown > 0 ? `${cooldown}s` : "Click"}
            </button>
          </div>
          <div className="ball-button">
            <div className="ball-title">
              <span>Your Balls :</span>
            </div>
            <div className="ball">
              <button type="button" onClick={handlePokeball}>
                <img
                  src="https://www.pokepedia.fr/images/0/07/Miniature_Pok%C3%A9_Ball_HOME.png"
                  alt="pokeball"
                />
              </button>
              <button type="button" onClick={handlePokeball}>
                <img
                  src="https://www.pokepedia.fr/images/2/23/Miniature_Super_Ball_HOME.png"
                  alt="superball"
                />
              </button>
              <button type="button" onClick={handlePokeball}>
                <img
                  src="https://www.pokepedia.fr/images/a/a2/Miniature_Hyper_Ball_HOME.png"
                  alt="hyperball"
                />
              </button>
              <button type="button" onClick={handlePokeball}>
                <img
                  src="https://www.pokepedia.fr/images/3/34/Miniature_Master_Ball_HOME.png"
                  alt="masterball"
                />
              </button>
            </div>
          </div>
          <span>Count : {count}</span>
          <button type="button" onClick={handleNavigateHome}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catch;
