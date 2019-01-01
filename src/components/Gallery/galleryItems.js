import React from 'react';
import { Consumer } from '../Context';
import Image from './image';
import Tag from './tag';

const GalleryItems = () => {

  return (
    <Consumer>
      { ({ showImages, images, tags, bgColor, actions }) => {
        return (
          showImages ?
            images.map(image => 
              <Image 
                key={image.id} 
                image={image} 
              /> 
            )
          : tags.map( tag => 
              <Tag 
                key={tag.id}
                tag={tag.word}
                getImages={actions.getImages}
                bgColor={bgColor}
              />
            )
        );
        }
      }
    </Consumer>
   );
}
 
export default GalleryItems;