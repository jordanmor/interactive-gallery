import React from 'react';

const Tag = ({ tag, getImages, bgColor }) => {

  return (
    <li className="photo-container">
      <div className={`tag ${bgColor}`} onClick={()=> getImages(tag)}>
        <p>{tag}</p>
      </div>
    </li>
   );
}
 
export default Tag;