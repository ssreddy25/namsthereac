import { useState,useEffect } from "react";
import ItemsMenu from "./ItemsMenu";
import { useParams } from "react-router-dom";
import useRestarentMenu from "../utils/useRestarentMenu";
import ShimmerUi from "./ShimmerUi";

import AllItemsMenu from "./AllItemsMenu";

const  RestaurantMenu =() =>{
   const {restid} =useParams()
   
    const resInfo = useRestarentMenu(restid);

    const[showIndex,setshowIndex] =useState(0);
  

   
    if(resInfo === null) return  <ShimmerUi/> ;

     const {name ,cuisines ,areaName, fees ,avgRatingString,totalRatingsString} =resInfo?.cards[0]?.card?.card?.info;
     console.log(resInfo);
     //const {itemCards ,title ,type} =resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      //this filter command filete data only itemcarads is there
     const category = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
                c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     ));
      
     console.log(category);

     
     
  return  (
    <div className="restarentmenuitems">
     <div className="flex justify-between m-4 mx-52 border-gray-200 border-b-4 ">
      <div className="restarentdetails ">
      <h2 className="font-bold text-2xl">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{areaName}</h3>

      </div>
      <div className="rating m-4 p-2 border border-green-500">
        <h4 className="text-black-600">⭐:{avgRatingString}</h4>
        <h4 className="text-blue-700">{totalRatingsString}</h4>
        </div>
       
        </div>
        {
          category.map((category ,index) => <AllItemsMenu  data={category} 
          showItem = {index===showIndex ?true :false}
          setshowIndex={()=>setshowIndex(index)}

          />)
         
        }
         

    </div>
  )
}

export default RestaurantMenu
