import { useState } from 'react';
import {LOGO_URL} from '..//utils/constans'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=>{
    const [btnchange ,setBtnchange] = useState("login");
    const onlineStatus = useOnlineStatus();
    return(
         <div className="header flex justify-between items-center bg-pink-200 sm:bg-blue-100 lg:bg-blue-200">
            <div className="logo flex ">
                <img  className='logoimg w-20  rounded-lg' src={LOGO_URL} alt="compny-logo"/>
                <div>
                <h1 className='ml-20 font-extrabold   py-5' >welcome to ssfood</h1>
                </div>
            </div>
            <div className="nav-item ">
                <ul className='flex m-4  '>
                    <li className='p-4'>OnlineStatus :{onlineStatus ?"🟢" : "🔴"}</li>
                    <li className='p-4'><Link to='/'>Home</Link></li>
                    <li className='p-4'><Link to='aboutus'>About us</Link></li>
                    <li className='p-4'><Link to ='cart'>Cart</Link></li>
                    <button className='p-4' onClick={()=>{
                      btnchange==="login" ? setBtnchange("logout") :setBtnchange("login")
                    }}
                    >{btnchange}</button>
                </ul>

            </div>

         </div>
    );
};

export default Header;