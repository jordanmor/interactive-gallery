import React, { Component } from 'react';
import axios from 'axios';

const GalleryContext = React.createContext();

export class Provider extends Component {
  state = { 
    images: [],
    tags: [],
    title: 'Interactive Gallery',
    classes: {
      bgColor: 'bg-color-1',
      fontColor: 'font-color-1',
      borderColor: 'border-color-1',
      btnColor: 'btn-color-1'
    },
    showImages: false,
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.getRandomWords();
    this.setState({ loading: false });
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
    const { data } = await axios(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${tag}&sort=relevance&safe_search=1&per_page=10&format=json&nojsoncallback=1`);
    const images = data.photos.photo.slice(0, 10);
    this.setState({ 
      images, 
      showImages: true,
      title: tag
    });
  }

  returnToTags = () => {
    this.setState({ 
      showImages: false,
      title: 'Interactive Gallery'
    });
  }

  getNewTags = async () => {
    this.getRandomWords();
  }

  changeColorClasses = num => {
    this.setState({ 
      classes: {
        bgColor: `bg-color-${num}`,
        fontColor: `font-color-${num}`,
        borderColor: `border-color-${num}`,
        btnColor: `btn-color-${num}`
      }, 
    });
  }

  performSearch = input => {
    this.getImages(input);
  }

  render() { 
    return ( 
      <GalleryContext.Provider value={{
        images: this.state.images,
        tags: this.state.tags,
        title: this.state.title,
        classes: this.state.classes,
        showImages: this.state.showImages,
        loading: this.state.loading,
        actions: {
          performSearch: this.performSearch,
          getImages: this.getImages,
          returnToTags: this.returnToTags,
          getNewTags: this.getNewTags,
          changeColorClasses: this.changeColorClasses
        }
      }}>
      { this.props.children }
      </GalleryContext.Provider>
     );
  }
}

export const Consumer = GalleryContext.Consumer;