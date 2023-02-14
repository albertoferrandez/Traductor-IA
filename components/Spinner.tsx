const Spinner = () => {
  return (
    <div className="flex items-center justify-center bg-slate-300 h-40 w-full p-7 rounded-md mt-3">
      

<div className="w-full flex justify-center items-center">
  <div className="flex w-full items-center justify-center">
    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
      <div className="h-9 w-9 rounded-full bg-slate-300"></div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Spinner;
