import React from 'react';
import * as SVGUtil from '../../util/svg/img_svg';

class Splash extends React.Component {

  nextSlide() {
    
  }

  prevSlide() {

  }

  render() {
    return (
      <div className='splash-main'>
        <section className='splash-main-credit'>

        </section>
        <div className="slideshow-container">

          <div className="mySlides slide1">
            <img className="slide-img" src="assets/red-panda.jpg" alt=""/>
            <div className="numbertext">1 / 3</div>
   
            <div className="text">Caption Text</div>
          </div>

          {/* <div className="mySlides slide2 fade">
            <div className="numbertext">2 / 3</div>

            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides slide3 fade">
            <div className="numbertext">3 / 3</div>
         
            <div className="text">Caption Three</div>
          </div> */}

          <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
          <a className="next" onClick="plusSlides(1)">&#10095;</a>
        </div>
        <section className='sponsers'>
          <div className='svg'>
            <SVGUtil.Bee /> 
          </div>
        </section>
        <section>
          <h2>How It Works</h2>
        </section>
        <section>
          <section>
            <h2>Contribute to Science</h2>
            <p>Every observation can contribute to biodiversity science, from the rarest butterfly to the most common backyard weed. We share your findings with scientific data repositories like the Global Biodiversity Information Facility to help scientists find and use your data. All you have to do is observe.</p>
          </section>
          <section>
            img here
          </section>
        </section>
        <section>
          <h2>Nature At Your Fingertips</h2>
        </section>
        <section>
          <h2>Who Uses Nsepect?</h2>
          <div>
            slide show here
          </div>
        </section>
        <section>
          <h2>What are you waiting for?</h2>
          <button>JOIN TODAY</button>
        </section>
      </div>
    )
  }
}

export default Splash;