import React from "react";

class UserClass extends React.Component{
  
    constructor(props){
        super(props)

        this.state ={
             count :0,
             count2:2
        };

    }
    

    render(){
        const {name,location} =this.props;
        const {count,count2} =this.state;
     return(
        <div className="user-card">
        <h4>this is a class component</h4>
        <h1>count:{count}</h1>
        <h1>count2:{count2}</h1>
        <button type="button" onClick={()=>{
           this.setState({
             count :this.state.count + 1 ,
           });
        }}>+</button>
         <button type="button" onClick={()=>{
            this.setState({
                count2 :this.state.count2 - 1 ,
              });
        }}>-</button>
        <h2>name :{name}</h2>
        <h3>location :{location}</h3>
        <h3>profession:software developer</h3>
    </div>
     );


    }

}

export default UserClass;