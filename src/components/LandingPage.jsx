// eslint-disable-next-line react/prop-types
const LandingPage = ({ toggle }) => {
  return (
    <div className=" sm:grid grid-cols-2 items-center container mx-auto sm:mt-[10rem] gap-20 justify-center">
      <div className="img">
        <img className=" sm:scale-110" src="/images/dice/diceHero.png" alt="MainLogo" />
      </div>
      <div className="info text-center mt-3 sm:text-end">
        <h1 className=" uppercase text-5xl sm:text-5xl md:text-5xl lg:text-7xl font-extrabold">
          dice game
        </h1>
        <button
          onClick={toggle}
          className=" mt-5 bg-black rounded-md p-2 px-14 text-white font-medium text-xl hover:bg-transparent border border-black hover:text-black transition-all">
          Play Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
