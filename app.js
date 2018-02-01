"use strict";
import express      from 'express';
import logger       from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser   from 'body-parser';
import http         from 'http'

import routeProducts from './routes/products';
import routeIndex    from './routes/index';
import productServiceFactory from './models/product-service'

let app = express();
const server = http.createServer(app);
let port = process.env.PORT || 3001;
let productService = productServiceFactory({})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine","twig");
app.use(express.static('views'));

console.log(routeIndex);
app.get('/', routeIndex(productService));
app.use('/products', routeProducts(productService));

app.close = function() {
    server.close();
}

app.listen(() => {
    server.listen(port, () => {
        console.log("Express server listening on port " + port + " in " + app.settings.env + " mode");
    });
});

export default app;
