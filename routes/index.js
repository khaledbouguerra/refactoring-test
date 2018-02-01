'use strict';
export default function load(models) {
  return function routeIndex(req, res) {
    models.getProducts(function(products) {
      res.render('list.twig', {products: products});
    });
  };
}
