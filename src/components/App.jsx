import { Component } from "react";
import * as API from '../services/api';
import Searchbar from "./Searchbar/Searchbar"
import ImageGellary from "./imageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";



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
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.getImages(searchQuerry, page);
      }, 500)
      
    }
  }

  getImages = async (searchQuerry, page) => {
    try {
      const images = await API.fetchImages(searchQuerry, page);
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

  loadMoreImages = () => {
    this.setState(({page}) => {
        return {
            page: page + 1
        }
    })
  }

  handleSubmit = querry => {
    this.setState({ searchQuerry: querry });
    this.setState({ gallery:[]})
  }

  render() {
    const { gallery, isLoading } = this.state;
    const { handleSubmit, loadMoreImages } = this;
    return (
      <div style={{marginBottom:'15px'} }>
        <Searchbar onSubmit={handleSubmit} />
        <ImageGellary images={gallery} />
        {gallery.length !== 0 && <Button onClick={loadMoreImages} />}
        {isLoading && <Loader isLoading={isLoading}/>}
      </div>
    )
  }
}

