import CardCon ,{withpromotedlabel}from './CardCon'

import { useEffect, useState } from 'react';

import ShimmerUi from './ShimmerUi';
import { Link } from 'react-router-dom';

const Body = () =>{
    const[restaurant ,setRestaurant] =useState([]);
    const[filterrestaranent,setfilterrestaranent] =useState([]);
    const[searchtext ,setSearchtext] = useState("");
    console.log("header callded");

    const ResrentCardsPromoted=withpromotedlabel(CardCon);

    

    useEffect(()=>{
        fetchdata();
    },[]);


   

    const fetchdata= async ()=>{
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4176244&lng=78.4626462&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          const json = await data.json();
          console.log(json.data);
          //console.log(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setfilterrestaranent(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

  //  if(restaurant.length == 0){
   //     return <ShimmerUi/>
   //  }
   //restaurant.length == 0 ? <ShimmerUi/> :
    return restaurant.length == 0 ? <ShimmerUi/> : (
        <div className="body">
            <div className="searchdiv mt-5 border-spacing-1 mb-4 ">
                
                    <input className="search bg-purple-300 border-solid ml-4"  type="search" value={searchtext}
                    onChange={(e)=>{ 
                        setSearchtext(e.target.value);

                        
                    }}
                
                
                    /> 
                    <button  className='searchbutton ml-3 bg-blue-400 px-3 rounded-md' onClick={()=>{
                        console.log(searchtext);
                       
                       const filterlist1 = restaurant.filter((res)=> res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                    
                           console.log(filterlist1);
                           setfilterrestaranent(filterlist1);
                        


                    }} >search</button>
                    <button className='rating-btn ml-3  bg-blue-400 px-3 rounded-md'  
                    onClick={()=>{
                        const filterlist = restaurant.filter(
                            (res)=> res.info.avgRating >4
                        )
                        console.log("data updaated");
                        setRestaurant(filterlist)
                    }}>  top of restarent</button>
                
            </div>
            <div className="restarent flex flex-wrap  ml-6 mr-auto " >
                {
                    filterrestaranent.map((restranent)=>(
                       <Link className='link' key={restranent.info.id} to={"/restarents/" +restranent.info.id}>
                       {
                        restranent.info.isOpen ?(<ResrentCardsPromoted  rest={restranent}/>):(<CardCon  rest={restranent}/>)
                       }

                        
                        </Link>
                    ))
                }
              
              
               
               
            </div>

        </div>
    );

};

export default Body;