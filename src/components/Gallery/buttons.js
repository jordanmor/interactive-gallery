import React from 'react';
import ColorPicker from '../common/colorPicker';

const Buttons = ({ classes, showImages, returnToTags, getNewTags }) => {
  return (
    <div className="btn-container">

      { showImages ?

        <button 
          className={`btn ${classes.btnColor}`}
          onClick={returnToTags}
        >Return To Tags
        </button>

      : <React.Fragment>
          <button 
            className={`btn ${classes.btnColor}`}
            onClick={getNewTags}
          >More Topics
          </button>

          <ColorPicker />

        </React.Fragment>
      }

    </div>
  );
}
 
export default Buttons;