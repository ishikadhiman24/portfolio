import React from 'react'
import './Footer.css';

export default function Footer(props) {
    return (
        <div className='footersection' style={{backgroundColor:props.mode==='dark'?'black':'white' , color : props.mode==='dark'?'white':'black'}}>

            <div class="footer">
                <div class="footer-first">
                    <h3>Ishika's Portfolio</h3>
                </div>
                <div class="footer-second">

                </div>
                <div class="footer-third">
                <ul>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div class="footer-fourth">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div class="footer-rights" >
                Copyright © ishikaportfolio.com  | All rights reserved
            </div>

        </div>
    )
}
