import { useState } from "react";
import LandingPage from "./components/LandingPage";
import GamePlay from "./components/GamePlay";

function App() {
  const [gameStarted, setgameStarted] = useState(false);

  const togglePlayNow = () => {
    setgameStarted((prev) => !prev);
  };

  return (
    <>{gameStarted ? <GamePlay /> : <LandingPage toggle={togglePlayNow} />}</>
  );
}

export default App;
