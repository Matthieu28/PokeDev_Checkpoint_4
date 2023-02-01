import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import PokeDex from "./pages/PokeDex";
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
          <Route path="*" element={<p>404 Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
