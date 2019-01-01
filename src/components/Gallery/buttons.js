import React from 'react';
import { Consumer } from '../Context';
import ColorPicker from '../common/colorPicker';

const Buttons = () => {
  return (
    <Consumer>
      { ({ showImages, actions }) => {
          return ( 
            <div className="btn-container">

              { showImages ?
                <button 
                  className="btn btn-header"
                  onClick={actions.returnToTags}
                >Return To Tags
                </button>
              : <React.Fragment>
                  <button 
                    className="btn btn-header"
                    onClick={actions.getNewTags}
                  >More Topics
                  </button>
                  <ColorPicker />
                </React.Fragment>
              }

            </div>
           );
      }}
    </Consumer>
  );
}
 
export default Buttons;