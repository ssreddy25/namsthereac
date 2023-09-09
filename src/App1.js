
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { useState } from "react";
const App =()=>{
      console.log("siva");
      console.log(useState());
      return(
         <div>
          <Header/>
          <Outlet/>
         
         </div>
      );
};

const AppProvider = createBrowserRouter([
      {
         path :"/",
         element :<App/>,
         children :[
            {
              path :"/",
              element : <Body/>
            },
            {
                  path : '/aboutus',
                  element :<AboutUs/>
               },
         
                  {
                     path : '/cart',
                     element :<Cart/>
                  },
                  {
                        path : '/restarents/:restid',
                        element :<RestaurantMenu/>
                     }

         ],
         
      }
      
   

]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppProvider}/>);