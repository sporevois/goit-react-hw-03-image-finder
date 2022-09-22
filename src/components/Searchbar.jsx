import { Component } from "react";

export default class Searchbar extends Component{
    
    state = {
        searchQuerry: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchQuerry } = this.state;
        if (searchQuerry.trim() === '') {
            alert('Please enter something to searh querry');
            return;
        }
        this.props.onSubmit(searchQuerry);
        this.resetInput();
    }

    handleInput = (event) => {
        this.setState({ searchQuerry: event.currentTarget.value.toLowerCase() });
    }

    resetInput() {
        this.setState({
            searchQuerry: ""
        })
    }

    render() {
        const { searchQuerry } = this.state;
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
                    name = "searchQuerry"
                    value = {searchQuerry}
                    onInput={handleInput}
                />
              </form>
            </header>
        )
    }
}