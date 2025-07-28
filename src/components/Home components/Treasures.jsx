import React from 'react'
import Slider from 'react-slick'
import '../../css/treasure.css'
import { Link } from 'react-router-dom'
import student from '../../assets/student.png'

// Import slick CSS files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Treasures = () => {
	// Student data - expand this array with more students
	const students = [
		{ id: 1, image: student, name: "Student 1" },
		{ id: 2, image: student, name: "Student 2" },
		{ id: 3, image: student, name: "Student 3" },
		{ id: 4, image: student, name: "Student 4" },
		{ id: 5, image: student, name: "Student 5" },
		{ id: 6, image: student, name: "Student 6" }
	]

	// Slick slider settings
	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Show exactly 3 slides
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		centerMode: true,
		centerPadding: '0px', // No extra padding to ensure only 3 visible
		focusOnSelect: true,
		arrows: false,
		variableWidth: false, // Consistent width
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3, // Keep 3 slides on tablet
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3, // Keep 3 slides on mobile landscape
					slidesToScroll: 1,
					centerMode: true,
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1, // Single slide on small mobile
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: '0px',
				}
			}
		]
	}

	return (
		<div className='treasures-section'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="treasure-title-section">
							<h3 className='our-treasure-title mb-0'>Our Treasures</h3>
							<h1 className='title-treasure'> 
								<span className='span-first'> Students just like You,</span> <br />	  
								who have started their <span className='gradient-golden-color'>MBBS</span> journey
							</h1>
							<p className='treasure-descrption'>
								They once had the same questions, concerns, and dreams—and today, they're studying at top medical universities across the globe. With the right guidance, support, and planning, you too can take the first step toward becoming a doctor.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-slider-section">
				<div className="container-slider">
					<div className="row">
						<div className="col-lg-12">
							<div className="student-slider-wrapper">
								<Slider {...sliderSettings} className="student-slick-slider">
									{students.map((student, index) => (
										<div key={student.id} className="slick-slide-item">
											<div className="student-div">
												<img 
													src={student.image} 
													className='student-img' 
													alt={student.name} 
												/>
												<div className="student-button-container">
													<Link to='/' className='btn search-btn secondarycolor'>
														Contact us
													</Link>
												</div>
											</div>
										</div>
									))}
								</Slider>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Treasures