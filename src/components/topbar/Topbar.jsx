import './topbar.css'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { Context } from '../../context/Context';


function Topbar() {
    const { user , dispatch} = useContext(Context)
    const PF = 'http://localhost:5000/images/'

    const handleLogout =() => {
        dispatch({
            type: "LOGOUT"
        })
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">  
                        <a href='/' className='link'> HOME </a>
                    </li>
                    <li className="topListItem">  
                        <a href='/#about' className='link'> ABOUT </a>
                    </li>
                    <li className="topListItem">  
                         <a href='/#footer' className='link'> CONTACT </a>
                    </li>
                    <li className="topListItem">  
                        <Link to='/write' className='link'> WRITE </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout} > 
                       {user && "LOGOUT" }
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {
                    user ? 
                    <Link to='/settings'>
                        <img className="topImg" src={PF + user.profilePic} alt="" /> 
                    </Link>
                    :
                    <Link to='/register'>
                        <img className="topImg" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt="" /> 
                    </Link>
                }
                
                </div>
        </div>
    )
}

export default Topbar
