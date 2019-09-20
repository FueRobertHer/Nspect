import React from 'react';
import { NatGeoCAS, NatGeo, CAS } from '../svg/img_svg';
import { Facebook, GitHub, LinkedIn, Twitter } from '../svg/icon_svg';

const Footer = ({ location }) => (
  <footer className="footer-main">
    <section className="ul-links">
      <ul>
        <li className="footer-links">About</li>
        <li className="footer-links footer-icon"> <a href="https://github.com/FueRobertHer"><GitHub /></a> </li>
        <li className="footer-links footer-icon"> <a href="https://www.linkedin.com/in/fue-her-a02b8b82/"> <LinkedIn /> </a> </li>
      </ul>
    </section>

    <section className="ul-links">
      <ul>
        <li className="footer-links"> <a href="https://www.inaturalist.org/donate?utm_campaign=default&utm_content=footer-button&utm_medium=web&utm_source=inaturalist.org" className="support-button">Support iNaturalist</a> </li>
        
        <div className="inat-social">
          <li className="footer-links footer-icon"> <a href="https://www.facebook.com/inaturalist/"><Facebook /></a> </li>
          <li className="footer-links footer-icon"> <a href="https://twitter.com/inaturalist"><Twitter /></a> </li>
        </div>
      </ul>
    </section>

    <section className="NatGeoCAS">
      <a href="https://calacademy.org/">
        <div className="cas">
        <CAS />
      </div>
      </a>
      
      <a href="https://www.nationalgeographic.org/">
        <div className="nat-geo">
        <NatGeo />
      </div>
      </a>
    </section>
  </footer>
)

export default Footer;
