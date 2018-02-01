var express = require('express');
import { isAuth } from '../lib/middleware'

export default function load(productService) {
  const router =  express.Router();

  router.get('/view/:id', isAuth, function (req, res) {
      var id = req.params.id;

      productService.getProduct(id, function(product) {
        console.log(product);
        res.render('view', { product: product });
      });
  });

  router.get('/cart/:id', isAuth, function (req, res) {
      var id = req.params.id;

      productService.getProduct(id, function(product) {
        console.log(product);
        res.json({ success: true, text: "Product " + id + " successfully bought" });
      });
  });

  router.get('/products/list', function(req, res) {
      productService.getProducts(function(products) {
        res.render('list', {products: products});
      });
  });

  return router;
}
