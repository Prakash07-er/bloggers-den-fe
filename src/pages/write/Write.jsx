import { useState } from 'react'
import  './write.css'
import axios from '../../apiConnect'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react'
import {Context} from '../../context/Context'

function Write() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)
    const history = useHistory("")

    const handleSubmit = async(e) => {
        e.preventDefault()

        const newPost ={
            username: user.username,
            title,
            desc,
        }
        if(file){
            const data =new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post('https://blog-den-backend.herokuapp.com/api/upload' ,data )
            } catch (err) {
                
            }
        }
        try {
            axios.post('https://blog-den-backend.herokuapp.com/api/posts' , newPost)
        history.push('https://blog-den-backend.herokuapp.com/api/')

        } catch (err) {
            
        }
    }

    return (
        <div className='write'>
            {
                file && (
                     <img className='writeImg'
                        src={URL.createObjectURL(file)}
                        alt=''  />
                )
            }
           
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i class="writeicon fas fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}} onChange={(e) => setFile(e.target.files[0])} />
                    <input type='text' placeholder='Title' className='writeInput' autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className='writeInput writeText' onChange={e => setDesc(e.target.value)} ></textarea>    
                </div>
                <button className='writeSubmit' type='submit'> Publish </button>
            </form>
        </div>
    )
}

export default Write
