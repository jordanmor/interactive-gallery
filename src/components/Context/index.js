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
    const { data } = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`);
    this.setState({ images: data.photos.photo});
  }

  render() { 
    return ( 
      <GalleryContext.Provider value={{
        images: this.state.images
      }}>
      { this.props.children }
      </GalleryContext.Provider>
     );
  }
}

export const Consumer = GalleryContext.Consumer;