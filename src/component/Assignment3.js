import React, { useState } from "react";
const options =["cricket","football","hockey"];
const days =["weekday","weekend"];
const Assignment3 = ()=>{
    const [game,setGame] = useState("");
     
    const [playday,setPlayday]=useState("");
    const onChangeHandler1 =(e)=>{
        console.log(e);
        setGame(e);;
    }
       const onChangeHandler =(e)=>{
            console.log(e);
            setPlayday(e);;
        }
    return(
        <div>
         
           <h1>select the game</h1>
            <div>{options.map((items,index)=>{
            return (<div><input type="radio" value={items} name="options" id={index} onChange={(e)=>onChangeHandler1(e.target.value)}/> <span>{items}</span></div>)
            })}
</div>
   <h1>seclect the days</h1>
            <div>
             {days.map((items,index)=>{
            return (<div><input type="radio" value={items} name="game" id ={index} onChange={(e)=>onChangeHandler(e.target.value)}/> <span>{items}</span></div>)
            })}
            
            </div>
            
        <h1> You will play</h1>
        <p>{game} on the {playday}</p>
             
        </div>
    )
}
export default Assignment3;