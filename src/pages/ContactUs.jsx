import React from 'react'
import '../css/contactpage.css'
import mail from '../assets/mail.svg'
import branch from '../assets/branch.png'
import phone from '../assets/phone.svg'
import { Link } from 'react-router-dom'
const ContactUs = () => {
	return (
		<div className='contact-us-page'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="brudcums">
							<p className='brudcums-text'> <span className='redirection-page'>Home   </span> <span className='current-page'><i class="ri-arrow-right-s-line"></i> Contact Us</span>   </p>
						</div>
					</div>
					<div className="spaceeee"></div>
					<div className="col-lg-6">
						<div className="contact-page-box">
							<h1 className='title-contacttt'>Clarify your concerns <span className='blck-c'> with expert solutions</span></h1>
							<p className='sub-contact-desc'>Have questions or feel unsure about something? Don’t worry—we’re here to help. Share your doubts and get clear, reliable solutions from our expert team.</p>
							<div className="contact-adress-box">
								<div className="img-icon-contact">
									<img src={mail} className='icon-cc' alt="" />
								</div>
								<div className="details-cc">
									<p className='link-textt'>Email</p>
									<h5 className='link-texttc'>info@doc2doc.org</h5>
								</div>
							</div>
							<div className="contact-adress-box">
								<div className="img-icon-contact">
									<img src={phone} className='icon-cc' alt="" />
								</div>
								<div className="details-cc">
									<p className='link-textt'>Email</p>
									<h5 className='link-texttc'>info@doc2doc.org</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-bg">
							<form action="">
								<div className="form-group-contact-page">
									<label for="exampleInputEmail1" className='mb-2'>Name</label>
									<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
								</div>
								<div className="form-group-contact-page">
									<label for="exampleInputEmail1" className='mb-2'>Email</label>
									<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
								</div>
								<div className="form-group-contact-page">
									<label for="exampleInputEmail1" className='mb-2'>Phone Number</label>
									<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
								</div>
								<div className="form-group-contact-page">
									<label for="exampleInputEmail1" className='mb-2'>Neet Score</label>
									<input type="name" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
								</div>
								<div className="form-group-contact-page">
									<input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
									<label className="form-check-label right-space" for="flexCheckDefault">
										Are you planning to prepare for the NEET exam?
									</label>
								</div>
								<div className="cobtact-us-page-btn">
									<Link to='/' className='btn contact-us-page-btn secondarycolor'>Contact Us</Link>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
			<div className="branches-section">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-12">
							<div className="branch-dv">
								<h1 className='title-contacttt'>Our  <span className='blck-c'>Branches</span></h1>
								<p className='sub-contact-desc'>To empower aspiring medical students with transparent, ethical, and expert guidance for pursuing MBBS education abroad, ensuring a smooth journey from admission to graduation. We are committed to supporting students and their families with accurate information, reliable assistance, and lifelong mentorship.</p>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="brach-main">
								<div className="img-branch">
									<img src={branch} className='branch-img' alt="" />
								</div>
								<div className="content-branch">
									<h3 className='b-location'>Kochi</h3>
									<h5 className='b-location-s'>123 Mango Lane, Kochi, Kerala, India</h5>
									<p className='b-n'><i class="ri-phone-fill"></i> +91 (471) 987-6543</p>
									<p className='number-b'><i class="ri-mail-line"></i> contact@kochibusiness.com</p>
									<p className='b-mail'><i class="ri-whatsapp-line"></i> +91 (471) 987-6543</p>
									<p className='b-insta'><i class="ri-instagram-line"></i> Check us out on Instagram @trivandrumbusines</p>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs