import React from 'react';

const Tag = ({ tag, getImages , bgColor }) => {

  const classes = `tag ${bgColor}`;

  return (
    <li className="photo-container">
      <div className={classes} onClick={()=> getImages(tag)}>
        <p>{tag}</p>
      </div>
    </li>
   );
}
 
export default Tag;