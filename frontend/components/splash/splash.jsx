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

        <section className='section section-sponsers'>
          <div className="section sponsers">
            <div>
              <SVGImg.NatGeoCASWhite />
            </div>
            <p>Nspect is a solo project of Fue Robert Her to clone iNaturalist.org, a joint initiative of the California Academy of Sciences and the National Geographic Society. </p>
          </div>
        </section>
        
        <section className='section '>
          <section className="how-it-works section section-row">
            <h2>How It Works</h2>
            <section className='section'>
              <SVGImg.Record />
              <SVGImg.Share />
              <SVGImg.Discuse />
            </section>
            <section className='section'>
              <p>Record your observation</p>
              <p>Share with fellow naturalists</p>
              <p>Discuss your findings</p>
            </section>
          </section>
        </section>
        <section className="contribute">
          <section className='section'>
            <h2>Contribute to Science</h2>
            <p>Every observation can contribute to biodiversity science, from the rarest butterfly to the most common backyard weed. We share your findings with scientific data repositories like the Global Biodiversity Information Facility to help scientists find and use your data. All you have to do is observe.</p>
          </section>
          <section>
            img here
          </section>
        </section>
        <section className='section section-row'>
          <h2>Nature At Your Fingertips</h2>
          <section className='section '>
            <section >
              <SVGImg.KeepTrack />
              <section>
                <h3>Keep Track</h3>
                <p>Record your encounters with other orgamisms and maintain life lists, all in the cloud.</p>
              </section>
              <SVGImg.Bee />
              <section>
                <h3>Create Useful Data</h3>
                <p>Help scientists and resource managers understand when and where orgaanisms occur.</p>
              </section>
            </section>

            <section>
              <SVGImg.Crowd />
              <section>
                <h3>Crowdsource Identifications</h3>
                <p>Connect with experts who can identify the organisms you observe.</p>
              </section>
              <SVGImg.NerdCowboy />
              <section>
                <h3>Become a Citizen Scientist</h3>
                <p>Find a project with a mission that intestets you, or start your own.</p>
              </section>
            </section>

            <section>
              <SVGImg.Owl />
              <section>
                <h3>Learn About Nature</h3>
                <p>Build your knowledge by talking with other naturalists and helping others.</p>
              </section>
              <SVGImg.Megaphone />
              <section>
                <h3>Run a Bioblitz</h3>
                <p>Hold an event where people try to find as many species as possible.</p>
              </section>
            </section>
          </section>
        </section>
        <section className="who-uses">
          <h2>Who Uses Nsepect?</h2>
          <div>
            slide show here
          </div>
        </section>
        <section className="waiting">
          <h2>What are you waiting for?</h2>
          <button>JOIN TODAY</button>
        </section>
      </div>
    )
  }
}

export default Splash;