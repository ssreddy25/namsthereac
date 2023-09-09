

const ItemList = ({items})=>{

    return(
        <div>
            <div>
              {
                items.map((data)=>(
                     <div key={data.card.info.id} className="flex justify-between mx-52 border-y-2 p-3 cursor-pointer ">
                        <div>

                        <span className="text-left font-bold text-black">{data.card.info.name}</span><br></br>
                        <span>-₹{data.card.info.price/100}</span>
                        <p className="text-gray-400">{data.card.info.description}</p>
                        </div>
                        <div>
                        <button className="mr-8 p-1 bg-black text-white rounded-lg absolute ">Add +</button>
                            <img className="w-[150px] rounded-2xl " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ data.card.info.imageId}/>
                           
                            </div>
                        </div>
                ))
              }
            </div>
        </div>
    )
}

export default ItemList;