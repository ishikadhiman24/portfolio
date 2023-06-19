import React from 'react';
import './Home.css';
import ishika from '../images/ishika.jpg'
import About from './About';



export default function Home(props) {
  return (
    <>
      <div className="homebox"  >
        <img src={ishika} className="profile-img" alt="profile-img" />
        <p className='homename' style={{color : props.mode==='dark'?'white':'black'}}>Ishika Dhiman</p>
        <p className='homequote'>I am a student at Thapar,India.</p>
        <div className="button">
        <button class='btn  btn-primary mx-1'>
          Portfolio
        </button>
          <button className="btn  btn-primary mx-1" >
            Connect
          </button>
        </div>

      </div>
      <div className="horizontal-line"  style={{backgroundColor:props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>
        <hr />
      </div>
      <div className="row"  style={{backgroundColor:props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>
        <div className="col col-lg-4">
          <h5>About me</h5>
        </div>
        <div className="col col-lg-8">
          <p className='about'>
            I am a student of computer Science with Business Systems at Thapar Institute of Engineering and Technology. I am from Faridabad.
            I specialize in web development, coding. I am always striving to learn and grow more as a person and
            I do take myself too seriously and I tend to overthink :) .
          </p>
          <p className="about">
            I am passionate of adventuring and exploring more in the field of software
          </p>
          <a href='../public/readmore.html'>Read More</a>
          <p>.</p>
          <About />
        </div>
        
      </div>
    </>

  )
}
