import React from 'react'

export default function Home () {
  return (
    <>
    <div>
      {header()}
    </div>
      <div className="container main-container">
        <div className="row align-middle gx-5">
        <div className="col-5">
          <div className="shadow card-container my-4">
            <div className="card-background">
              <div className="row">
                <img
                    className="rounded-circle w-75 p-5 mx-auto d-block"
                  src="/images/about-me.jpg"
                  alt="image of me, Jazzmine." />
              </div>
              <div className="row text-center">
                <div className="col-12 fw-bolder name-text">
                  <h4>Jazzmine</h4>
                  <h4>Jimenez</h4>
                </div>
              </div>
              <hr className="colored-line my-4" />
              <div className="row text-center">
                  <div className="col-12 font-monospace">
                  <p>Software Developer</p>
                </div>
              </div>
            </div>
            <div className="row text-center">
                <div className="col-12">
                  <a className="btn fs-4" href="mailto:jazzmine.m25@gmail.com" role="button">
                  <i className="fas fa-envelope"></i>
                </a>
                  <a className="btn fs-4" href="https://www.linkedin.com/in/jazzmine-jimenez/" target="_blank" role="button">
                  <i className="fab fa-linkedin"></i>
                </a>
                  <a className="btn fs-4" href="https://github.com/Jazzmine-Jimenez" target="_blank" role="button">
                  <i className="fab fa-github"></i>
                </a>
                  <a className="btn fs-4" href="https://drive.google.com/file/d/1xTbeHmWCy8U8smHypAzyIn391CqoDIFZ/view" target="_blank" role="button">
                  <i className="fas fa-file-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
          <h3 className="fs-1 fw-bold py-3">Hello, </h3>
          <h4 className="pb-3">I am a software developer with experience with &nbsp;
            <i className="fab fa-html5"></i> &nbsp;
            <i className="fab fa-css3-alt"></i> &nbsp;
            <i className="fab fa-js-square"></i> &nbsp;
            <i className="fab fa-react"></i> &nbsp;
            <i className="fab fa-node"></i> &nbsp;
          </h4>

          <a className="btn btn-outline-dark me-3 mb-3 px-4" href="#" role="button">Resume</a>
          <a className="btn btn-outline-dark mb-3 px-4" href="#" role="button">Projects</a>

          <p className="fst-italic">I was introduced to coding about 8 years ago and immediately fell in love.</p>

          <p> I have a B.S. in mathematics because I love how difficult math is, the problem solving,
            the logic and how accomplished I feel when I complete a problem.
            I was able to find everything I love about math in coding,
            but the big difference you are able to create something that others can use.
            </p>

            <p> After taking that C++ course I considered switching majors but being a first generation
            college student decided it was more important for me to complete my degree in 4 years. </p>

            <p>Looking back now I wish I would have taken the extra time, but here I am in the middle
            of a career change as recent coding bootcamp grad making my
            dream of coding for a living a reality. </p>

        </div>
      </div>
    </div>
</>
  )
}

const header = () => {
  return (
    <div className="container-fluid py-5">
      <div className="row align-items-center">
        <div className="col-9">
          <p><i className="fas fa-laptop-code"> Jazzmine Jimenez </i> / Software Developer</p>
        </div>
        <div className="col-3 d-flex justify-content-evenly">
          <a className="pe-3 text-decoration-none" href="#">Home</a>
          <a className="pe-3 text-decoration-none" href="#">Experience</a>
          <a className="pe-3 text-decoration-none" href="#">Projects</a>
        </div>
      </div>

    </div>
  )
}
