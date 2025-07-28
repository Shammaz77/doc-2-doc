import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';



const Navbar = () => (
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
				<i class="ri-menu-line"></i>
			</div>
		</div>
	</div>
);

export default Navbar;
