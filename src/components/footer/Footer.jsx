import React from 'react'
import './footer.css'


export default function Footer() {
    return (
<section id="footer" >
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>About US</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Home</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>About</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5> The Den to Express </h5>
					<ul className="list-unstyled quick-links">
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Create</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Explore</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Posts</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Videos</a></li>
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Want to explore</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Sports</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Trekking</a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i>Culture </a></li>
						<li><a href="/"><i className="fa fa-angle-double-right"></i> Travelling</a></li>
						<li><a href="/" title="Design and developed by"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
					</ul>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="/"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="/"><i className="fa fa-twitter"></i></a></li>
						<li className="list-inline-item"><a href="/"><i className="fa fa-instagram"></i></a></li>
						<li className="list-inline-item"><a href="/"><i className="fa fa-google-plus"></i></a></li>
						<li className="list-inline-item"><a href="/" target="_blank"><i className="fa fa-envelope"></i></a></li>
					</ul>
				</div>
				<hr />
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p><u><a href="https://www.nationaltransaction.com/">Bloggers Den Network</a></u> is a Registered  Inc. India [a wholly owned subsidiary of IN. Delhi, Chennai, PY]</p>
					<p className="h6">© Made with love by <a className="text-green ml-2" href="/" >Den's Team</a></p>
				</div>
				<hr />
			</div>	
		</div>
	</section>
    )
}
