import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle]=useState({
        color: 'black',
        backgroundColor:'white'
    })

    const [btntext,setBtnText]= useState("Enable Dark Mode")

     const toggleStyle=()=>
     {
        if(myStyle.color==='black')
        {
            setMyStyle(
                {
                    color: 'white',
                    backgroundColor:'black',
                    border : '1px solid white'
                })
                setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
     }
     

    return (
        <div className="container" style={myStyle} >
            <h5>About</h5>
            <div className="accordion" style={myStyle} id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Location
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Address.</strong> 
                            <p>Hostel Q, Thapar Institute of Engineering and Technolgy</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            LinkedIn
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Connect with me on LinkedIn.</strong> 
                            <a href='https://www.linkedin.com/in/ishika-dhiman-58a02825a'>https://www.linkedin.com/in/ishika-dhiman-58a02825a</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed"  style={myStyle}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Email & Contact
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Here's my Email Id.</strong> 
                            <p>ishikadhiman166@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
