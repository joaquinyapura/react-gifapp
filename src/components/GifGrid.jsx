import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifCard from "./GifCard";

export const GifGrid = ({ category }) => {


  


  const {data,loading}=useFetchGifs( category );


  return (
    <>
    <h3> {category} </h3>
    <div className="cardGrid">
      

      {loading && <p className=" animate__animated animate__pulse">Loading...</p> }


        {data.map((e) => (
          <GifCard 
          key={e.id} 
          { ...e } 
          />
        ))}
      
    </div>
    </>
  );
};
