import { useState } from "react"
import ItemList from "./ItemList"

const AllItemsMenu = ({data ,showItem, setshowIndex})=>{

    const[showItems,setShowItems] =useState(false)
    //const {data} =props;
    //console.log("siva")
    //console.log(data)
    

    //we develop accordion item showing items.
    const handleClick =()=>{
        //setShowItems(!showItems);
        setshowIndex()
        setShowItems(!showItems)
    }
    return (
        <div>
            
                
                    
                        <div className="flex justify-between m-4 mx-52 border-gray-200 border-b-4 cursor-pointer " onClick={handleClick}>
                       <span className="text-lg font-bold">{data.card?.card?.title} ({data.card?.card?.itemCards?.length})</span>
                       <span>⬇️</span>
                       
                       </div>
                      
                    
                       
                    
                        {
                           showItem && showItems && <ItemList items={data.card?.card?.itemCards}/>
                          }
                
            
        </div>
    )
}

export default AllItemsMenu;