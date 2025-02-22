import React from "react";

const About = () => {
  return (
    <section id="about" className="p-5">
      <div className="container">
        <h2>
          <b>About Me</b>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="sticky-image">
              <img
                src="/img.png"
                alt="Picture"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-md-8">
            <h3>
              <b>Contact Information</b>
            </h3>
            <ul>
              <li>Phone Number: 09558791528</li>
              <li>Email: injelikaaa@gmail.com</li>
              <li>Fb Acc: Angelica Santos</li>
            </ul>
            <h3>
              <b>Education</b>
            </h3>
            <ul>
              <li>Holy Infant Academy - Junior High School (2016-2020)</li>
              <li>Lyceum of Alabang - Senior High School (2020-2022)</li>
              <li>Lyceum of Alabang - College</li>
            </ul>
            <h3>
              <b>Technical Skills</b>
            </h3>
            <ul>
              <li>Programming Languages: Python, VB.NET, PHP, HTML, CSS</li>
              <li>Database Management: SQL, Microsoft Access</li>
              <li>Web Development: HTML, CSS, PHP</li>
              <li>Microsoft Office Suite: Excel, Word, Access</li>
            </ul>
            <h3>
              <b>Soft Skills</b>
            </h3>
            <ul>
              <li>Communication skills</li>
              <li>Ability to work effectively in a team environment</li>
              <li>
                Leadership experience with the ability to motivate and guide
                others
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
