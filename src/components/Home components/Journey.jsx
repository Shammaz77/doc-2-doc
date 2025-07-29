import React from 'react'
import Slider from 'react-slick'
import '../../css/jorney.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import vedio from '../../assets/vedio.png'

const Journey = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className='journey-section'>
      <div className="container-main">
        <div className="row">
          <div className="col-lg-12">
            <div className="journey-box">
              <h1 className='title-our-journey'>
                Their Journey, <span className='grey-text-our-mission'>Our Mission</span>
              </h1>
              <p className='sub-journey'>
                Guided by experienced doctors, our directors understand what it takes to succeed in medicine. 
                With their leadership, every step you take is supervised with care, precision, and a deep 
                commitment to your future in healthcare.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="video-slider-container">
              <Slider {...sliderSettings}>
                <div className="video-slide">
                  <div className="vedio-box">
                    <img src={vedio} className='vedio-img' alt="Journey Video 1" />
                  </div>
                </div>
                <div className="video-slide">
                  <div className="vedio-box">
                    <img src={vedio} className='vedio-img' alt="Journey Video 2" />
                  </div>
                </div>
                <div className="video-slide">
                  <div className="vedio-box">
                    <img src={vedio} className='vedio-img' alt="Journey Video 3" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey