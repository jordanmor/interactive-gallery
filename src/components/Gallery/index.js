import React from 'react';
import { Consumer } from '../Context';
import GalleryItem from './galleryItem';
import Search from './search';


const Gallery = () => {

  return (
    <Consumer>
      {({ images }) => {
        return (
          <div >
            <ul className="photo-container">
              <li className="photo-header">
                <span>Transform Gallery</span>
                <Search />
              </li>
              {images.map(image => 
                <GalleryItem 
                  key={image.id} 
                  image={image} 
                /> 
              )}
            </ul>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default Gallery;