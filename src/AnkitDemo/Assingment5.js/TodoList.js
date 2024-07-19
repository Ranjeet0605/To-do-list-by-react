import React, { useEffect, useState } from 'react'
import "./TodoList.css"
// let TextValueArray = [""];

const  TodoList=()=> {
 
    const [textValue,setTextValue] = useState();
    console.log(textValue)
   
    const changeHandler = (e)=>{
      setTextValue(e.target.value);
        
    }
    const [searchValue, setSearchValue] = useState("");
    const searchHandler =(e)=>{
        setSearchValue(e.target.value);
      
    }
    
    let [showtext, setShowText]  = useState( JSON?.parse(localStorage?.getItem("ToDoList"))||[]);
     const [editflag,setEditflag] =useState(false);
     const [indexvalue,setIndexValue] = useState(0);
     const [editflag2,setEditflag2] =useState(false);
     
     const [indexvalue2,setIndexValue2] = useState(0);
     const [updateinputvalue, setUpdateInputValue] = useState(" ");
     const [updateinputvalue2, setUpdateInputValue2] = useState(" ");

    let [confirmItemArray, setConfirmItemArray] = useState(JSON?.parse(localStorage?.getItem("ConfirmItem")) || []);


    // for submitHandler function
     const submitHandler  = ()=>{
      
        setShowText([...showtext,textValue])
      
      setTextValue("")
    }
   
    // localstorage 
     useEffect(()=>{
     
      localStorage.setItem("ToDoList",JSON.stringify(showtext));
     },[showtext])

    // delete list
    const deleteHandler = ()=>{
          setShowText([]);
          setConfirmItemArray([]);
    }

    // delete item  one by one
    const insideDeleteHandler = (id)=>{
     
     let   newArrayText = showtext?.filter((item,index)=> id!==index);
       setShowText([...newArrayText]);
       localStorage.setItem("ToDoList",JSON.stringify(showtext));
     
    }

    const insideDeleteHandler2 = (id)=>{
     
      let   newArrayText = confirmItemArray?.filter((item,index)=> id!==index);
        setConfirmItemArray([...newArrayText]);
        localStorage.setItem("ConfirmItem",JSON.stringify(confirmItemArray));
     console.log("hii deleted")
      
     }
 


    // editHandler for update inputfield 
      const editHandler = (id)=>{
      
       let newtextValue = showtext[id];
      setUpdateInputValue(newtextValue);
       setEditflag(!editflag);
       
        setIndexValue(id);
    }
   
    const editHandler2 = (id)=>{
      
      let newtextValue = confirmItemArray[id];
     setUpdateInputValue2(newtextValue);
      setEditflag2(!editflag2);
      
       setIndexValue2(id);
   }
  
    // filtering the item

    const filterData = () =>{
      let  items = showtext?.filter((item)=> item?.includes(searchValue.toString()));
       
      return items; 
    }
 
    const filterConfirmData =()=>{
      let  items = confirmItemArray?.filter((item)=> item?.includes(searchValue.toString()));
       
      return items; 
    }
    // inputchangeHandler  for 
     const inputChangeHandler =(e)=>{
      setUpdateInputValue(e.target.value);
        
     }
     const inputChangeHandler2 =(e)=>{
      setUpdateInputValue2(e.target.value);
        
     }
     
     
      if (editflag===true){
        
          showtext[indexvalue]=updateinputvalue;
          localStorage.setItem("ToDoList",JSON.stringify(showtext));
       }
       if (editflag2===true){
        
        confirmItemArray[indexvalue2]=updateinputvalue2;
        localStorage.setItem("ConfirmItem",JSON.stringify(confirmItemArray));
     }


       // local storage for confirm items

       useEffect(()=>{
         localStorage.setItem("ConfirmItem",JSON.stringify(confirmItemArray));
       },[confirmItemArray])

       // for checkboxHandler 
    
       const checkBoxHandler = (id)=>{
            
            setConfirmItemArray([...confirmItemArray, showtext[id]]);
            showtext = showtext?.filter((item,index)=>id!==index);
            setShowText([...showtext]);

       }

       const checkBoxHandler2 = (id)=>{
            
        setShowText([...showtext, confirmItemArray[id]]);
        confirmItemArray = confirmItemArray?.filter((item,index)=>id!==index);
        setConfirmItemArray([...confirmItemArray]);

   }
       console.log(confirmItemArray);

  return (
    <>
    <div className='main_container'>
    
    <p>TODO LIST</p>
    
       <input className='input_box' type="text" placeholder='Search Box' value={searchValue} onChange={searchHandler}/>
       <button className='delete_btn' onClick={deleteHandler} >Delete</button>
        <input className='input_box' type="text" value={textValue} placeholder='Enter the anything.' onChange={changeHandler}/>
        <button className='submit_btn' onClick={submitHandler} >submit</button>
        
    
    <div className='div_box'>
 
    
   { filterData()?.map((items,index)=>{
    return <div >
     {indexvalue === index  && editflag ? <span><input type='text'  value={updateinputvalue}  onChange={inputChangeHandler}/></span> : <span>{items}</span> }
     
       <span><input type='checkbox' onChange={()=>checkBoxHandler(index)}/></span>
      <span><button  onClick={()=>editHandler(index)}>Edit</button></span>
       <span><button  onClick={()=>insideDeleteHandler(index)}>Delete</button></span>
       
       </div>
   })}

     
  
   </div>
     <p>Confirm Items show</p>
     <div className='div_box'>
 
    
 { filterConfirmData()?.map((items,index)=>{
  return <div >
   {indexvalue2 === index  && editflag2 ? <span><input type='text'  value={updateinputvalue2}  onChange={inputChangeHandler2}/></span> : <span>{items}</span> }
   
     <span><input type='checkbox' onChange={()=>checkBoxHandler2(index)}/></span>
    <span><button  onClick={()=>editHandler2(index)}>Edit</button></span>
     <span><button  onClick={()=>insideDeleteHandler2(index)}>Delete</button></span>
     
     </div>
 })}

   

 </div>
     


    </div>
    </>
  )
}

export default TodoList
