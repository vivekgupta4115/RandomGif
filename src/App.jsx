import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="w-full h-[1200px] flex flex-col bg-gradient-to-r from-teal-400
     to-yellow-200 relative items-center">

      <h1 className= " bg-slate-200 text-center text-2xl font-bold mt-[30px] w-11/12 rounded-xl py-1 px-10">RANDOM GIFS </h1>

         <div className=" flex flex-col w-full ">

          <Random/>
          <Tag/>

        </div>

    </div>
  );
};

export default App;
