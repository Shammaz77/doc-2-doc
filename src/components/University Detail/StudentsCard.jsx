import React from 'react'
import student from '../../assets/student-image.png'
import { Link } from 'react-router-dom'
import flag from '../../assets/flag.png'


const StudentsCard = () => {
	return (
		<div className='col-lg-4'>
				<div className="student-contact-box">
					<img src={student} className='student-image-connect' alt="" />
					<div className="student-full-details">
						<h3 className='student-name'>Tina</h3>
						<h5 className='student-place'>Malappuram, Malappuram</h5>
						<div className="contry-box">
							<h6 className='country-name mb-0'>Georgia</h6>
							<img src={flag} className='country-flag-student' alt="" />
						</div>
						<Link className='message-btn btn'>Message Us</Link>
						<Link className='book-btn secondarycolor btn'>Book a Call</Link>
					</div>
				</div>
		</div>
	)
}

export default StudentsCard