import React from 'react';
import { NatGeoCAS, NatGeo, CAS } from '../svg/img_svg';
import { Facebook, GitHub, LinkedIn, Twitter } from '../svg/icon_svg';

const Footer = ({ location }) => (
  <footer className="footer-main">
    <section className="ul-links">
      <ul>
        <li className="footer-links">About</li>
        <li className="footer-links footer-icon"> <a href="https://github.com/FueRobertHer" target="_blank"><GitHub /></a> </li>
        <li className="footer-links footer-icon"> <a href="https://www.linkedin.com/in/fue-her/" target="_blank"> <LinkedIn /> </a> </li>
      </ul>
    </section>

    <section className="ul-links">
      <ul>
        <li className="footer-links"> <a href="https://www.inaturalist.org/donate?utm_campaign=default&utm_content=footer-button&utm_medium=web&utm_source=inaturalist.org" className="support-button" target="_blank">Support iNaturalist</a> </li>
        
        <div className="inat-social">
          <li className="footer-links footer-icon"> <a href="https://www.facebook.com/inaturalist/" target="_blank"><Facebook /></a> </li>
          <li className="footer-links footer-icon"> <a href="https://twitter.com/inaturalist" target="_blank"><Twitter /></a> </li>
        </div>
      </ul>
    </section>

    <section className="NatGeoCAS">
      <a href="https://calacademy.org/" target="_blank">
        <div className="cas">
        <CAS />
      </div>
      </a>
      
      <a href="https://www.nationalgeographic.org/" target="_blank">
        <div className="nat-geo">
        <NatGeo />
      </div>
      </a>
    </section>
  </footer>
)

export default Footer;
