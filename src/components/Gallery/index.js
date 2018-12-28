import React from 'react';
import { Consumer } from '../Context';
import GalleryItem from './galleryItem';


const Gallery = () => {

  return (
    <Consumer>
      {({ images }) => {
        return (
          <div className="photo-container">
            <ul>
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