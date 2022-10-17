import React from "react";
import {renderToString} from "react-dom/server";
import {Store} from '@reduxjs/toolkit'
import { Request } from "express";
import {StaticRouter} from 'react-router-dom/server';
import {Routes} from "../client/Routes";
import { Provider } from "react-redux";
import { RouteRender } from "./RouteRender";
import serializeJavascript from "serialize-javascript";


/* its converting react to string (fetching all the Html from JSX or TSX) and sending to client using express  */

export const Renderer = (req :Request , store : Store ) : string => {

    const _RenderToString = renderToString (
        <Provider store={store}>
        <StaticRouter location={req.path}>
           <div>
            {RouteRender(Routes)}
           </div>
        </StaticRouter>
        </Provider>
    );

    return `
    <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="main.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>

<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

       <title>Document</title>
   </head>
   <body>
       <div id="root">${_RenderToString}</div>
       <script src="bundle.js"></script>
       <script>
       window.INITIAL_STATE = ${ serializeJavascript(store.getState())}
       </script>
       <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
   </body>
   </html>
     
    `;

}
