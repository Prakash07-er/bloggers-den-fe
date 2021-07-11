import  './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext,useState } from 'react'
import { Context } from '../../context/Context'
import axios from '../../apiConnect'
import { useHistory } from 'react-router-dom';


function Settings() {
    const history = useHistory("")
    const {user,dispatch} = useContext(Context)
    const [image, setImage] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [aboutMe, setAboutMe] = useState("")



    //upload profile picture secttion
    const handleUpload = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            let formData = new FormData()
            formData.append('file', file)

            const image_data = await axios.post('/upload' , formData, {
                headers:{
                    'content-type' : 'multipart/form-data'
                }
            })
            setImage(image_data.data.url)

        } catch (err) {
            alert(err.response.data.msg)
        }
    } 

    const handleSubmit = async(e) => {
        e.preventDefault()
        dispatch({type:"UPDATE_START"})

        const updatedUser ={
            userId: user._id,
            username,
            email,
            password,
            aboutMe,
            profilePic:image
        }
        
        try {
            const res = axios.put('/api/users/' + user._id, updatedUser)
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
                        <img src={image}
                        alt=''
                        className='' />
                        <label htmlFor='fileInput'>
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type='file' 
                        id='fileInput' 
                        style={{display:'none'}} 
                        onChange={handleUpload} />
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
