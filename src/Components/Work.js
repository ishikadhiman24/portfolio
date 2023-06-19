import React from 'react'
import './Work.css';
import dps from '../images/dps.png'
import thapar from '../images/thapar.png'

export default function Work() {
    return (
        <div className='worksection secondsection'>
            {/*<div className="">*/}
            <div className='worksec'>
                <br /><br />
                <span className="text-gray">Last Updated : June</span>
                <h1>Education</h1>

                <div className="box">
                    <div className="verticle">
                    <img src={dps} className="image-top" alt="dps-img" />
                        <div className="verticle-title">
                            Matriculation
                        </div>
                        <div className="verticle-desc">
                            <p>Delhi Public School,Faridabad</p>
                            <p>Percentage-98%</p>
                        </div>
                    </div>
                    <div className="verticle">
                        <img src={dps} className="image-top" alt="dps-img" />
                        <div className="verticle-title">
                            Intermediate
                        </div>
                        <div className="verticle-desc">
                            <p>Delhi Public School,Faridabad</p>
                            <p>Percentage-96.6%</p>
                        </div>
                    </div>
                    <div className="verticle">
                        <img src={thapar} className="image-top" alt="dps-img" />
                        <div className="verticle-title">
                            B.E
                        </div>
                        <div className="verticle-desc">
                            <p>Thapar Institute of Engineering and Technology</p>
                            <p>CGPA-8.07</p>
                        </div>
                    </div>

                </div>
           {/*</div>*/} 
            </div>
                
        </div>
    )
}
