import { useState } from 'react'
import  './write.css'
import axios from '../../apiConnect'
import { useHistory } from 'react-router-dom';
import { useContext } from 'react'
import {Context} from '../../context/Context'

function Write() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState("")
    const {user} = useContext(Context)
    const history = useHistory("")


    // upload image section
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

        const newPost ={
            username: user.username,
            title,
            desc,
            photo:image
        }   
      
        try {
            axios.post('/api/posts' , newPost)
        history.push('/')

        } catch (err) {
            
        }
        
    }

    return (
        <div className='write'>
          <img className='writeImg' src={image} alt=''  />
                
  
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writeFormGroup">    
                    <label htmlFor='file_up'>
                        <i class="writeicon fas fa-plus"></i>
                    </label>
                    <input type='file' name="file" id="file_up" style={{display:'none'}} onChange={handleUpload} />
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
