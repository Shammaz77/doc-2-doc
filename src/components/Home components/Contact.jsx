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
						<form>
							<div className="row">

								<div className="col-lg-6">
									<div className="form-group-contact ">
										<label for="exampleInputEmail1" className='mb-2'>Name</label>
										<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group-contact ">
										<label for="exampleInputEmail1" className='mb-2'>Email</label>
										<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group-contact ">
										<label for="exampleInputEmail1" className='mb-2'>Phone Number</label>
										<input type="number" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group-contact ">
										<label for="exampleInputEmail1" className='mb-2'>Neet Score</label>
										<input type="number" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Neet Score" />
									</div>
								</div>
								<div className="col-lg-6">
									<div className="form-group-contact ">
										<label for="exampleInputEmail1" className='mb-2'>Place</label>
										<input type="text" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Place" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="checkk">
										<div className="form-checkk">
											<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
												<label className="form-check-label right-space" for="flexCheckDefault">
											 	Are you planning to prepare for the NEET exam?
												</label>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="search-button-dv">
										<Link to='/' className='btn search-btn-contact secondarycolor'>Register Now</Link>
									</div>
								</div>
							</div>

						</form>






					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact