import React from 'react'
import flag from '../../assets/flag.png'
import { Link } from 'react-router-dom'
const AboutUniversity = () => {
	return (
		<div className="about-container">
			<div className="row">
				<div className='col-lg-12'>
					<div className="university-name-section">
						<img src={flag} className='flag-un' alt="" />
						<div className="un-dv">
							<h3 className='un-name-full mb-0'>Caucasus University in Tbilisi</h3>
							<p className='university-country mb-0'>Georgia</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>WorldRank :</h5>
						<p className='sub-ab-un'>7324</p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>Accommodation :</h5>
						<p className='sub-ab-un'>₹15000 <span className='span-text-un'> / month</span></p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>No of Indian Students :</h5>
						<p className='sub-ab-un'>500 <span className='span-text-un'> (approx)</span></p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>Course Fee :</h5>
						<p className='sub-ab-un'>₹5 Lakhs <span className='span-text-un'> / year</span></p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>WorldRank :</h5>
						<p className='sub-ab-un'>6 <span className='span-text-un'> / years</span></p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="half-un-dv-det">
						<h5 className='title-ab-un'>WorldRank :</h5>
						<p className='sub-ab-un'>15,000  <span className='span-text-un'> / month</span></p>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="talk-btn-dv">
						<Link className='talk-btn-st btn'>Talk To Students</Link>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="talk-btn-dv">
						<Link className='get-adm-btn btn secondarycolor'>Get Admission</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUniversity