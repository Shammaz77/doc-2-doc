import React, { useRef } from 'react'
import '../../css/universities.css'
import { Link } from 'react-router-dom'
import university from '../../assets/university.png'
import flag from '../../assets/flag.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import arrow from '../../assets/arrow.svg';
const TopUniversities = () => {
	const sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
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

	const UniversityCard = ({ universityName = "Caucasus University in Tbilisi" }) => (
		<div className="university-box">
			<img src={university} className='university-img' alt="" />
			<div className="details-about-university">
				<div className="univetrsity-one">
					<h3 className='university-name'>Caucasus University in Tbilisi</h3>
					<img src={flag} className='county-flag-university' alt="" />
				</div>
				<div className="table-row">
					<div className="university-table-box">
						<h6 className='table-title'>WorldRank:</h6>
						<h5 className='table-desc'>7324</h5>
					</div>
					<div className="university-table-box">
						<h6 className='table-title'>Accommodation:</h6>
						<h5 className='table-desc'>7324</h5>
					</div>
				</div>
				<div className="table-row">
					<div className="university-table-box">
						<h6 className='table-title'>No of Indian Students:</h6>
						<h5 className='table-desc'>7324 <span className='price-grey'>(approx.)</span></h5>
					</div>
					<div className="university-table-box">
						<h6 className='table-title'>Course Fee:</h6>
						<h5 className='table-desc'>7324 <span className='price-grey'> / years</span></h5>
					</div>
				</div>
				<div className="table-row no-border">
					<div className="university-table-box">
						<h6 className='table-title'>Course Duration:</h6>
						<h5 className='table-desc'>7324</h5>
					</div>
					<div className="university-table-box">
						<h6 className='table-title'>Food:</h6>
						<h5 className='table-desc'>7324</h5>
					</div>
				</div>
			</div>
		</div>
	)

	return (
		<div className='top-universities'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="university-dv">
							<h3 className='our-universities-title mb-0'>Top Universities</h3>
							<h1 className='top-university-title'>OUR Top <span className='black-text'>10 UNIVERSITIES</span> </h1>
							<p className='text-top-universities'>Carefully selected based on global rankings, affordability, quality of education, and student satisfaction, these top 10 universities are trusted by thousands of aspiring doctors. Each offers world-class MBBS programs with international recognition and a strong track record of success.</p>
							<Link to='/' className='btn contact-us-universities secondarycolor'> 	Contact us <img src={arrow} className='arrow-nav' alt="" /> </Link>
						</div>
					</div>
				</div>
			</div>
			<div className="slider-universitie-container">
				<div className="university-slider-container">
					<Slider ref={sliderRef} {...settings}>
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
						<UniversityCard />
					</Slider>

					{/* Custom Navigation Controls */}
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
			</div>
		</div>
	)
}

export default TopUniversities