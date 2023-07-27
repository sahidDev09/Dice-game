const Rules = () => {
  return (
    <div className=" bg-slate-100 w-[full] sm:w-[700px] my-3 sm:my-5 rounded-md sm:m-auto mx-5">
      <div className="info p-3 text-start text-gray-500 px-10">
        <h1 className=" text-2xl text-gray-700 font-bold mb-5">
          How to play dice game
        </h1>
        <p>Select any number</p>
        <p className=" mb-2">click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get some point as dice if you get wrong guess then 2 points will
          be dedcuted
        </p>
      </div>
    </div>
  );
};

export default Rules;
