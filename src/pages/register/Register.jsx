import  './register.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Register() {
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [aboutMe, setAboutMe] = useState("")
    const [error, setError]= useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError(false)

        try {
            const res =await axios.post('https://blog-den-backend.herokuapp.com/api/auth/register', {
            username,
            email,
            password,
            aboutMe
        })
        res.data && window.location.replace('https://blog-den-backend.herokuapp.com/api/posts')
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className='register'>
            <form action="" className="registerForm" onSubmit={handleSubmit}>
                <span className="registerTitle">Register</span>
                <label className=''> Username </label>    
                <input type='text' 
                className='registerInput' 
                placeholder="enter your Username" 
                onChange={e => setUsername(e.target.value)} / >
                <label className=''> Email </label>    
                <input type='email' 
                className='registerInput' 
                placeholder="enter your email"
                onChange={e => setEmail(e.target.value)} / >
                <label className=''> Password </label>    
                <input type='password' 
                className='registerInput' 
                placeholder="enter your password" 
                onChange={e => setPassword(e.target.value)} / >
                <label className=''> About Me </label>    
                <input type='text' 
                className='registerInput' 
                placeholder="about you" 
                onChange={e => setAboutMe(e.target.value)} / >
                <button className='registerButton' type='submit' > Register </button>
            </form>            
            <button className='register_Login'> 
                < Link to ='/login' className='link'> Login </Link>
            </button>
            {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong !</span>}
        </div>
    )
}

export default Register
