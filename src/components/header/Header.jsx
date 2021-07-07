import './header.css'
import {Link} from 'react-router-dom'

function Header() {

    return (
        <section id="hero" class="d-flex align-items-center">
        <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div class="row">
            <div class="col-lg-8">
              <h1>Welcome to <span>Bloggers_Den</span></h1>
              <h2>The way to Explore and Express</h2>
    
              <div class="btns">
                <Link to="/posts" class="btn-menu animated fadeInUp scrollto"> Stories</Link>
                <Link to="/write" class="btn-book animated fadeInUp scrollto"> Create </Link>
              </div>
            </div>
    
          </div>
        </div>
      </section>
    )
}

export default Header
