import React from "react";
import ReactDOM from "react-dom/client";

           //react element
      // const heading=React.createElement("div",{id:"parent"},"i am siva sankar reddy")

      //jsx
           const heading =(
               <div>
           <h1 className="siva">siva sankar reddy</h1>
           <h2 className="sian">siva sankar reddy</h2>
           </div>
           );

           const Title =()=>{
              return <h1>this is title component</h1>
           };
           const HeadingComponent1 = ()=>{
            
           return <div>
               
               <h1>this a function componet heding</h1>
               <h2>this like java script function</h2>
            </div>
          };
           const element = (
            <div>
               {<Title></Title>}
               {<HeadingComponent1/>}
               {heading}
              <h1>Hello!</h1>
              <h2>Good to see you here.</h2>
            </div>
          );
  
          //react component
            const name ='siva sankar reddy';
         
         const HeaderComponent = ()=>{
            
               return (<div>
                  <h1>this image</h1>
                 <div>
                  frist name:<input type="search" className="in"placeholder="enter your name"/>
                  </div>
               </div>
               )
            
         };
            
          
           

          const root=ReactDOM.createRoot(document.getElementById("root"));
          root.render(<HeaderComponent/>);