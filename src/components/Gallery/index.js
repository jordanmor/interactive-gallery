import React from 'react';
import { Consumer } from '../Context';
import GalleryItem from './galleryItem';
import Tag from './tag';
import Search from './search';


const Gallery = () => {

  return (
    <Consumer>
      { context => {
        return (
          <div className="content">
            <ul className="photo-list">
              <li className="photo-header">
                <span>Transform Gallery</span>
                <Search />
                { context.showImages ?
                  <button 
                    className="btn btn-header"
                    onClick={context.actions.returnToTags}
                  >Return To Tags
                  </button>
                : <button 
                    className="btn btn-header"
                    onClick={context.actions.getNewTags}
                  >More Topics
                  </button>
                }
              </li>

              {context.showImages ?
                context.images.map(image => 
                  <GalleryItem 
                    key={image.id} 
                    image={image} 
                  /> 
                )
              : context.tags.map( tag => 
                  <Tag 
                    key={tag.id}
                    tag={tag.word}
                    getImages={context.actions.getImages}
                  />
                )
              }
            </ul>
          </div>
        );
      }}
    </Consumer>
   );
}
 
export default Gallery;