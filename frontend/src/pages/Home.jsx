import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/pokedex");
  };
  return (
    <div className="container-all-home">
      <div className="first-container">
        <div className="first-container-first">hello</div>
        <div className="first-container-second">
          <button type="button" onClick={handleNavigate}>
            PokeDex
          </button>
        </div>
      </div>
      <div className="second-container">
        <div className="second-container-first">hello</div>
        <div className="second-container-second">
          <div className="avatar-pokemonfav">
            <img
              src="https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png"
              alt="sprite-trainer-animated"
            />
            <img
              src="https://www.pokencyclopedia.info/sprites/3ds/ani_6_shiny/3ani_-S_384-mega__oras.gif"
              alt="sprite-pokemon-animated"
            />
          </div>
        </div>
        <div className="second-container-third">hello</div>
      </div>
      <div className="third-container" />
    </div>
  );
}
