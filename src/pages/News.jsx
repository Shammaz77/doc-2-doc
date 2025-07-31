import React from 'react'
import '../css/news.css'
import NewsSlider from '../components/News/NewsSlider'
import LearnMore from '../components/News/LearnMore'
import Contact from '../components/Home components/Contact'
const News = () => {
	return (
		<div className='news-page'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="brudcums">
							<p className='brudcums-text'> <span className='redirection-page'>Home <i class="ri-arrow-right-s-line"></i> Georgia </span> <span className='current-page'><i class="ri-arrow-right-s-line"></i>  News </span>   </p>
						</div>
					</div>
					<div className='news-update-section	'>
						<div className="col-lg-12">
							<div className="talk-to-students-dv">
								<h1 className='news-title-main'>New <span className='news-span'>Updates</span> </h1>
								<p className='sub-text-talk-to-students'>Stay updated with the latest news and updates on our YouTube channel.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<NewsSlider />
			<LearnMore/>
			<Contact/>
		</div>
	)
}

export default News