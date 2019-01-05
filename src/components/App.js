import React from 'react';
import { Consumer } from './Context';
import Gallery from './Gallery';
import Loader from './common/loader';

const App = () => {
  return (
    <Consumer>
      {({ loading }) =>  {
        return (
          <div className="container">
            { loading
              ?
                <Loader />
              :
                <Gallery />
            }
          </div>
        );
      }}
    </Consumer>
  );
}

export default App;
