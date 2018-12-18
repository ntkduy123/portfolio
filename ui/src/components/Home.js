import React from "react";

import HomePageBg from '../static/images/home_page_bg_2.jpg';

const Home = () => (
  <section
    className="pt-page pt-page-1 section-with-bg section-paddings-0 pt-page-current"
    data-id="home"
    style={{ backgroundImage: '' }}
  >
    <div className="home-page-block-bg">
      <div className="mask" />
    </div>
    <div className="home-page-block">
      <div className="v-align">
        <h2>Duy Nguyen</h2>
        <div className="text-rotate" id="rotate">
          <div style={{ display: "none" }}>
            <p className="home-page-description">Web Designer</p>
          </div>
          <div style={{ display: "block" }}>
            <p className="home-page-description">Software Engineer</p>
          </div>
        </div>
        <div className="block end" style={{ textAlign: "center" }}>
          <ul className="info-list">
            <li>
              <span className="title">Age</span>
              <span className="value">23</span>
            </li>
            <li>
              <span className="title">Address</span>
              <span className="value">411/51 Le Dai Hanh Street, TPHCM</span>
            </li>
            <li>
              <span className="title">E-mail</span>
              <span className="value">
                <a href="mailto:email@example.com">ntkduy123@gmail.com</a>
              </span>
            </li>
            <li>
              <span className="title">Phone</span>
              <span className="value">+84 79 686 1997</span>
            </li>
            <li>
              <span className="title">Freelance</span>
              <span className="value available">Available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
