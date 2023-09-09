import {CDN_URL} from '../utils/constans'

const CardCon =(props) =>{
    const {rest} = props;
    const {name,costForTwo,cuisines ,avgRating

    } =rest.info ;
    //console.log(rest.info.name)
    return(
         <div className="cardcontainer w-[280px]  border-solid bg-gray-100 m-3 p-3 hover:bg-gray-300 rounded-2xl break-words">
    
              <img className='food  h-[170px] w-[200px] rounded-2xl ' src={CDN_URL+rest.info.cloudinaryImageId} alt="foodimage"/>
              <h2 className='text-left font-bold  '>{name}</h2>
              <h2>rating:{avgRating}</h2>
              <h3>{costForTwo}</h3>
              <h3>{cuisines.join(",")}</h3>
              </div>
              
         
    );
};

 export const withpromotedlabel = (CardCon)=>{
    return (props)=>{
        return(
            <div>
               <label className='absolute bg-black m-2 p-2 text-white rounded-lg rounded-l-3xl '>promoted</label>
               <CardCon {...props}/>
            </div>
        )
    }
}

export default CardCon;