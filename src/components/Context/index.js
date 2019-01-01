import React, { Component } from 'react';
import axios from 'axios';

const GalleryContext = React.createContext();

export class Provider extends Component {
  state = { 
    images: [],
    tags: [],
    bgColor: 'bg-color-1',
    showImages: false
  }

  componentDidMount() {
    this.getRandomWords();
  }

  getRandomWords = async() => {
    const wordnikApiKey = process.env.REACT_APP_WORDNIK_APIKEY;
    const response = await axios.get(`https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=5000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=-1&limit=10&api_key=${wordnikApiKey}`);
    if(response.status === 200) {
      const { data } = response;
      this.setState({ tags: data })
    } else {
      return;
    }
  }

  getImages = async(tag) => {
    const apiKey = process.env.REACT_APP_FLICKR_APIKEY;
    const { data } = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=12&format=json&nojsoncallback=1`);
    const images = data.photos.photo.slice(0, 10);
    this.setState({ images, showImages: true });
  }

  returnToTags = () => {
    this.setState({ showImages: false });
  }

  getNewTags = () => {
    this.getRandomWords();
  }

  changeBgColor = bgColor => {
    this.setState({ bgColor });
  }

  performSearch = input => {
    this.getImages(input);
  }

  render() { 
    return ( 
      <GalleryContext.Provider value={{
        images: this.state.images,
        tags: this.state.tags,
        bgColor: this.state.bgColor,
        showImages: this.state.showImages,
        actions: {
          performSearch: this.performSearch,
          getImages: this.getImages,
          returnToTags: this.returnToTags,
          getNewTags: this.getNewTags,
          changeBgColor: this.changeBgColor
        }
      }}>
      { this.props.children }
      </GalleryContext.Provider>
     );
  }
}

export const Consumer = GalleryContext.Consumer;