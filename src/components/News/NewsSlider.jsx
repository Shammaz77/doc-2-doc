import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import banner from '../../assets/newsbanner.png'
import logo from '../../assets/logo-news.png'

const NewsSlider = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		arrows: false // Hide arrows since you want only dots
	}

	return (
		<div className="container-main">
			<Slider {...settings} className="news-slider">
				{/* Slide 1 */}
				<div>
					<div className='slide-content'>
						<img src={banner} className='slide-img' alt="" />
						<div className="details-news-update-banner">
							<img src={logo} className='logo-img-news' alt="" />
							<div className="content-news">
								<h2 className='news-u-title mb-0'>Part 1: Introduction to MBBS Abroad | MBBS Abroad</h2>
								<p className='news-desc mb-0'>Guided by experienced doctors, our directors understand what it takes to succeed in medicine. With their leadership, every step you take is supervised with care, precision, and a deep commitment to your future in healthcare.</p>
								<h3 className='name-c'>DOC TO DOC</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 2 */}
				<div>
					<div className='slide-content'>
						<img src={banner} className='slide-img' alt="" />
						<div className="details-news-update-banner">
							<img src={logo} className='logo-img-news' alt="" />
							<div className="content-news">
								<h2 className='news-u-title mb-0'>Part 2: Choosing the Right University | MBBS Abroad</h2>
								<p className='news-desc mb-0'>Our comprehensive guidance helps you select the perfect medical university abroad. From accreditation to curriculum, we ensure you make the right choice for your medical career journey.</p>
								<h3 className='name-c'>DOC TO DOC</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 3 */}
				<div>
					<div className='slide-content'>
						<img src={banner} className='slide-img' alt="" />
						<div className="details-news-update-banner">
							<img src={logo} className='logo-img-news' alt="" />
							<div className="content-news">
								<h2 className='news-u-title mb-0'>Part 3: Admission Process Simplified | MBBS Abroad</h2>
								<p className='news-desc mb-0'>Navigate the complex admission process with ease. Our expert team provides step-by-step assistance to secure your admission in top medical universities worldwide.</p>
								<h3 className='name-c'>DOC TO DOC</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 4 */}
				<div>
					<div className='slide-content'>
						<img src={banner} className='slide-img' alt="" />
						<div className="details-news-update-banner">
							<img src={logo} className='logo-img-news' alt="" />
							<div className="content-news">
								<h2 className='news-u-title mb-0'>Part 4: Life as a Medical Student Abroad | MBBS Abroad</h2>
								<p className='news-desc mb-0'>Discover what life is like as an international medical student. From accommodation to cultural adaptation, we prepare you for every aspect of your journey abroad.</p>
								<h3 className='name-c'>DOC TO DOC</h3>
							</div>
						</div>
					</div>
				</div>

				{/* Slide 5 */}
				<div>
					<div className='slide-content'>
						<img src={banner} className='slide-img' alt="" />
						<div className="details-news-update-banner">
							<img src={logo} className='logo-img-news' alt="" />
							<div className="content-news">
								<h2 className='news-u-title mb-0'>Part 5: Career Opportunities After MBBS | MBBS Abroad</h2>
								<p className='news-desc mb-0'>Explore the vast career opportunities available after completing your MBBS abroad. From residency programs to practice opportunities, plan your future in medicine.</p>
								<h3 className='name-c'>DOC TO DOC</h3>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</div>
	)
}

export default NewsSlider