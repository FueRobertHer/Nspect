import React from 'react';
import * as SVGImg from '../../util/svg/img_svg';

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
            {/* <div className="numbertext">1 / 3</div> */}
   
            {/* <div className="text">Caption Text</div> */}
          </div>

          {/* <div className="mySlides slide2 fade">
            <div className="numbertext">2 / 3</div>

            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides slide3 fade">
            <div className="numbertext">3 / 3</div>
         
            <div className="text">Caption Three</div>
          </div> */}


              {/* onClick="plusSlides(1)" */}
          <a className="prev" >&#10094;</a>
          <a className="next" >&#10095;</a>
        </div>
        <section className='sponsers'>
          <div className='svg'>
     
          </div>
        </section>
        <section>
          <h2>How It Works</h2>
          <section>
            <SVGImg.Record />
            <SVGImg.Share />
            <SVGImg.Discuse />
          </section>
          <section>
            <p>Record your observation</p>
            <p>Share with fellow naturalists</p>
            <p>Discuss your findings</p>
          </section>
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
          <section>
            <section>
              <SVGImg.KeepTrack />
              <section>
                <h2>Keep Track</h2>
                <p>Record your encounters with other orgamisms and maintain life lists, all in the cloud.</p>
              </section>
              <SVGImg.Bee />
              <section>
                <h2>Create Useful Data</h2>
                <p>Help scientists and resource managers understand when and where orgaanisms occur.</p>
              </section>
            </section>
            <section>
              <SVGImg.Crowd />
              <section>
                <h2>Crowdsource Identifications</h2>
                <p>Connect with experts who can identify the organisms you observe.</p>
              </section>
              <SVGImg.NerdCowboy />
              <section>
                <h2>Become a Citizen Scientist</h2>
                <p>Find a project with a mission that intestets you, or start your own.</p>
              </section>
            </section>
            <section>
              <SVGImg.Owl />
              <section>
                <h2>Learn About Nature</h2>
                <p>Build your knowledge by talking with other naturalists and helping others.</p>
              </section>
              <SVGImg.Megaphone />
              <section>
                <h2>Run a Bioblitz</h2>
                <p>Hold an event where people try to find as many species as possible.</p>
              </section>
            </section>
          </section>
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