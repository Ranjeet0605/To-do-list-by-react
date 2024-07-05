import React, { useState } from 'react';


 const  countries =[
    {name:'India',value:'IN',cities:[
        'Delhi',
        'Mumbai'
    ]},
    {name:'Pak',value:'PK',cities:[
        'Lahore',
        'Karachi'
    ]},
    {name:'BAN',value:'BN',cities:[
        'Dhaka',
        'Chittagong',
    ]},
 ]
const Assignment2 = ()=>{
    console.log(countries);
    const [country,setCountry]=useState(0);
    const onchangeHandler=(e)=>{
        console.log(countries[e].cities);
        setCountry(e);
        
    }
    return (
<div className='main_container' style={{margin:"auto"}}>
    <select onChange={(e)=>onchangeHandler(e.target.value)}>
    { countries.map((item,index)=>{
       return  <option value={index}>{item.name}</option>
})}
    </select>

  <select>

    {countries[country].cities.map((item,index)=>{
       return <option>{item}</option> 
    })}
  </select>
</div>
    )
}
export default Assignment2;