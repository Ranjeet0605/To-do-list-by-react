import React, { useState } from 'react'
import "./ImageShow.css"
import image  from "./cricketpick.jpeg"
const ImageShow=()=> {
  const[show,setShow] = useState(false);
    //  const showImage = ()=>{
    //     setShow(show)
    //  }
    
  return (
    <div>
    <button className='submit_btn' onClick={()=>setShow(!show)}>Submit</button>
    <div>
     {show &&  <img src={image} className='show_image' alt="save this pic"/>}
     </div>
    </div>
  )
}

export default ImageShow
