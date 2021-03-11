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
          <div className="shadow card-container">
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
          <p>about me</p>
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
