const Selector = ({ setselectedNum, score, error }) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" container mx-auto mt-5 sm:flex justify-between items-center">
      <div className=" items-center text-center">
        <h1 className=" text-5xl font-extrabold">{score}</h1>
        <p className=" text-xl font-medium">Total Score</p>
      </div>
      <div>
        <p className=" text-red-500 mb-2">{error}</p>
        <div className=" flex items-center gap-5 mt-10 sm:mt-0 justify-center">
          {arrayNumber.map((value, index) => (
            <button
              onClick={() => setselectedNum(value)}
              className=" focus:bg-black focus:text-white cursor-pointer hover:bg-black hover:text-white transition-all font-bold text-lg box w-[60px] h-[60px] border border-black text-center items-center justify-center"
              key={index}>
              {value}
            </button>
          ))}
        </div>
        <h1 className=" text-xl text-end mt-2 text-gray-500 mr-3 sm:mr-0">
          Select Any Number
        </h1>
      </div>
    </div>
  );
};

export default Selector;
