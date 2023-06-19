import React from 'react'
import './Skills.css';
import js from '../images/js.png'
import html from '../images/html.png'
import css from '../images/css.png'
import reactpic from '../images/reactpic.png'

export default function Skills() {
    return (
        <div className='worksection secondsection'>
            {/*<div className="">*/}
            <div className='worksec'>
                <br /><br />
                <span className="text-gray">Last Updated : June</span>
                <h1>Skills</h1>

                <div className="box">
                    <div className="verticle">
                        <img src={html} className="image-top" alt="html-img" />
                        <div className="verticle-title">
                            HTML
                        </div>
                        <div className="verticle-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="verticle">
                        <img src={css} className="image-top" alt="css-img" />
                        <div className="verticle-title">
                            CSS
                        </div>
                        <div className="verticle-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="verticle">
                        <img src={js} className="image-top" alt="js-img" />
                        <div className="verticle-title">
                            JavaScript
                        </div>
                        <div className="verticle-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div className="verticle">
                        <img src={reactpic} className="image-top" alt="react-img" />
                        <div className="verticle-title">
                            ReactJs
                        </div>
                        <div className="verticle-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>

                </div>
                {/*</div>*/}
            </div>

        </div>
    )
}
