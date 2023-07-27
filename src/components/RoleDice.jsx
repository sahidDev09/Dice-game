import { useState } from "react";
import Rules from "./Rules";

// eslint-disable-next-line react/prop-types
const RoleDice = ({ roleDice, currentDice, setScore }) => {
  const [showRules, setShowRules] = useState(false);

  const handleReset = () => {
    setScore(0);
  };

  return (
    <div>
      <div
        onClick={roleDice}
        className="flex justify-center mt-20 cursor-pointer">
        <img className="" src={`/images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p className=" text-center text-2xl items-center text-gray-600 mb-5">
        Click on Dice to roll
      </p>
      <div className="btns">
        <button
          className="border rounded-md hover:bg-black hover:text-white transition-all border-black p-2 px-7 "
          onClick={handleReset}>
          Reset Score
        </button>
        <button
          onClick={() => setShowRules((prev) => !prev)}
          className=" p-2 px-7 bg-black rounded-md text-white hover:text-black  transition-all hover:bg-transparent hover:border border-black  ">
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>
      {showRules && <Rules />}
    </div>
  );
};

export default RoleDice;
