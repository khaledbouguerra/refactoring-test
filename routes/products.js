let express = require('express');
import {isAuth} from '../lib/middleware'
import productCtrl from '../controllers/products';

export default function load() {
    const router = express.Router();

    router.get('/view/:id', isAuth, function (req, res) {
        /** get Product by id */

        productCtrl.getProduct(req, res);

    });

    router.get('/cart/:id', isAuth, function (req, res) {
        /** buy a product*/

        productCtrl.buyProduct(req, res)
    });

    router.get('/products/list', function (req, res) {
        /** list products*/

        productCtrl.listProducts(req, res)
    });

    return router;
}
