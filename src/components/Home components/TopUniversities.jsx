import React from 'react'
import '../../css/universities.css'
import { Link } from 'react-router-dom'

const TopUniversities = () => {
	return (
		<div className='top-universities'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="university-dv">
							<h3 className='our-universities-title mb-0'>Top Universities</h3>
							<h1 className='top-university-title'>OUR Top <span className='black-text'>10 UNIVERSITIES</span> </h1>
							<p className='text-top-universities'>Carefully selected based on global rankings, affordability, quality of education, and student satisfaction, these top 10 universities are trusted by thousands of aspiring doctors. Each offers world-class MBBS programs with international recognition and a strong track record of success.</p>
							<Link to='/' className='btn contact-us-universities secondarycolor'> 	Contact us </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopUniversities