import React, { useEffect, useState } from "react"
import "./Dashboard.css"
import {BollerArray, players} from "./Players";

const Dashboard = ()=>{
    const [inputfield, setInputfield] = useState();
    const [totalRuns, setTotalRuns] = useState( JSON.parse(localStorage.getItem("TotalRun")) || 0);
    const [totalWickets, setTotalWickets] = useState(JSON.parse(localStorage.getItem("TotalWickets")) || 0);
    const [balls, setBalls] = useState(JSON.parse(localStorage.getItem("Balls")) || 0);
    const [thisOverRun , setThisOverRun] = useState(JSON.parse(localStorage.getItem("thisOverRun")) || 0);
  let [thisOver, setThisOver] = useState(  JSON.parse(localStorage.getItem("thisOver")) || []);
    const[disabled,setDisabled] = useState(true);

    let [strikeIndex, setStrikeIndex] = useState(0);
    let [nonstrikeIndex,setNonStrikeIndex] =useState(1);

    console.log(parseInt(inputfield));
    const onchangeHandler = (e)=>{
         setInputfield(e.target.value);
     }
     JSON.parse(localStorage.getItem("thisOver"))
      
    useEffect(()=>{
        localStorage.setItem("TotalRun",JSON.stringify(totalRuns));
    },[totalRuns]);

    useEffect(()=>{
        localStorage.setItem("TotalWickets",JSON.stringify(totalWickets));
        
    },[totalWickets]);
    useEffect(()=>{
      localStorage.setItem("Balls",JSON.stringify(balls));
      localStorage.setItem("thisOverRun",JSON.stringify(thisOverRun));


      
  },[balls,thisOverRun]);
    
  useEffect(()=>{
    localStorage.setItem("thisOver",JSON.stringify(thisOver));
  },[thisOver]);


     const submitHandler = ()=>{
      console.log("hi")
        if(inputfield==="W" || inputfield==="w"){
                
            let count = totalWickets+1;
           
            setTotalWickets(count);
           let countballs = balls+1;
            setBalls(countballs);
          setThisOver([...thisOver ,inputfield]);
          console.log("this is count",count);

                let totalcount = count+1;
                console.log("this is totalcount",totalcount);
             setStrikeIndex(totalcount);

            if(countballs%6===0){
              let temp = strikeIndex;
                strikeIndex = nonstrikeIndex;
                nonstrikeIndex = temp;
                  setNonStrikeIndex(nonstrikeIndex);
                  setStrikeIndex(strikeIndex);
            }


         }
         else if(parseInt(inputfield)<7){
           setThisOver([...thisOver,inputfield]);
            let count = totalRuns+parseInt(inputfield);
            setTotalRuns(count);
            let countballs = balls+1;
            if((countballs)%6===0 && countballs!==0){
              setThisOver([]);
              setThisOverRun(0);
            }else{
              let countthisover = thisOverRun + parseInt(inputfield)
              setThisOverRun(countthisover);
            }

            
            setBalls(countballs);
            players[strikeIndex].Runs+=parseInt(inputfield);
            players[strikeIndex].ball+=1;
            parseInt(inputfield)===4?players[strikeIndex].fours+=1:parseInt(inputfield)===6? players[strikeIndex].sixes+=1:players[strikeIndex].sixes+=0;

            if((parseInt(inputfield)%2===1 &&  countballs%6!==0)|| (parseInt(inputfield)%2===0 && countballs%6===0)){
                let temp  = strikeIndex;
                strikeIndex = nonstrikeIndex;
                nonstrikeIndex = temp;
                setNonStrikeIndex(nonstrikeIndex);
                setStrikeIndex(strikeIndex);
            }
             
             
         }
       
        
         if(totalWickets===9){
          setDisabled(false);
         }

           
     }

  
    const restartHandler = ()=>{
         setTotalRuns(0);
         setTotalWickets(0);
          setInputfield("");
          setBalls(0);
          setDisabled(true);
          setThisOverRun(0);
          setThisOver([]);
    }
    
    console.log("strikeIndex",strikeIndex);
    return (
      <div className="container">
        
        <div className="main_container1">
            <p>Cricket DashBoard</p>
         <input type="text" placeholder="type here for scoring " value={inputfield}   onChange={onchangeHandler}/>
         <button onClick={submitHandler}  disabled={!disabled}>Submit</button>
          <button onClick={restartHandler} >Restart</button>
         </div>
           <div className="run_wicket">Run:{totalRuns}/{totalWickets}</div>
           <div className="total_over">Over: {parseInt(balls/6)}.{balls%6}</div>
           <div className="this_over_run">This Over:{thisOverRun}</div>
           <div className="this_over">
            {thisOver && thisOver?.map((item,index)=>{
              return <div style={{backgroundColor: parseInt(item)===4? "blue" : parseInt(item)===6?"green" : (item==="W"||item==="w")?"red":"gray" }}>{item}</div>
            })}
           </div>


           <div className="selet_bowler" style={{color:"white"}}>
            <select name="" id="">
              <option value="">select Bowller</option>
            {BollerArray?.map((bolwer,index)=>{
              return <option value={bolwer.name}>{bolwer.name}</option>
            })}
            </select>
           </div>

           <div className="all_palyers">
            <table >
              <tr>
               <th> Name</th>
               <th> Runs</th>
               <th>Balls</th>
               <th> fours</th>
               <th> Sixes</th>

                </tr>
             
            {players?.map((player,index)=>{
              return <tr> 
                <td>{player.name}{strikeIndex===index? "*":""}</td>
                <td>{player.Runs}</td>
                <td>{player.ball}</td>
                <td>{player.fours}</td>
                <td>{player.sixes}</td>
                
                </tr>
            })}
             </table>
            
           </div>
           
 

      </div>
    )
}
export default Dashboard;


