import React from 'react'

export default function Home () {
  return (
    <>
    <div>
      {header()}
    </div>
      <div className="container main-container">
      <div className="row">
        <div className="col-5">
          <div className="shadow card-container my-4">
            <div className="card-background">
              <div className="row">
                <img
                  className="rounded-circle w-auto p-5"
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
              <div className="col-12 ">
                  <a className="btn fs-3" href="mailto:jazzmine.m25@gmail.com" role="button">
                  <i class="fas fa-envelope"></i>
                </a>
                  <a className="btn fs-3" href="https://www.linkedin.com/in/jazzmine-jimenez/" target="_blank" role="button">
                  <i class="fab fa-linkedin"></i>
                </a>
                  <a className="btn fs-3" href="https://github.com/Jazzmine-Jimenez" target="_blank" role="button">
                  <i class="fab fa-github"></i>
                </a>
                  <a className="btn fs-3" href="https://drive.google.com/file/d/1xTbeHmWCy8U8smHypAzyIn391CqoDIFZ/view" target="_blank" role="button">
                  <i class="fas fa-file-download"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-7">
            <h3 className="fs-1 fw-bold py-3">Hello</h3>
          <h4 className="pb-3">heres a little bit about me.</h4>
          <p>I was introduced to coding about 8 years ago and immediately fell in love.</p>
          <p> I have a B.S. in mathematics because I love how difficult math is, the problem solving,
            the logic and how accomplished I feel when I complete a problem.
            I was able to find everything I love about math in coding,
            but the big difference you are able to create something that others can use.
            After taking that C++ course I considered switching majors but being a first generation
            college student decided it was more important for me to complete my degree in 4 years.
            Looking back now I wish I would have taken the extra time, but here I am in the middle
            of a career change as recent coding bootcamp grad making my
            dream of coding for a living a reality.
          </p>
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
          <a className="pe-3" href="#">Home</a>
          <a className="pe-3" href="#">Experience</a>
          <a className="pe-3" href="#">Projects</a>
        </div>
      </div>

    </div>
  )
}
