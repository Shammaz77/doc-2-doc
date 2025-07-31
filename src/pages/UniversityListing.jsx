import React from 'react'
import '../css/universitylisting.css'
import { Link } from 'react-router-dom'
import university from '../assets/university.png'
import flag from '../assets/flag.png'
import ListingUniversity from '../components/UniversityListing/ListingUniversity'
import arrow from '../assets/arror-btn.svg'

const UniversityListing = () => {
	return (
		<div className='university-listing'>
			<div className="banner-universities">
				<div className="container-main">
					<div className="row">
						<div className="col-lg-7">
							<div className="banner-contents">
								<h1 className='connect-title '>Connect with US</h1>
								<p className='connect-subb'>MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.</p>
								<Link to='/' className='contact-btn-u btn secondarycolor'> Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="arrow-dv-un-listing">
							<Link to='/'>
								<img src={arrow} className='arrow-btn-img-listing' alt="" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="brudcums">
							<p className='brudcums-text'> <span className='redirection-page'>Top Universities </span>  <i class="ri-arrow-right-s-line"></i> Georgia</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-listing">
							<label htmlFor="country-select" className='mb-2 label-bold'>Which country do you want to study?</label>
							<select className="form-select form-control-lg" id="country-select" aria-label="Default select example">
								<option value="">Georgia</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-listing">
							<label htmlFor="country-select" className='mb-2 label-bold'>What is your budget (Course Fee/year)?</label>
							<select className="form-select form-control-lg" id="country-select" aria-label="Default select example">
								<option value="">10 LAKHS</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
					</div>




					<div className="col-lg-12">
						<div className="filter-container">
							<div className="filter-result">
								<h5>10 Results Found</h5>
							</div>
							<div className="filter-dv">
								<label htmlFor="country-select" className='mb-0 label-bold'>Sort by <i class="ri-sound-module-line"></i></label>
								<select className="form-select form-control-lg box-dvs" id="country-select" aria-label="Default select example">
									<option value="">Low to High</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
						</div>
					</div>




















					<ListingUniversity />
					<ListingUniversity />
					<ListingUniversity />
					<ListingUniversity />
					<ListingUniversity />
					<ListingUniversity />
					<ListingUniversity />

				</div>
			</div>
		</div>
	)
}

export default UniversityListing