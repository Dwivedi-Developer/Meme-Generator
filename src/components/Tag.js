import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";



const Tag=()=>{
    const [tag , setTag]= useState("car");
    const{gif ,loading , fetchData} = useGif(tag);
    
    function changeHandler(event){
         setTag(event.target.value);
       }
        function clickHandler(){
            fetchData(tag);
        }

    return(
        <div className="w-[500px] flex flex-col justify-center items-center text-center bg-blue-400 mt-4 rounded-lg border border-black">
         <h1 className="text-2xl underline font-bold mb-4 uppercase ">RANDOM {tag} GIF</h1>
         {
            loading ? (<Spinner/>) :(<img src={gif}  width="400"  height="200" alt="" />)
         }
         <input type="text" className=" text-center w-9/12 mt-4" value={tag} onChange={changeHandler}/> 
         <button onClick={clickHandler} className=" box-border w-9/12 bg-green-200 text-center py-3 mb-4 mt-4">GENERTAE</button>
        </div>
    )
}

export default Tag;