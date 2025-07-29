import React, { useState , useRef } from 'react'
import Slider from 'react-slick'
import '../../css/students.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import student from '../../assets/student-image.png'
import { Link } from 'react-router-dom'
import flag from '../../assets/flag.png'

const ConnectStudents = () => {
	const [currentSlide, setCurrentSlide] = useState(0)



	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '12%',
		focusOnSelect: true,
		beforeChange: (current, next) => setCurrentSlide(next),
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					centerMode: true,
					centerPadding: '15%'
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '20px'
				}
			}
		]
	}
	const goToNext = () => {
		sliderRef.current.slickNext()
	}

	const goToPrev = () => {
		sliderRef.current.slickPrev()
	}
	return (
		<div className='connect-students-container'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="button-container-students">
							<div className="contact-titlr-section cnct-btn">Connect Students Realtime</div>
							<h1 className='title-connect'>Connect with Indian students studying MBBS <br /> <span className='grey-connect'>around the world</span> </h1>
						</div>
					</div>

				</div>
			</div>
						<div className="students-slider-container">
							<Slider {...settings}>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${0 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Tina</h3>
											<h5 className='student-place'>Malappuram, Malappuram</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Georgia</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${1 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Rahul</h3>
											<h5 className='student-place'>Kochi, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Russia</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${2 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Priya</h3>
											<h5 className='student-place'>Thrissur, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Ukraine</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${3 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Arjun</h3>
											<h5 className='student-place'>Kannur, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Philippines</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${4 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Sneha</h3>
											<h5 className='student-place'>Kollam, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Bangladesh</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${5 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Vikram</h3>
											<h5 className='student-place'>Palakkad, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Nepal</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${6 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Anjali</h3>
											<h5 className='student-place'>Kozhikode, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>China</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
								<div className="slider-item-wrapper">
									<div className={`student-contact-box ${7 === currentSlide ? 'active-student-slider' : ''}`}>
										<img src={student} className='student-image-connect' alt="" />
										<div className="student-full-details">
											<h3 className='student-name'>Ravi</h3>
											<h5 className='student-place'>Alappuzha, Kerala</h5>
											<div className="contry-box">
												<h6 className='country-name mb-0'>Kyrgyzstan</h6>
												<img src={flag} className='country-flag-student' alt="" />
											</div>
											<Link className='message-btn btn'>Message Us</Link>
											<Link className='book-btn secondarycolor btn'>Book a Call</Link>
										</div>
									</div>
								</div>
							</Slider>
						</div>
											<div className="slider-nav-controls">
						<button
							className="slider-nav-btn prev-btn"
							onClick={goToPrev}
							aria-label="Previous slide"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<button
							className="slider-nav-btn next-btn"
							onClick={goToNext}
							aria-label="Next slide"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</div>
		</div>
	)
}

export default ConnectStudents