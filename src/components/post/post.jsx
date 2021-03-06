import './post.css'
import {Link} from 'react-router-dom'

function Post({post}) {
    return (
        <div className="post">
            <img className='postImg' 
            src= {post.photo} alt='' />
            <div className='postInfo'>
                <div className='postCats'>
                    {
                        post.categories.map((c) => (
                            <span className='postCat'> {c.name} </span>
                        ))
                    }
                </div>
                <Link to={`/post/${post._id}`} className="link" >
                    <span className='postTitle'>
                        <p> {post.title}  </p>
                    </span>
                </Link>
                
                <hr />
                <span className='postDate'>
                {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className='postDesc'>
            {post.desc}
            </p>
        </div>
    )
}

export default Post
