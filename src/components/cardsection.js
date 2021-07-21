import React from 'react'
import Card from './card'

const CardSection = () => {
  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
        <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img
        src="https://i.pinimg.com/736x/05/79/5a/05795a16b647118ffb6629390e995adb.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Orange</h5>
        <p className="card-text">
        There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration in some form, 
         by injected humour, or randomised words which don't look even 
         slightly believable.
        </p>
        <a href="#" className="btn btn-success">Pear</a>
      </div>
    </div>
  </div>
  <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img
        src="https://i.dlpng.com/static/png/6978959_preview.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Guava</h5>
        <p className="card-text">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected
       humour, or randomised words which don't look even slightly believable.
        </p>
        <a href="#" className="btn btn-success">Apple</a>
      </div>
    </div>
  </div>
  <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img
        src="https://assets.reflections.live/1618044188890-knbhmi3s.jpeg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Mango</h5>
        <p className="card-text">
        There are many variations of passages of Lorem Ipsum available, 
        but the majority have suffered alteration in some form, by injected
       humour, or randomised words which don't look even slightly believable.
        </p>
        <a href="#" className="btn btn-success">Pineapple</a>
      </div>
    </div>
  </div>
        </div>
      </div>
    </section>
  )
}
export default CardSection