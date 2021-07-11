import  './login.css'
import {Link} from 'react-router-dom'
import { useContext, useRef } from 'react'
import { Context } from '../../context/Context'
import axios from '../../apiConnect'

function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch, isFetching} = useContext(Context)

    const handleSubmit =async (e) => {
        e.preventDefault()
        dispatch({
            type:"LOGIN_START"
        })
        try {
            const res = await axios.post('/api/auth/login', {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({
                type:"LOGIN_SUCCESS",
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type:"LOGIN_FALIUR",
            })
        }
    }

    return (
        <div className='login'>
            <form action="" className="loginForm" onSubmit={handleSubmit}>
                <span className="loginTitle">Login</span>
                <label className=''> Username </label>    
                <input type='text' className='loginInput' placeholder="enter your username" ref={userRef} / >
                <label className=''> Password </label>    
                <input type='password'className='loginInput' placeholder="enter your password"  ref={passwordRef} / >
                <button className='loginButton' type='submit' disabled={isFetching} > Login </button>
            </form>            
            <button className='loginRegister'> 
                <Link to='/register' className='link'> Register </Link>
            </button>
        </div>
    )
}

export default Login
