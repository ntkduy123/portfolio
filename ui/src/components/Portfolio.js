import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../static/images/1.jpg'
import project2 from '../static/images/2.jpg'
import project3 from '../static/images/3.jpg'
import project4 from '../static/images/4.jpg'
import project5 from '../static/images/5.jpg'

const Portfolio = () => (
  <section className="pt-page pt-page-4 pt-page-current" data-id="portfolio">
    <div className="section-title-block">
      <h2 className="section-title">Portfolio</h2>
      <h5 className="section-description">My Best Works</h5>
    </div>
    <div className="portfolio-content">
      <ul className="portfolio-filters" id="portfolio_filters">
        <li className="active">
          <Link to="/" className="filter btn btn-sm btn-link active" data-group="all">All</Link>
        </li>
        <li>
          <Link to="/" className="filter btn btn-sm btn-link" data-group="media">Media</Link>
        </li>
        <li>
          <Link to="/" className="filter btn btn-sm btn-link" data-group="illustration">Illustration</Link>
        </li>
        <li>
          <Link to="/" className="filter btn btn-sm btn-link" data-group="video">Video</Link>
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
          <Link
            to="/"
            className="ajax-page-load"
          >
            <img alt="404" src={project1} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </Link>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "video"]'
        >
          <Link
            to="/"
            title="Praesent Dolor Ex"
            className="lightbox mfp-iframe"
          >
            <img alt="404" src={project2} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Video</small>
              <i className="fa fa-video-camera" />
            </div>
          </Link>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all","illustration"]'
        >
          <Link
            to="/"
            title="Duis Eu Eros Viverra"
            className="lightbox"
          >
            <img alt="404" src={project3} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </Link>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "media"]'
        >
          <Link
            to="/"
            className="ajax-page-load"
          >
            <img alt="404" src={project4} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Media</small>
              <i className="fa fa-file-text-o" />
            </div>
          </Link>
        </figure>
        <figure
          className="item shuffle-item filtered"
          data-groups='["all", "illustration"]'
        >
          <Link
            to="/"
            title="Aliquam Condimentum Magna Rhoncus"
            className="lightbox"
          >
            <img alt="404" src={project5} />
            <div>
              <h5 className="name">Project Name</h5>
              <small>Illustration</small>
              <i className="fa fa-image" />
            </div>
          </Link>
        </figure>
      </div>
    </div>
  </section>
)

export default Portfolio
