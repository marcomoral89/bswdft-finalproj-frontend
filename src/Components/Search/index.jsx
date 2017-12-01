import React from 'react';
import axios from 'axios';
import './search.css';

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            inputValue: '',
            dadBase: [],
            filteredJokes : []
        }
    }

    componentDidMount() {
        let promise = axios.get('https://dadjokes-server.herokuapp.com/jokelist')
        promise.then((response) => {
            this.setState({
                dadBase: response.data,
                filteredJokes : response.data
            }, () => {
                // console.log(this.state.dadBase)
            })
        })
    }
  
    searchJoke = (e) => {
        let filteringJokes =[];
        let searchInput = this.searchInput.value.toLowerCase();
        for(let i=0; i < this.state.dadBase.length; i++) {
            if(this.state.dadBase[i].joke.match(searchInput)) {
                filteringJokes.push(this.state.dadBase[i])
            } 
        } 
        this.setState({
            filteredJokes : filteringJokes
        },() => {
            console.log(this.state.filteredJokes)
        })
    }
    
    render() {

        let jokesJSX = this.state.filteredJokes.map((joke, i) => {
            return (
                <li 
                    key={i}
                    className="form-control"
                    style={{height:'80%'}}
                    >
                <h4>{joke.joke}</h4>
                </li>
            )
        })
        return (
            
            <div 
                id="search-wrap"
                className="container">
                <form 
                    id="form-div"
                    onSubmit={(e) => {
                    e.preventDefault();
                    this.searchJoke(this.searchInput.value)
                    this.searchInput.value = "";
                }}>
                
                    <div className="input-group">
                        <input type="text" 
                                placeholder="search keyword: Beer, Pirate, etc."
                                className="form-control"
                                ref={(self) => this.searchInput = self}
                                onChange={() => {
                                    this.setState({
                                        inputValue: this.searchInput.value
                                    })
                                }}/>
                            <div className="input-group-btn">
                                <button 
                                    className="btn btn-default" 
                                    type="submit"
                                    disabled={this.state.inputValue === ""}>
                                    <span className=" glyphicon glyphicon-search"></span>
                                </button>
                            </div>
                    </div>
                </form>

                    <ul className="ul-style">
                        {jokesJSX}
                    </ul>

            </div>

        )
    }
}

export default Search;
