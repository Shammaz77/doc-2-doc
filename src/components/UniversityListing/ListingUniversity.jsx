import React from 'react'
import { Link } from 'react-router-dom'
import university from '../../assets/university.png'
import flag from '../../assets/flag.png'
import '../../css/universitylisting.css'

const ListingUniversity = () => {
	return (
					<div className="col-lg-4">
						<div className="university-listing-box">
							<img src={university} className='university-img-listing' alt="" />
							<div className="details-about-university">
								<div className="univetrsity-one-listing">
									<img src={flag} className='county-flag-university-listing' alt="" />
									<div className="full-details-listing">
									<h3 className='university-name-listing mb-0'>Caucasus University in Tbilisi University in Tbilisi </h3>
									<p className='university-desc-place'>Georgia</p>
									</div>
								</div>
								<div className="borderlisting"></div>
								<div className="table-row-listing">
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>WorldRank:</h6>
										<h5 className='table-descl'>7324</h5>
									</div>
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>Accommodation:</h6>
										<h5 className='table-descl'>150000 <span className='price-grey'> / month</span></h5>
									</div>
								</div>
								<div className="table-row-listing">
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>No of Indian Students:</h6>
										<h5 className='table-descl'>7324 <span className='price-grey'>(approx.)</span></h5>
									</div>
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>Course Fee:</h6>
										<h5 className='table-descl'>5 Lack <span className='price-grey'> / years</span></h5>
									</div>
								</div>
								<div className="table-row-listing no-border">
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>Course Duration:</h6>
										<h5 className='table-descl'>6 <span className='price-grey'> / year</span></h5>
									</div>
									<div className="university-table-box-listing-page">
										<h6 className='table-titlel'>Food:</h6>
										<h5 className='table-descl'>14,000 <span className='price-grey'> / month</span></h5>
									</div>
								</div>
								<div className="button-dv-listing-page">
									<Link className='get-more-details-btn secondarycolor btn' to='/'>Get More Details</Link>
								</div>
							</div>
						</div>
					</div>
	)
}

export default ListingUniversity