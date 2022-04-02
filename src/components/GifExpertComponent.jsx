import React, {useState} from 'react'

import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';




function GifExpertComponent() {


    const[categories,setCategories]=useState(['One Punch'])

    /* const handleAdd=()=>{
        setCategories([...categories,'four']);
    } */




  return (
      <> 
      
        <AddCategory setCategories={setCategories} />
        
            {
                categories.map(category=>(
                    <GifGrid
                    category={category}
                    key={category} />
               ))
            }
       


      </>

    )
}

export default GifExpertComponent