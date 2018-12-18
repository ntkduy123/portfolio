import React from "react";

const Resume = () => (
  <section className="pt-page pt-page-3 pt-page-current" data-id="resume">
    <div className="section-title-block">
      <h2 className="section-title">Resume</h2>
      <h5 className="section-description">1 Years of Experience</h5>
    </div>
    <div className="row">
      <div className="col-sm-6 col-md-4 subpage-block">
        <div className="block-title">
          <h3>Education</h3>
        </div>
        <div className="timeline">
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">2013</h5>
            <h4 className="event-name">Computer Science</h4>
            <span className="event-description">University of Technology</span>
            <p>
              4 years of studying in computer science field with many subjects
              such as Algorithm, Database and Networking.
            </p>
          </div>
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">2010</h5>
            <h4 className="event-name">High school</h4>
            <span className="event-description">
              High school for the gifted
            </span>
            <p>
              Learn basic math, physics and chemical etc, 2nd prize math
              competition.
            </p>
          </div>
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">2006</h5>
            <h4 className="event-name">Secondary school</h4>
            <span className="event-description">
              Nguyen Van Phu secondary school
            </span>
            <p>
              Learn basic math, physics and chemical etc, 2nd prize math
              competition.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 subpage-block">
        <div className="block-title">
          <h3>Experience</h3>
        </div>
        <div className="timeline">
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">Oct 2018 - Current</h5>
            <h4 className="event-name">Junior Software Engineer</h4>
            <span className="event-description">Zalora</span>
            <p>
              Develop OMS (Order Management System), a system that helps
              managing Zalora's warehouse.
            </p>
          </div>
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">March 2018 - Aug 2018</h5>
            <h4 className="event-name">Junior Software Engineer</h4>
            <span className="event-description">Adnovum Vietnam LLC</span>
            <p>
              An application based on Activiti helps to embedd Business Process
              Management into applications more easier with advanced process
              design tools.
            </p>
          </div>
          {/* Single event */}
          <div className="timeline-event te-primary">
            <h5 className="event-date">May 2017 - Oct 2017</h5>
            <h4 className="event-name">Jelldesk Application</h4>
            <span className="event-description">Freelancer</span>
            <p>
              An application allows agents to engage customers over websites by
              creating a personal connection with customers looking for support.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-md-4 subpage-block">
        <div className="block-title">
          <h3>Coding Skills</h3>
        </div>
        <div className="skills-info">
          <h4>HML5</h4>
          <div className="skill-container">
            <div className="skill-percentage skill-4" />
          </div>
          <h4>CSS3</h4>
          <div className="skill-container">
            <div className="skill-percentage skill-5" />
          </div>
          <h4>Javascript</h4>
          <div className="skill-container">
            <div className="skill-percentage skill-6" />
          </div>
          <h4>Java</h4>
          <div className="skill-container">
            <div className="skill-percentage skill-6" />
          </div>
          <h4>Python</h4>
          <div className="skill-container">
            <div className="skill-percentage skill-7" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 col-md-12">
        <div className="download-cv-block">
          <a className="button" href="#" target="_blank">
            Download CV
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Resume;
