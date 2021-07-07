import  './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext,useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


function Settings() {
    const history = useHistory("")
    const {user,dispatch} = useContext(Context)
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [aboutMe, setAboutMe] = useState("")
    const PF = 'http://localhost:5000/images/'

    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch({type:"UPDATE_START"})



        const updatedUser ={
            userId: user._id,
            username,
            email,
            password,
            aboutMe
        }
        if(file){
            const data =new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axios.post('https://blog-den-backend.herokuapp.com/api/upload' ,data )
            } catch (err) {
                
            }
        }
        try {
            const res = axios.put('https://blog-den-backend.herokuapp.com/api/users/' + user._id, updatedUser)
            setSuccess(true)
          dispatch({type:"UPDATE_SUCCESS", payload: res.data})
          history.push('/')
        } catch (err) {
            dispatch({type:"UPDATE_FALIUR"})
        }
    }


    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">
                        Update Your Account
                    </span>
   
                </div>
                <form  className="settingsForm" onSubmit={handleSubmit}>
                    <label> Profile Picture </label>
                    <div className="settingPP">
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                        alt=''
                        className='' />
                        <label htmlFor='fileInput'>
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' 
                        id='fileInput' 
                        style={{display:'none'}} 
                        onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                        <label> Username </label>
                        <input type='text' placeholder={user.username}
                        onChange={(e) => setUsername(e.target.value)} />
                        <label> Email </label>
                        <input type='email' placeholder={user.email}
                        onChange={(e) => setEmail(e.target.value)} />
                        <label> Password </label>
                        <input type='password' onChange={(e) => setPassword(e.target.value)}  />
                        <label> About Me </label>
                        <input type='text' placeholder={user.aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)} />
                    <button className='settingsSubmit' type='submit' > Update </button>
                    {success && <span style={{color:"green", textAlign:'center'}}> Profile has been updated...!</span>}
                </form>
            </div>
            <Sidebar />                
        </div>
    )
}

export default Settings
