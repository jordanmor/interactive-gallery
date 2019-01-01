import React from 'react';

const Image = ({ image }) => {
  const backgroundImage = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`;
  const styles = { backgroundImage: `url(${backgroundImage})`};

  return (
    <li className="photo-container">
      <div className="photo" style={styles}> </div>
    </li>
   );
}
 
export default Image;