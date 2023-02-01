import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/CurrentUserContext";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setCurrentUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      // eslint-disable-next-line no-alert
      alert("You must provide an email and a password");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
          {
            email,
            password,
          },
          { withCredentials: true }
        )
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/home");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="container-all">
      <div className="container-left">
        <div className="container-left-title">
          <span>PokeDev</span>
        </div>
      </div>
      <div className="container-right">
        <form className="login" onSubmit={handleSubmit}>
          <label htmlFor="email">
            <span>Email :</span>
            <div className="bar" />
            <input
              type="email"
              id="email"
              required
              placeholder="example@mail.com"
              value={email}
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor="password">
            <span>Password :</span>
            <div className="bar" />
            <input
              type="password"
              id="password"
              required
              placeholder="Your password"
              value={password}
              onChange={handleChangePassword}
            />
          </label>
          <div className="button-container">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
