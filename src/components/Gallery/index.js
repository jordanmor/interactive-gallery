import React from 'react';
import GalleryItems from './galleryItems';
import Header from './header';

const Gallery = () => {
  return (
    <div className="content">
      <ul className="photo-list">
        <Header />
        <GalleryItems />
      </ul>
    </div>
  );
}
 
export default Gallery;