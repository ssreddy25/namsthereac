import { useState } from "react";

const User = (props)=>{
  
    const {name , location} =props;
    const[count,setCount] =useState(0);
    const[count1,setCount1] =useState(2);
    
    
  return (  <div className="user-card">
        
        <h4>this is a functional component</h4>
        <h1>count:{count}</h1>
        <h1>count1:{count1}</h1>
        <button type="button" onClick={()=>{
            
            setCount( count + 1);
        }}>
            +
        </button>
        <h2>name :{name}</h2>
        <h3>location :{location}</h3>
        <h3>profession:software developer</h3>
    </div>
  );
}

export default User;
