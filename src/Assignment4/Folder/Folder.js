  import React, { useState } from "react";
  const InsideFolder = ({explore})=>{
    console.log(explore)
    //  console.log(explore.name);
     const [expand,setExpand]=useState(false);
    //  const submitHandler=(e)=>{
    //       setShowFolder(!e);
    //  }
    if(explore.isFolder===true){
    return (
      
      
<div>
      
      <div className="showfolder" onClick={()=>setExpand(!expand)}>
     
     <span>📁{explore.name}</span>
     </div>
        <div style={{display: expand ?"block":"none", paddingLeft:10}}>
          {explore.items?.map((item,index)=>{
      return   <InsideFolder explore={item}/>
          })}
       
  </div>
      
   
      </div>
    )}
    else{
     return <span>🗄️{explore.name}</span>
   }
   
  }
  export default InsideFolder;