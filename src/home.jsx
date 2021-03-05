import React from 'react'

export default function Home () {
  return (
    header()
  )
}

const header = () => {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-9">
          <p><i className="fas fa-laptop-code"> Jazzmine Jimenez </i> / Software Developer</p>
        </div>
        <div className="col-3 d-flex justify-content-evenly">
          <a href="#">Home</a>
          <a href="#">Experience</a>
          <a href="#">Projects</a>
        </div>
      </div>

    </div>
  )
}
