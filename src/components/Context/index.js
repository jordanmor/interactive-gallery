import React, { Component } from 'react';
import axios from 'axios';

const GalleryContext = React.createContext();

export class Provider extends Component {
  state = { 
    images: []
  }

  componentDidMount() {
    this.getImages('dogs');
  }

  getImages = async(tag) => {
    const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
    const { data } = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=14&format=json&nojsoncallback=1`);
    const images = data.photos.photo.slice(0, 11);
    this.setState({ images });
  }

  performSearch = input => {
    this.getImages(input);
  }

  render() { 
    return ( 
      <GalleryContext.Provider value={{
        images: this.state.images,
        actions: {
          performSearch: this.performSearch
        }
      }}>
      { this.props.children }
      </GalleryContext.Provider>
     );
  }
}

export const Consumer = GalleryContext.Consumer;