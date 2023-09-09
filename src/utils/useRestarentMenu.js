import { useEffect, useState } from "react";
import { Menu_URL } from "../utils/constans";

const useRestarentMenu = (restid)=>{

    const[resInfo,setResInfo] =useState(null);

    useEffect(()=>{
        console.log("i am cllaing fetch data");
       fetchData();
    },[]);

    const fetchData = async ()=>{
        console.log("i called");
        const data = await fetch( Menu_URL+restid );
        const json = await data.json();
        
        setResInfo(json.data);

    };


    return resInfo;
};

export default useRestarentMenu;