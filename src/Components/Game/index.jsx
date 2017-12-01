import React from 'react'; 
import axios from 'axios'
import './game.css';
import { Link } from 'react-router-dom'

class Game extends React.Component {
    constructor() {
    super()
        this.state = {
            dadBase : [],
            joke: '',
            life : 5
        }
    }

    componentDidMount() {
        let promise = axios.get('https://dadjokes-server.herokuapp.com/jokelist')
        promise.then((response) => {
            this.setState({
                dadBase: response.data
            }, () => {
            })
        })
    }

    counter = () => {
        let life = this.state.life
        if(life === 0) {
            return 0;
        } else {
            life --;
        }
        this.setState({
            life: life
        },()=> {
            console.log(this.state.life)
        })
    }

    randomJoke = () => {
        let promise = axios.get('https://dadjokes-server.herokuapp.com/jokelist')
        promise.then((response) => {
            // var pickRandomJoke = response.data[Math.floor(Math.random() * response.data.length)];
            // this.setState({
            //     joke: pickRandomJoke.joke,
            // }, () => {
            //     console.log(this.state.dadBase)
            // })
            var noRepeatJoke =[];
            for(let i = 0; i <= 0; i++) {
                var randomJoke = Math.floor(Math.random() * response.data.length );
                noRepeatJoke[i] = response.data[randomJoke];

                for(let j=0; j<=i-1; j++) {
                    if(noRepeatJoke[j] === noRepeatJoke[i]) {
                        i--;
                    }
                }
                this.setState({
                    joke: noRepeatJoke[i].joke
                },()=> {
                    console.log(noRepeatJoke[i]._id)
                })
            }
            

        })
    }
    
    render() {
        if(this.state.life === 0 ) {
            return(
                <div 
                    id="gameover-wrap"
                    className="fluid-container text-center">
                    <h1>Good Game</h1>
                    <button 
                        id="playagain-button"
                        className="btn btn-primary"><Link to="/versus">Play Again</Link></button>
                </div>
            )
        }
        
        return (
            <div 
                id="game-wrap"
                className="fluid-container">
                <div className="container">
                    <div className="jumbotron text-center" id="vs-jumbotron">
                        {(this.state.joke === '') ? <h2><i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
                        </h2> : <h2>{this.state.joke}</h2>}                    
                    </div>
                </div>

                <div 
                    id="button-wrap"
                    className="container text-center">
                    <button 
                        id="vs-random-button"
                        className="btn-primary btn-lg" 
                        onClick={this.randomJoke}>RANDOM JOKE
                    </button>
                </div>
                
                <div className="container">
                <div className="row">

                    <div 
                        id="button-div"
                        className="col-md-6 col-sm-12 text-center">
                        <button 
                            onClick={this.counter}
                            id="laugh-button"
                            className="btn-primary btn-lg">
                            </button>
                    </div>

                        <div
                            id="icon-div" 
                            className="col-md-6 col-sm-12 text-center">
                            <h1>Laugh Lives: </h1>
                                {(this.state.life <= 4) ? 
                                <i id="laughlife" className="fa fa-heart-o" aria-hidden="true"></i> : 
                                <i id="laughlife" className="fa fa-heart" aria-hidden="true"></i> }
                                {(this.state.life <= 3) ?
                                <i id="laughlife" className="fa fa-heart-o" aria-hidden="true"></i> :
                                <i id="laughlife" className="fa fa-heart" aria-hidden="true"></i>}
                                {(this.state.life <= 2) ?
                                <i id="laughlife" className="fa fa-heart-o" aria-hidden="true"></i> :
                                <i id="laughlife" className="fa fa-heart" aria-hidden="true"></i>}
                                {(this.state.life <= 1) ?
                                <i id="laughlife" className="fa fa-heart-o" aria-hidden="true"></i> :
                                <i id="laughlife" className="fa fa-heart" aria-hidden="true"></i>}
                                {(this.state.life <= 0) ?
                                <i id="laughlife" className="fa fa-heart-o" aria-hidden="true"></i> :
                                <i id="laughlife" className="fa fa-heart" aria-hidden="true"></i>}
                        </div>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;