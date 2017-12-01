import React from 'react'
import './home.css'

class Home extends React.Component {
    render() {
        return (
                <div>
                  
                    <div className="fluid-container" id="jb-wrapper">
                   
                        <div className="jumbotron text-center" id="jb-word">
                        <h1>{this.props.joke} <a href="http://www.twitter.com"><img src="./images/twitter.svg" alt="tweet" style={{ height: '40px' }} /></a></h1>
                        <button
                            id="random-button"
                            className="btn btn-primary btn-lg"
                            onClick={this.props.randomJoke}>random</button>
                        </div>
                   
                    </div>
                
                    <div 
                        id="intro-wrap"
                        className="container text-center">
                        <div className="intro-info">
                        <img src="./images/father.svg" alt="dad" style={{height:'200px'}} />
                        <h1>dad joke</h1>
                        <h2>noun: dad joke; plural noun: dad jokes</h2>
                        <p>"Dad joke" is a pejorative term used to describe a corny or predictable joke, typically a pun. Generally inoffensive, dad jokes are traditionally told by fathers among family, either with sincere humorous intent, or to intentionally provoke a negative reaction to its "dagginess". Many dad jokes may be considered anti-jokes, deriving humour from an intentionally unfunny punchline."</p>
                        </div>
                    </div>

                    <div id="feature-wrap" className="fluid-container">
                        <div className="container text-center">
                            <div className="row">
                            <h1 className="header-title">Features</h1>
                            
                                <div id="feature-style" className="col-md-4 col-sm-12">
                                    <img height="140px" src="./images/computer.svg" alt="computer" />
                                    <h2>Joke Generator</h2>
                                    <p>Generate a random dad joke from our data-base for your entertainment</p>
                                </div>
                                
                                <div id="feature-style" className="col-md-4 col-sm-12">
                                    <img height="140px" src="./images/germs.svg" alt="serch" />
                                    <h2>Search & Submit</h2>
                                <p>Search a joke through our dad joke data base or submit your joke to be a part of our data base</p>
                                    
                                </div>

                                <div id="feature-style" className="col-md-4 col-sm-12">
                                    <img height="140px" src="./images/game.svg" alt="game"/>
                                    <h2>Versus Mode</h2>
                                    <p>Play with friends & family, our very one dad jokes battle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        )
    }
}

export default Home;