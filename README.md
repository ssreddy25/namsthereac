this is the namasthe react project

episode 3
-----------
#react componet they are two types of components 
1.class component
2.function component
pepole are using function component not a class component now days 
-->function component like java script function.

//restrent logic
--------------
/**const[restarentMenu ,setRestarentMenu] = useState([]);
    const[restarentItems ,setRestarentItems] =useState([])
    useEffect(()=>{
       fetchMenudata();
    },[]);
     const fetchMenudata = async ()=>{
               const menudata=await fetch(Menu_URL+restid);
               const json = await menudata.json();
               console.log(json);
              // const{name,avgRating} =json.data?.cards[0]?.card?.card?.info;
               setRestarentMenu(json.data?.cards[0]?.card?.card?.info);
              // console.log(name);
               //item cards 
              setRestarentItems(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
              //console.log(restarentItems);
     };
     */


     .header {
 display: flex;
 justify-content: space-between;
 border: 5px solid white;
 padding: 5px;
}
.logoimg {
 width: 60px;
}
.nav-item > ul {
    display: flex;
    justify-content: left;
    list-style-type: none;
    
}
.nav-item > ul > li {
    margin: 5px;
    padding: 5px;
    
}
.body{
    margin: 10px 35px ;
}
.cardcontainer{
    margin: 5px;
    width: 300px;
    

    
    
    
    background-color: burlywood;
  
}
.cardcontainer:hover{
    cursor: pointer;
    border: 5px solid;
}

.food{
    height: 100px;
    
    width: 200px
    
    
    
}
.restarent{
    
    display: flex;
    flex-wrap: wrap;
    
}
.link{
    text-decoration: none;
    text-decoration-color:black ;
}

.cardcontainers{
    display: flex;
    flex-wrap: wrap;
    
}
.shimmercard{
    width: 300px;
    height: 300px;
    margin :10px;
  
    background-color: lightgrey;
}
.searchdiv{
 padding: 10px;
}
.searchbutton{
    margin-right: 10px;
}
.copy{
    text-align: center;
}
.restrode{
    display: flex;
    
}
.rating{
    margin-left: 300px;
}
.restrentdetails{
    margin-left: 300px;

}

.items{
    display: flex;
    margin: 20px ;
    margin-left: 300px;
    margin-right: 200px;

    border: 5px solid whitesmoke;
   
}
.itemname{
    margin-right: 4px;
    font-size: 1.22rem;
    font-weight: 500;
    color: #3e5250;
    word-break: break-word;
}
.itlogo{
    
    width: 130px;
    margin-left: 600px;
    border-radius: 10px;
}

.user-card{
    padding: 10px;
    border: 10px solid wheat;
}
.title{
    text-align: center;
    color: blueviolet;
}





//logic

 <h2 className="title">{title}</h2>
            {
                
                itemCards.map((restarentItems)=>(
                
                <ItemsMenu key={restarentItems.card.info.id} items={restarentItems} title={title}/>
               )) 
               
            }