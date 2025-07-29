import React from 'react'
import '../../css/contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
	return (
		<div className='contact-container'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-sectiobn-innner">
							<div className="contact-titlr-section">Contact Us</div>
							<h1 className='contact-us-main-title'>Still deciding between universities? <br /> <span className='span-contact-us-main-title'>let us help you compare</span> </h1>
							<p className='sub-contact-us'>MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.</p>
						</div>
					</div>
					<div className="contact-sectiobn-innner mt-4">
						<div className="row">
							<div className="col-lg-6">
								<label htmlFor="country-select" className='mb-2 label-bold'>Your NEET Score?</label>
								<select className="form-select form-select-lg" id="country-select" aria-label="Default select example">
									<option value="">567</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col-lg-6">
								<label htmlFor="budget-select" className='mb-2 label-bold'>What is your budget (Course Fee/year)?</label>
								<select className="form-select form-select-lg" id="budget-select" aria-label="Default select example">
									<option value="">3 LACK</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col-lg-12">
								<div className="search-button-dv">
									<Link to='/' className='btn search-btn-contact secondarycolor'>Search</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact