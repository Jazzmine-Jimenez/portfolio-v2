import React from 'react'

export default function Home () {
  return (
    <>
    <div>
      {header()}
    </div>
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="shadow">
            <div className="card-background">
              <div className="row">
                <img
                  className="rounded-circle w-auto p-5"
                  src="/images/about-me.jpg"
                  alt="image of me, Jazzmine." />
              </div>
              <div className="row text-center">
                <div className="col-12">
                  <h6>Jazzmine</h6>
                  <h6>Jimenez</h6>
                </div>
              </div>
              <hr className="colored-line my-4" />
              <div className="row text-center">
                <div className="col-12">
                  <p>Software Developer</p>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12">
                <p>icons</p>
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
