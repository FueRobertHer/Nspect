import React from 'react';

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

          <div className="mySlides slide1 fade">
            <div className="numbertext">1 / 3</div>
   
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides slide2 fade">
            <div className="numbertext">2 / 3</div>

            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides slide3 fade">
            <div className="numbertext">3 / 3</div>
         
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
          <a className="next" onClick="plusSlides(1)">&#10095;</a>
        </div>
      </div>
    )
  }
}

export default Splash;