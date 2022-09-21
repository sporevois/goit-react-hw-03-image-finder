import { Component } from "react";

export default class Searchbar extends Component{
    
    state = {
        querry: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { querry } = this.state;
        this.props.onSubmit({ querry });
        this.setState({
            querry: ''
        })
    }

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { querry } = this.state;
        const { handleInput, handleSubmit } = this;
        return(
            <header className="searchbar">
              <form className="form" onSubmit = {handleSubmit}>
                <button type="submit" className="button">
                  <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name = "querry"
                    value = {querry}
                    onInput={handleInput}
                />
              </form>
            </header>
        )
    }
}