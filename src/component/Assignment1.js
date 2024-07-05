import React, { useState } from "react";
import "./Assignment1.css"
let array = ["Play cricket","play game", "read book please"]
const Assignment1 = ()=>{
    const[copyarray,setcopyArray] = useState(array);
    const[check,setCheck] = useState(false);
    const[currentIndex, setCurrentIndex] = useState(0);
    const deleteHandler=(id)=>{
        console.log("hi")
        let newarray=[];
    newarray = copyarray.filter((item,index)=>id!==index )
        setcopyArray(newarray)
         
    }
    // let count = 0;
    const checkBoxHandler =(value,id)=>{
          setCurrentIndex(id);
          
          setCheck(value);
    //     let newarray=[];
    //     newarray =copyarray.filter((item,index)=>id!==index)
    //    setcopyArray(newarray)

    }
    return(
<div className="main_container">
    <ul className="onordered_list">
  {copyarray?.map((item,index)=>{
  return  <li className={index}><span><input type="checkbox" value={check} onChange={(e)=>checkBoxHandler(e.target.value,index) }/></span>{item}
       { (check && currentIndex===index )&& <button onClick={()=>deleteHandler(index)}>delete</button>}</li>
  })}
  </ul>
</div>
    )
}
export default Assignment1;