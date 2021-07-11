import './header.css'
import {Link} from 'react-router-dom'

function Header() {

    return (
        <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Bloggers_Den</span></h1>
              <h2>The way to Explore and Express</h2>
    
              <div className="btns">
                <Link to="/register" className="btn-menu animated fadeInUp scrollto"> Register</Link>
                <Link to="/write" className="btn-book animated fadeInUp scrollto"> Create Blog </Link>
              </div>
            </div>
    
          </div>
        </div>
      </section>
    )
}

export default Header
