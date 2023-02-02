import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokeDex from "./pages/PokeDex";
import Catch from "./pages/Catch";
import Bag from "./pages/Bag";
import Profile from "./pages/Profile";
import { useCurrentUserContext } from "./contexts/CurrentUserContext";

import "./App.css";

function App() {
  const { currentUser } = useCurrentUserContext();
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          {currentUser.id && <Route path="/home" element={<Home />} />}
          {currentUser.id && <Route path="/pokedex" element={<PokeDex />} />}
          {currentUser.id && <Route path="/catch" element={<Catch />} />}
          {currentUser.id && <Route path="/bag" element={<Bag />} />}
          {currentUser.id && <Route path="/profile" element={<Profile />} />}
          <Route path="*" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
