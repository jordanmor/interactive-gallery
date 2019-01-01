import React from 'react';
import { Consumer } from '../Context';

const ColorPicker = () => {
  return ( 
    <Consumer>
      { ({ actions }) => {
        return (
          <div className="color-picker">
            { ['1', '2', '3', '4', '5'].map( num =>
                <button 
                  key={num}
                  className={`btn-color bg-color-${num}`}
                  onClick={() => actions.changeBgColor(`bg-color-${num}`)}
                >
                </button>
            )}
          </div>
        );
      }}
    </Consumer>
  )
}
 
export default ColorPicker;