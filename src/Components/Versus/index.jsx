import React from 'react';
import {Link} from 'react-router-dom';
import './versus.css';

class Versus extends React.Component {
    render() {
        return (
            <div 
                id="instructions-wrap"
                className="fluid-container text-center">
                <h1>Versus Mode</h1>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <h2>Instructions</h2>
                        <ol className="instructions-style">
                            <li>
                                Two seperate devices needed
                            </li>
                            <li>
                                The goal of the game is to NOT laugh at the Dad Jokes. Player who finishes their laugh lives loses.
                            </li>
                            <li>Start the game by generating a random Dad Joke using <button className="btn btn-primary" id="random-joke-sample">RANDOM JOKE</button>

                            </li>

                            <li>
                                Press <img style={{height:'30px'}}src="./laugh-emoji.svg" alt="emoji"/> when you laugh at your oponent's joke.
                            </li>

                            <li>
                                When your laugh lives reaches 0, the game is over<br />
                            </li>
                            <li>
                                <button id="startgame" className="btn-primary"><Link to='/game'>START GAME</Link></button>
                            </li>
                        </ol>
                        
                    </div>
                    <div className="col-md-6">
                        <img src="./images/gui.png" alt="gui" className="img-responsive" id="gui"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Versus;