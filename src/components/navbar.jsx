import React from 'react'

export default function Navbar(){
  return (
    <div className="container-fluid py-5 shadow-sm mb-5">
      <div className="row align-items-center">
        <div className="col-sm-9">
          <p><i className="fas fa-laptop-code"> Jazzmine Jimenez </i> / Software Developer</p>
        </div>
        <div className="col-sm-3 d-flex justify-content-evenly">
          <a className="pe-3 text-decoration-none" href="#">Home</a>
          <a className="pe-3 text-decoration-none" href="#">Experience</a>
          <a className="pe-3 text-decoration-none" href="#">Projects</a>
          <a className="btn btn-outline-dark me-3 mb-3 px-4"
            href="https://drive.google.com/file/d/1m7KQcjew_TO1aL0IQUB8_ImKce5Z53As/view?usp=sharing"
            role="button" target="_blank" >
            Resume
          </a>
        </div>
      </div>
    </div>
  )
}
