import React from "react";
import DummyData from "./DummyData"
import InsideFolder from "./Folder/Folder"
    
const Folder = ()=>{
    console.log(DummyData);
    return (
    <div className="showfolder">
        <InsideFolder explore={DummyData}/>
    </div>
    )
}
export default Folder;