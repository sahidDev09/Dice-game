import { useState } from "react";
import RoleDice from "./RoleDice";
import Selector from "./Selector";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setselectedNum] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");

  const genRanNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNum) {
      seterror("Ouch! You have not selected any number");
      return;
    }
    seterror("");

    const MyRandom = genRanNum(1, 7);
    setcurrentDice((prev) => MyRandom);

    if (selectedNum === MyRandom) {
      setScore((prev) => prev + MyRandom);
    } else {
      setScore((prev) => prev - 2);
    }

    setselectedNum(undefined);
  };

  return (
    <div>
      <Selector
        error={error}
        score={score}
        selectedNum={selectedNum}
        setselectedNum={setselectedNum}
      />
      <RoleDice
        setScore={setScore}
        currentDice={currentDice}
        roleDice={roleDice}
      />
    </div>
  );
};

export default GamePlay;
