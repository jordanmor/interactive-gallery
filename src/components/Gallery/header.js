import React from 'react';
import Buttons from './buttons';
import Search from './search';

const Header = () => {
  return ( 
    <li className="photo-header">
      <span>Transform Gallery</span>
      <Search />
      <Buttons />
    </li>
   );
}
 
export default Header;