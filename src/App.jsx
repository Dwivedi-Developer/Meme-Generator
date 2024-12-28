import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";



export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative items-center overflow-x-hidden ">
    <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]  text-4xl">RANDOM GIFS</h1>
    <div className="flex flex-col">
      <Random/>
      <Tag/>

    </div>
    </div>
  );
}
