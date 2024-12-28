import React from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";


const Random=()=>{
       const {gif , loading , fetchData} = useGif();       
        function clickHandler(){
            fetchData();
            
        }
        
        
    return(
        <div className=" flex flex-col justify-center items-center w-[500px]  text-center bg-green-400 mt-4 rounded-lg border border-black">
            
            <h1 className="text-2xl underline font-bold"> A RANDOM GIF </h1>
            {
                loading ? (<Spinner/>) : (<img src={gif}  width="400"  height="200" alt=""  className="mt-4"/>)
            }
            <button onClick = {clickHandler} className=" box-border w-9/12 bg-green-200 text-center py-3 mb-4 mt-4" >GENERTAE</button>
        </div>
    )
}

export default Random;