import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './router';

ReactDOM.hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
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