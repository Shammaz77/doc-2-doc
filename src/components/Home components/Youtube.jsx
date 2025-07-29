import React, { useRef } from 'react'
import Slider from 'react-slick'
import '../../css/youtube.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Link } from 'react-router-dom'
import youtube from '../../assets/youtube.svg'
const Youtube = () => {
	const sliderRef = useRef(null)

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
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
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
		<div className='youtube-section'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="button-container-students bottom-space-youtube">
							<div className="contact-titlr-section cnct-btn">Check out our YouTube Channel</div>
							<h1 className='title-connect'>Want to learn more about  <br /> <span className='grey-connect'>MBBS abroad?</span> </h1>
						</div>
					</div>
					<div className="col-lg-12">
						<Slider ref={sliderRef} {...settings}>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
							<div className="youtube-slide">
								<div className="youtube-box">
									<iframe 
										width="100%" 
										height="315" 
										src="https://www.youtube.com/embed/_i7oy3FEFVA?si=3WE-BPBGMWN-45f7" 
										title="YouTube video player" 
										frameBorder="0" 
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
										referrerPolicy="strict-origin-when-cross-origin" 
										allowFullScreen
									></iframe>
								</div>
							</div>
						</Slider>
					</div>
					<div className="slider-nav-controls mb-5">
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
					<Link to='/' className='btn youtube-navigate primarycolor'>Got to Youtube <img src={youtube} className='youtube-icon-img' alt="" /> </Link>
			</div>
		</div>
	)
}

export default Youtube