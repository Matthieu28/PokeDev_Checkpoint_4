import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

export default function Home() {
  const { currentUser } = useCurrentUserContext();

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/");
  };

  const handleProfile = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/pokedex");
  };

  const handleNavigateCatch = (e) => {
    e.preventDefault();
    navigate("/catch");
  };

  const handleNavigateBag = (e) => {
    e.preventDefault();
    navigate("/bag");
  };

  return (
    <div className="container-all-home">
      <div className="first-container">
        <div className="first-container-first">
          <button type="button" onClick={handleNavigateCatch}>
            Catch
          </button>
        </div>
        <div className="first-container-second">
          <button type="button" onClick={handleNavigate}>
            PokeDex
          </button>
          <button type="button" onClick={handleNavigateBag}>
            Bag
          </button>
        </div>
      </div>
      <div className="second-container">
        <div className="second-container-first">
          <span
            style={{
              color: `${currentUser.roleID === 3 ? "#3AFF00" : "white"}`,
            }}
          >
            {currentUser.username}
          </span>
        </div>
        <div className="second-container-second">
          <div className="avatar-pokemonfav">
            <img
              src="https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png"
              alt="sprite-trainer-animated"
            />
            {currentUser.roleID === 3 ? (
              <img
                src="https://play.pokemonshowdown.com/sprites/xyani-shiny/zygarde-complete.gif"
                alt="sprite-pokemon-animated"
              />
            ) : (
              <img
                src="https://www.pokencyclopedia.info/sprites/3ds/ani_6_shiny/3ani_-S_384-mega__oras.gif"
                alt="sprite-pokemon-animated"
              />
            )}
          </div>
        </div>
        <div className="second-container-third">
          <button type="button" onClick={handleProfile}>
            Profile
          </button>
          <button type="button" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
      <div className="third-container">
        <div className="chat-container">
          <div className="chat-container-title">
            <span>Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
}
