import { Component } from "react";
import * as API from '../services/api';
import Searchbar from "./Searchbar"
// import ImageGellary from "./ImageGallery";



export class App extends Component {

  state = {
    searchQuerry: "",
    gallery: [],
    page: 1,
    error: null,
    isLoading: false
  }

  componentDidUpdate(_, prevState) {
    const { page, searchQuerry } = this.state;
    if ( (searchQuerry && prevState.searchQuerry !== searchQuerry) || prevState.page !== page ) {
      this.getImages(searchQuerry, page);
      }
  }

  getImages = async (searchQuerry, page) => {
    this.setState({isLoading: true});
    try {
      const images = await API.fetchImages(searchQuerry, page);
      console.log(images)
      
      this.setState(({gallery}) => ({
        gallery: [...gallery, ...images]
      }));
      if(images.length === 0) {
        alert("Not find. Please, enter another request");
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({isLoading: false});
    }
  }

  handleSubmit = querry => {
    this.setState({ searchQuerry: querry });
  }

  render() {
    const { handleSubmit } = this;
    return (
      <div>
        <Searchbar onSubmit={handleSubmit} />
      </div>
    )
  }
}

