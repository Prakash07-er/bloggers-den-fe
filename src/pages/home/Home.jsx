import { useState ,useEffect} from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Aboutus from '../../components/aboutUs/Aboutus'
import './home.css'
import axios from '../../apiConnect'
import { useLocation } from 'react-router-dom'

function Home() {
    const [posts, setPosts] = useState([])
    const {search} = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
           const res =await axios.get("/api/posts" + search)
           setPosts(res.data)
        }
        fetchPosts()
    },[search])

    return (
        <>
            <Header />
            <Aboutus />
        <div className="home">
            <Posts posts={posts} />
            <Sidebar />
        </div>
        </>
    )
}

export default Home
