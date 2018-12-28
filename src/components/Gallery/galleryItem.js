import React from 'react';

const GalleryItem = ({ image }) => {

  const backgroundImage = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  const styles = { backgroundImage: `url(${backgroundImage})`};

  return (
    <li style={styles}></li>
   );
}
 
export default GalleryItem;