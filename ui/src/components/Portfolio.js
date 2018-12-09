import React from "react";

import project1 from "../static/images/1.jpg";
import project2 from "../static/images/2.jpg";
import project3 from "../static/images/3.jpg";
import project4 from "../static/images/4.jpg";
import project5 from "../static/images/5.jpg";
import project6 from "../static/images/6.jpg";
import project7 from "../static/images/7.jpg";
import project8 from "../static/images/8.jpg";
import project9 from "../static/images/9.jpg";
import project10 from "../static/images/10.jpg";
import project11 from "../static/images/11.jpg";
import project12 from "../static/images/12.jpg";

const Portfolio = () => (
  <section className="pt-page pt-page-4 pt-page-current" data-id="portfolio">
    <div className="section-title-block">
      <h2 className="section-title">Portfolio</h2>
      <h5 className="section-description">My Best Works</h5>
    </div>
    <div className="portfolio-content">
      <ul className="portfolio-filters" id="portfolio_filters">
        <li className="active">
          <a className="filter btn btn-sm btn-link active" data-group="all">
            All
          </a>
        </li>
        <li>
          <a className="filter btn btn-sm btn-link" data-group="media">
            Media
          </a>
        </li>
        <li>
          <a className="filter btn btn-sm btn-link" data-group="illustration">
            Illustration
          </a>
        </li>
        <li>
          <a className="filter btn btn-sm btn-link" data-group="video">
            Video
          </a>
        </li>
      </ul>
      <div
        className="portfolio-grid portfolio-masonry masonry-grid-3 shuffle"
        id="portfolio_grid"
      >
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "media"]'
        >
          <a
            className="ajax-page-load"
            href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/portfolio-1.html"
          >
            <img src={project1} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "video"]'
        >
          <a
            title="Praesent Dolor Ex"
            className="lightbox mfp-iframe"
            href="https://player.vimeo.com/video/97102654?autoplay=1"
          >
            <img src={project2} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Video</small>
              <i className="fa fa-video-camera" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all","illustration"]'
        >
          <a
            title="Duis Eu Eros Viverra"
            className="lightbox"
            href="./Sunshine - Responsive vCard Template_files/3.jpg"
          >
            <img src={project3} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "media"]'
        >
          <a
            className="ajax-page-load"
            href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/portfolio-1.html"
          >
            <img src={project4} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "illustration"]'
        >
          <a
            title="Aliquam Condimentum Magna Rhoncus"
            className="lightbox"
            href={project5}
          >
            <img src={project5} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "media"]'
        >
          <a
            className="ajax-page-load"
            href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/portfolio-1.html"
          >
            <img src={project6} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "video"]'
        >
          <a
            title="Nulla Facilisi"
            className="lightbox mfp-iframe"
            href="https://player.vimeo.com/video/97102654?autoplay=1"
          >
            <img src={project7} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Video</small>
              <i className="fa fa-video-camera" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all",  "media"]'
        >
          <a
            className="ajax-page-load"
            href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/portfolio-1.html"
          >
            <img src={project8} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all","illustration"]'
        >
          <a
            title="Mauris Neque Dolor"
            className="lightbox"
            href="./Sunshine - Responsive vCard Template_files/9.jpg"
          >
            <img src={project9} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "video"]'
        >
          <a
            title="Donec Lectus Arcu"
            className="lightbox mfp-iframe"
            href="https://player.vimeo.com/video/97102654?autoplay=1"
          >
            <img src={project10} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Video</small>
              <i className="fa fa-video-camera" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all","illustration"]'
        >
          <a
            title="Duis Eu Eros Viverra"
            className="lightbox"
            href="./Sunshine - Responsive vCard Template_files/11.jpg"
          >
            <img src={project11} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </a>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all","media"]'
        >
          <a
            className="ajax-page-load"
            href="https://lmpixels.com/demo/sunshine-demo/sunshine-version-2/sunshine-html-template/portfolio-1.html"
          >
            <img src={project12} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </a>
        </figure>
      </div>
    </div>
  </section>
);

export default Portfolio;
