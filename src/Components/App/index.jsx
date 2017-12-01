import React, { Component } from 'react';
import '../App/App.css';
import Home from '../Home';
import About from '../About';
import Search from '../Search';
import Submit from '../Submit';
import Versus from '../Versus';
import Game from '../Game';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: 'Are you hungry? Hi hungry, Im Dad',
      dadBase : []
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

  randomJoke = () => {
    let promise = axios.get('https://dadjokes-server.herokuapp.com/jokelist')
    promise.then((response) => {
      var pickRandomJoke = response.data[Math.floor(Math.random()*response.data.length)];
      this.setState({
        joke : pickRandomJoke.joke
      },()=> {
        // console.log(this.state.joke)
      })
    })
  
  }

  render() {

    return (
      <div className="fluid-container">

        <nav className="navbar navbar-default" id="navbar">
          <div className="container-fluid">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" id="logo-style" to='/'>DadJokes</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav" id="link-style">
                <li><Link to='/'>HOME</Link></li>

                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">VERSUS<span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to='/versus'>INSTRUCTIONS</Link></li>
                    <li><Link to='/game'>BATTLE</Link></li>
                  </ul>
                </li>
                <li><Link to='/search'>SEARCH</Link></li>
                <li><Link to='/submit'>SUBMIT</Link></li>
                <li><Link to='/about'> ABOUT</Link></li>
              </ul>
            </div>
          </div>
        </nav>

       <Switch>
          <Route exact path="/" render={()=> <Home 
                                                randomJoke={this.randomJoke}
                                                joke={this.state.joke}
                                              />} />
          <Route path="/versus" component={Versus} />
          <Route path="/submit" component={Submit} />
          <Route exact path="/search" render={()=> <Search 
                                                      dadBase={this.state.dadBase}/>} />
          <Route path="/about" component={About} />
          <Route path="/game" component={Game} />
                                             
        </Switch>

        <footer>
          <div className="container text-center">
            <p className="footer-links">DadJokes</p>
          </div>
        </footer>
    </div>
    );
  }
}

export default App;
