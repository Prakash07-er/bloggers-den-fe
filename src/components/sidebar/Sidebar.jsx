import { useContext } from 'react'
import './sidebar.css'
import { Context } from '../../context/Context'


function Sidebar() {
    const PF = 'http://localhost:5000/images/'
    const {user} = useContext(Context)


   
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className='sidebarTitle' > ABOUT ME</span>
                <img src={user ? PF + user.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
                <p>  {user ?  user.aboutMe : "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} </p> 

                <div className="sidebarItem">
                    <span className='sidebarTitle' > FOLLOW US</span>
                    <div className='sidebarSocial'>
                        <i class="sidebarIcon  fab fa-facebook-square"></i>
                        <i class="sidebarIcon  fab fa-twitter-square"></i>
                        <i class="sidebarIcon  fab fa-pinterest-square"></i>
                        <i class="sidebarIcon  fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
