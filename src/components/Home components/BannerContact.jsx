import React from 'react'
import '../../css/banner.css'
import ai from '../../assets/ai.svg'
import { Link } from 'react-router-dom'
const BannerContact = () => {
	return (
		<div className='banner-contact'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="container-banner-box">
							<div className="conntact-ai">
								<img src={ai} className='icon-ai' alt="" />
								<h3 className='find-text'>Find out how we can help you achieve <br /> your goals within your budget!</h3>
							</div>
							<div className="button-sv-fc">
								<Link to='/' className='btn search-btn secondarycolor'>Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerContact