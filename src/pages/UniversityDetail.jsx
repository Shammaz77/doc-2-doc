import React from 'react'
import '../css/universitydetail.css'
import VedioSlider from '../components/University Detail/VedioSlider'
import AboutUniversity from '../components/University Detail/AboutUniversity'
import TalktoStudents from '../components/University Detail/TalktoStudents'
import StudentsCard from '../components/University Detail/StudentsCard'
import Contact from '../components/Home components/Contact'
const UniversityDetail = () => {
	return (
		<div className='university-detail-page'>
			<div className="container-main mb-5">
				<div className="row">
					<div className="col-lg-12">
						<div className="brudcums">
							<p className='brudcums-text'> <span className='redirection-page'>Top Universities  <i class="ri-arrow-right-s-line"></i> Georgia </span> <span className='current-page'><i class="ri-arrow-right-s-line"></i>  Caucasus University in Tbilisi</span>   </p>
						</div>
					</div>


					<VedioSlider />
					<AboutUniversity />
					<TalktoStudents />
					<StudentsCard />
					<StudentsCard />
					<StudentsCard />
					<StudentsCard />
					<StudentsCard />
				</div>
			</div>
			<Contact />

		</div>
	)
}

export default UniversityDetail



