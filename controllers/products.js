import productServiceFactory from '../models/product-service';

let productService = productServiceFactory({});

function getProduct(req, res) {
    let id = req.params.id;
    productService.getProduct(id, function (product) {
        /**
         * render a single product
         */
        res.render('view', {product: product});
    });
}

function buyProduct(req, res) {
    let id = req.params.id;
    productService.getProduct(id, function () {
        /**
         * render success msg after buying a product
         */
        res.json({success: true, text: "Product " + id + " successfully bought"});
    });
}

function listProducts(req, res) {
    productService.getProducts(function (products) {
        /**
         * render the products list
         */
        res.render('list', {products: products});
    });
}


export default {getProduct, buyProduct, listProducts}

