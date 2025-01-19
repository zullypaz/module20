import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div> 

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/zullypaz/module_2">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Module 2"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
              A HTMl, CSS, and Javascript file that allows to connect with a cryptocurrency API  to know 
              the most updated prices.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/zullypaz/HW3-javacript-">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Random Password"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Javascript Random Password</h4>
              <p>
                A HTMl, CSS, and Javascript application that lets the user generate 
                a randon password.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://github.com/zullypaz/Module4">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Module 4"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Time Coding Quiz</h4>
              <p>
              To develop a timed coding quiz with multiple-choice questions.{" "}
              </p>
            </div>
          </div>
        </div>
        </section>
    </div>
  );
}

export default Portfolio;