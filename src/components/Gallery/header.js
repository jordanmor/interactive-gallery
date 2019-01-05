import React from 'react';
import { Consumer } from '../Context';
import Buttons from './buttons';
import Search from './search';

const Header = () => {
  return (
    <Consumer>
        {({ title, classes, showImages, actions }) => {
          return ( 
            <li className={`photo-header ${classes.borderColor}`}>
              <span className={`title ${classes.fontColor}`}>{title}</span>
              <Search 
                classes={classes}
                performSearch={actions.performSearch}
              />
              <Buttons 
                classes={classes}
                showImages={showImages}
                returnToTags={actions.returnToTags}
                getNewTags={actions.getNewTags}
              />
            </li>
          );
        }}
    </Consumer>
  );
}
 
export default Header;