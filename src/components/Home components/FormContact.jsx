import React from 'react'
import '../../css/formcontact.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const FormContact = () => {
	return (
		<div className='form-section-contact'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="button-container-students">
							<div className="contact-titlr-section cnct-btn">Contact Us</div>
							<h1 className='title-connect'>Still deciding between universities? <br /> Abroad MBBS fees can vary— <span className='grey-form'>let us help you compare.</span> </h1>
							<p className='sub-form'>
								MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.
							</p>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="form-contact">
							<form>
								<div class="form-group ">
									<label for="exampleInputEmail1">Name</label>
									<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
								</div>
								<div class="form-group ">
									<label for="exampleInputEmail1">Email Address</label>
									<input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
								</div>
								<div class="form-group ">
									<label for="exampleInputEmail1">Phone Number</label>
									<input type="number" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number" />
								</div>
								<div class="form-group ">
									<label for="exampleInputEmail1">Your NEET Score?</label>
									<input type="number" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
								</div>
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
										<label class="form-check-label" for="flexCheckDefault">
											Are you planning to prepare for the NEET exam?
										</label>
								</div>
								<Button className='contactus-btn-form btn' type=''>Contact Us</Button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormContact