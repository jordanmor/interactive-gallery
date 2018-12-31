import React, { Component } from 'react';
import axios from 'axios';

const GalleryContext = React.createContext();

export class Provider extends Component {
  state = { 
    images: []
  }

  componentDidMount() {
    this.getImages();
  }

  getRandomWord = async() => {
    const wordnikApiKey = process.env.REACT_APP_WORDNIK_APIKEY;
    const response = await axios.get(`https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&api_key=${wordnikApiKey}`);
    if(response.status === 200) {
      const { data } = response;
      return data.word;
    } else {
      return;
    }
  }

  getImages = async() => {
    const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
    const tag = await this.getRandomWord();
    console.log(tag);
    const { data } = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=14&format=json&nojsoncallback=1`);
    const images = data.photos.photo.slice(0, 10);
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