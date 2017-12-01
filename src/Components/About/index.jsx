import React from 'react'
import './about.css';

class About extends React.Component {
    render() {
        return (
            <div 
                id="about-wrap"
                className ="container text-center">
                <h1 className="header-title-about">About </h1>
                <div
                    id="about-row" 
                    className="row">

                    <div 
                        id="about-info-wrap"
                        className="col-md-4 col-sm-4 text-center">
                        <img src="./images/about.svg" alt="info" style={{ height: '140px' }}  />
                        <h2>About</h2>
                        <p>Marco is an aspiring Web Developer specialising in Front-End Development</p>
                    </div>

                    <div 
                        id="about-info-wrap"
                        className="col-md-4 col-sm-4 text-center">
                        <img src="./images/connect.svg" alt="info" style={{height:'140px'}} />
                        <h2>Connect</h2>
                        <p><a href="mailto:marco.moral89@gmail.com">marco.moral89@gmail.com</a></p>
                        <p>+1-604-338-3051</p>
                        <p><a href="https://www.linkedin.com/in/marcomoral/">www.linkedin.com/in/marcomoral</a></p>
                    </div>

                    <div 
                        id="about-info-wrap"
                        className="col-md-4 col-sm-4 text-center">
                        <img src="./images/git.svg" alt="info" style={{ height: '140px' }}  />
                        <h2>GitHub</h2>
                        <p><a href="https://github.com/marcomoral89">www.github.com/marcomoral89</a></p>
                    </div>

                </div>
            </div>
        )
    }
}

export default About;