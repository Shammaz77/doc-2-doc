import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

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
						<Link to='/' className='btn contact-us-btn secondarycolor'>Contact Us</Link>
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
					<Link to='/universities' className="sidebar-link" onClick={closeSidebar}>
						Universities
					</Link>
					<Link to='/about-us' className="sidebar-link" onClick={closeSidebar}>
						About Us
					</Link>
					<Link to='/contact' className="sidebar-link" onClick={closeSidebar}>
						Contact Us
					</Link>
				</nav>
			</div>
		</>
	);
};

export default Navbar;