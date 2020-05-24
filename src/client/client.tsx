import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from 'client/Components/Home';

ReactDOM.hydrate(
  <Home />,
  document.getElementById('root'),
);

// if ((module).hot ){
//   (module).hot.accept('client/Components/Home', () => {
//     const { NextHome } = require('client/Components/Home');

//     ReactDOM.render(
//       <NextHome />
//       , document.getElementById('root'),
//     );
//   });
// }