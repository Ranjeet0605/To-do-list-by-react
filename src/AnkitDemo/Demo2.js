import React, { useState } from 'react'
import "./demo2.css"
const  Demo2=()=> {
    const [showtext,setShowText]=useState();
    const showText =(e)=>{
        console.log(e.target.value)
       setShowText(e.target.value);
    }
  return (
    <div>
       <input type="text" className="input_field" placeholder='type this here something' onChange={showText}/>

       <div className="banner_text" style={{display: showtext===""?"none": "block" }}>{(showtext && showtext<18) ? "You are not eligible": "You are eligible for voting "}</div>
    </div>
  )
}

export default Demo2
