import React from 'react';
import { Consumer } from '../Context';

const ColorPicker = () => {
  return ( 
    <Consumer>
      { ({ classes, actions }) => {
        return (
          <div className={`color-picker ${classes.borderColor}`}>
            { ['1', '2', '3', '4', '5'].map( num =>
                <button 
                  key={num}
                  className={`btn-theme bg-color-${num}`}
                  onClick={() => actions.changeColorClasses(num)}
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