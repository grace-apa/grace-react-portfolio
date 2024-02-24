import React from "react";

const Resume = () => {
  return (
    <div className="customDiv">
      <div className="container-fluid text-center" id="introAbout">
        <div className="row">
          <div class="col-md-6 order-md-first">
            <h2>EDUCATION</h2>
            <br />
            <h3>Bachelor of Science (B.S.) - Pharmaceutical Sciences </h3>
            <h5>Sep 2010 - Jul 2013</h5>
            <h5>University of Greenwich, London</h5>
            <br />
            <h2>EXPERIENCE</h2>
            <br />
            <h5>
              <strong>Sports Talent Coordinator, May 2023 - Jan 2024</strong>
            </h5>
            <h5>Gateway Sports & Entertainment, London</h5>
            <p class="cvspec">
              - Assist in the coordination and management of talent
              representation activities, including contract negotiations,
              scheduling, and logistics.
              <p class="cvspec">
                - Suppor t the founder in identifying and cultivating
                relationships with athletes and industry stakeholders.
              </p>
              <p class="cvspec">
                - Facilitate communication between talent, clients, and internal
                teams to ensure alignment on marketing and promotional
                activities.
              </p>
              <p class="cvspec">
                - Coordinate the execution of brand partnerships and endorsement
                deals, including liaising with sponsors and managing contractual
                obligations.
              </p>
              <p class="cvspec">
                - Assist in the development of marketing strategies and
                campaigns tailored to individual talent and client objectives.
              </p>
            </p>
          </div>
          <div className="col-md-6">
            <h2>My Skills</h2>
            <br />
            <button className="skillsButton">HTML</button>
            <button className="skillsButton">CSS</button>
            <button className="skillsButton">JavaScript</button>
            <br />
            <br />
            <button className="skillsButton">JavaScript</button>
            <button className="skillsButton">React</button>
            <button className="skillsButton">Node.js</button>
            <button className="skillsButton">Bootstrap</button>
            <br />
            <br />
            <button className="skillsButton">jQuery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
