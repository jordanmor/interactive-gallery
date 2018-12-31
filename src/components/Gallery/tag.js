import React from 'react';

const Tag = ({ tag, getImages }) => {

  return (
    <li className="photo-container">
      <div className="tag" onClick={()=> getImages(tag)}>
        <p>{tag}</p>
      </div>
    </li>
   );
}
 
export default Tag;