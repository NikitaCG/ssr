import { Request } from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Router from 'client/router';

export const renderer = (req: Request): string => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <Router />
    </StaticRouter>
  );

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