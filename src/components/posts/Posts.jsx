import  './posts.css'
import Post from '../post/post'

function Posts({posts}) {
    return (<>
        <div className="posts">
            {
                posts.map(p => (
                    <Post  post={p}  key={p} />
                ))
            }            
        </div>
   </> )
}

export default Posts
