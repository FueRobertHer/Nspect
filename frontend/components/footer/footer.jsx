import React from 'react';
import { NatGeoCAS } from '../svg/img_svg';

const Footer = ({ location }) => (
  <footer className="footer-main">
    <section className="links">
      <ul>
        <li>About</li>
        <li>GitHub</li>
        <li>LinkedIn</li>
      </ul>
    </section>

    <section className="links">
      <ul>
        <li>support</li>
        <li>fb</li>
        <li>twitter</li>
      </ul>
    </section>

    <div className="NatGeoCAS">
      <NatGeoCAS />
    </div>
  </footer>
)

export default Footer;
