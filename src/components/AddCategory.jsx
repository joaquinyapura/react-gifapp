import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {


    const [imputValue,SetImputValue]=useState('');

    const handleImputChange = (e)=>{
        SetImputValue(e.target.value); 
    }

    const handleSubmit=(e)=>{
      e.preventDefault();
      if (imputValue.trim().length>2) {
        setCategories(c=>[imputValue,...c]);
        SetImputValue(' ');
      }
    }


  return (
    <>
  
<form action="" onSubmit={ handleSubmit }>
    <input 
    type="text" 
    value={imputValue}
    onChange={handleImputChange} 
    />

    </form>
    </>

    
  )
}


AddCategory.propTypes={
  setCategories:PropTypes.func.isRequired
}