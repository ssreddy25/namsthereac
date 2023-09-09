import { CDN_URL } from "../utils/constans";
const ItemsMenu =(props)=>{
    const {items , title} =props;
    //console.log(items)
    const {name,price,imageId} =items.card.info
    return(
         <div className="items">
               
            <div className="itemdetails">
                
                <h4 className="itemname">{name}</h4>
                <h4>Rs.{price/100}</h4>

            </div>
            <div className="itemimage">
                <img className="itlogo" src={CDN_URL+imageId} alt="itemimage"/>
            </div>

         </div>
    )

}
export default ItemsMenu;

