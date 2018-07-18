"use strict";
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import http from 'http'

import routeProducts from './routes/products';
import routeIndex from './routes/index';
import productServiceFactory from './models/product-service';
import config from './config/env';
/**
 * import and Helmet for security reasons , which allow XSS Protection,
 * Prevent Clickingjacking using X-Frame-Options
 * Enforcing all connections to be HTTPS, Setting a Context-Security-Policy header
 */
import helmet from 'helmet';

let app = express();

const server = http.createServer(app);
// let port = process.env.PORT || 3001;
/**
 * centralize the configs by changing the above sentence with the below sentence
 */
let port = config.port;
let productService = productServiceFactory({});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.set("view engine", "twig");
app.use(express.static('views'));
app.use(helmet());

/**
 * render the products list page
 */
app.get('/', routeIndex(productService));
app.use('/products', routeProducts(productService));

app.close = function () {
    server.close();
};

app.listen(() => {
    server.listen(port, () => {
        console.log("Express server listening on port " + config.port + " in " + config.env + " mode");
    });
});

export default app;
