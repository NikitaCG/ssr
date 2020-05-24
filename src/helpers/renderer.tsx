import React from 'react';
import { renderToString } from 'react-dom/server';

import { Home } from 'client/Components/Home';

export const renderer = (): string => {
  const content = renderToString(<Home />);

  return (`
    <html>
    <head>
      <meta charset='utf-8'>
      <meta http-equiv='X-UA-Compatible' content='IE=edge'>
      <title>Home page</title>
      <meta name='viewport' content='width=device-width, initial-scale=1'>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `);
};