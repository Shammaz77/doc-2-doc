import { Link } from 'react-router-dom'
import banner from '../assets/banner.svg'
const Hero = () => {
  return (
    <div className='sero-section-home'>
      <div className="container-main">
        <h1 className='title-hero'>
          Is becoming a <br />
          Doctor your <span className='gradient-golden-color'>dream?</span>
        </h1>
        {/* dropdown  */}
        <div className="container-dropdown">
          <p className='description-home'>MBBS abroad for Indian students is more accessible than ever—find the best medical universities, talk to current Indian students, and move one step closer to becoming a doctor.</p>
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="country-select" className='mb-2 label-bold'>Which country do you want to study?</label>
              <select className="form-select" id="country-select" aria-label="Default select example">
                <option value="">Georgia</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label htmlFor="budget-select" className='mb-2 label-bold'>What is your budget (Course Fee/year)?</label>
              <select className="form-select" id="budget-select" aria-label="Default select example">
                <option value="">3 LACK</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="col-lg-12">
              <div className="search-button-dv">
                <Link to='/' className='btn search-btn secondarycolor'>Search</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container-full">
        <img src={banner} className='banner-image' alt="" />
      </div>
    </div>
  )
}

export default Hero