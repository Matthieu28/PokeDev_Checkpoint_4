import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useCurrentUserContext();

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };
  return (
    <div className="container-all-profile">
      <span>Profile</span>
      <span>{currentUser.email}</span>
      <span>{currentUser.username}</span>
      <button type="button" onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default Profile;
