import React from 'react'
import logo from '../assets/logo-footer.svg'
import '../css/footer.css'
import { Link } from 'react-router-dom'
import insta from '../assets/instagram.svg'
import f from '../assets/f.svg'
import t from '../assets/t.svg'


const Footer = () => {
  return (
    <div className=' container-main'>
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-box">
              <img src={logo} className='logo-footer' alt="" />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-box">
              <ul>
                <li><Link to='/' className='footer-link'>Home</Link></li>
                <li><Link to='/' className='footer-link'>About</Link></li>
                <li><Link to='/' className='footer-link'>University</Link></li>
                <li><Link to='/' className='footer-link'>Exams  Portal</Link></li>
                <li><Link to='/' className='footer-link'>About US</Link></li>
                <li><Link to='/' className='footer-link'>Contact US</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-box">
              <ul>
                <div className="dv-contact-box">
                  <p className='title-icon'><i class="ri-mail-line"></i> Email</p>
                  <li><Link to='/' className='footer-link fff'>info@doc2doc.org</Link></li>
                </div>
                <div className="dv-contact-box">
                  <p className='title-icon'><i class="ri-phone-fill"></i> Phone Number</p>
                  <li><Link to='/' className='footer-link fff'>+91 9207400300</Link></li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-box">
              <ul>
                <li><Link to='/' className='footer-link'>123 Street Name, City, State Name, Country, 12345</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="footer-box">
              <ul>
                <li><Link to='/' className='footer-link'>Join our growing family on social media!</Link></li>
                <div className="social-media">
                  <li><Link to='/'><img src={insta} className='icon-social-media' alt="" /></Link></li>
                  <li><Link to='/'><img src={t} className='icon-social-media' alt="" /></Link></li>
                  <li><Link to='/'><img src={f} className='icon-social-media' alt="" /></Link></li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-box-footer">
        <div className="row">
          <div className="col-lg-6">
            <p className='copyright'>©2025 Company Inc</p>
          </div>
          <div className="col-lg-6">
            <div className="contant-terms">
            <Link to='/' className='terms-link'>Terms of services</Link>
            <Link to='/' className='terms-link'>Privacy policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer