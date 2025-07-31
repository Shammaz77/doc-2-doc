import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import insta from '../assets/instagram.svg'
import f from '../assets/f.svg'
import t from '../assets/t.svg'
import arrow from '../assets/arrow.svg';
const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	return (
		<>
			<div className="container-main">
				<div className="navbar-flex">
					<div className="logo-main">
						<Link to='/'>
							<img src={logo} className='logo-img' alt="" />
						</Link>
					</div>
					<div className="navigation-buttons">
						<Link to='/' className='btn exam-portal-btn primarycolor'>Exam Portal</Link>
						<Link to='/' className='btn contact-us-btn secondarycolor'>Contact Us <img src={arrow} className='arrow-nav' alt="" /> </Link>
						<i
							className="ri-menu-line menu-icon"
							onClick={toggleSidebar}
						></i>
					</div>
				</div>
			</div>

			{/* Full-Screen Sidebar */}
			<div className={`sidebar-overlay ${isSidebarOpen ? 'sidebar-open' : ''}`}>
				{/* Close Icon */}
				<i
					className="ri-close-line close-icon"
					onClick={closeSidebar}
				></i>

				{/* Navigation Links */}
				<nav className="sidebar-nav">
					<Link to='/' className="sidebar-link" onClick={closeSidebar}>
						Home
					</Link>
					<Link to='/about' className="sidebar-link" onClick={closeSidebar}>
						About
					</Link>
					<Link to='/university-listing' className="sidebar-link" onClick={closeSidebar}>
						Universities
					</Link>
					<Link to='/about-us' className="sidebar-link" onClick={closeSidebar}>
						About Us
					</Link>
					<Link to='/contact-us' className="sidebar-link" onClick={closeSidebar}>
						Contact Us
					</Link>
				</nav>
				<h5 className='join-text'>Join our growing family on social media!</h5>
				<div className="sidebar-icons">
					<li><Link to='/'><img src={insta} className='icon-social-media' alt="" /></Link></li>
					<li><Link to='/'><img src={t} className='icon-social-media' alt="" /></Link></li>
					<li><Link to='/'><img src={f} className='icon-social-media' alt="" /></Link></li>
				</div>
			</div>

		</>
	);
};

export default Navbar;