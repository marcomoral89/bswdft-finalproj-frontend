import React from 'react';
import axios from 'axios';
import './submit.css';

class form extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            joke: ''
        }
        
    }

    submitJoke = (form) => {
        axios.post('https://dadjokes-server.herokuapp.com/jokelist', {
            name : this.state.title,
            joke : this.state.joke
        })
        .then(res => {
            
        })
        alert(this.state.title + ' ' + this.state.joke)
    }

    render() {
        
       
        return (
            <div 
                id="submit-wrap"
                className ="fluid-container text-center">
            <h1>Submit a joke</h1>
                
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.submitJoke(this.titleInput.value + this.jokeInput.value)
                        this.titleInput.value = '';
                        this.jokeInput.value = '';
                    }}
                    
                    >
                    <div className="form-group">
                    <span className="text-title">Title: </span> <input 
                                id="title-input"
                                placeholder="Forrest Gump's Password"
                                ref={(self) => this.titleInput = self}
                                onChange={() => {
                                    this.setState({
                                        title : this.titleInput.value
                                    })
                                }}
                                /> 
                    </div>

                    <div className="form-group">
                    <span className="text-title">Joke: </span> <textarea 
                            id="text-input"
                            placeholder="What's Forrest Gump's password? 1forrest1"
                            ref={(self) => this.jokeInput = self}
                            onChange={() => {
                                this.setState({
                                    joke : this.jokeInput.value
                                })
                            }}
                            /> 
                    </div>
                    
                    <button 
                        id="submit-button"
                        className="btn-primary btn-md"
                        type="submit"
                        disabled={this.state.joke === '' && this.state.title === ''} 
                        >submit</button>
                </form>
            </div>
        )
    }
}

export default form;