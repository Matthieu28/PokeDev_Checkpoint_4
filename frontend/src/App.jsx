import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokeDex from "./pages/PokeDex";
import Catch from "./pages/Catch";
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
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
