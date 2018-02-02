'use strict';
import sqlite3 from 'sqlite3'

class ProductService {

  constructor(parameters) {
    this.parameters = parameters;
  }

  init() {
    this.sqlite3 = require('sqlite3').verbose();
    this.db = new sqlite3.Database('database.sqlite');
  }

  getProducts(callback) {
    this.init();

    this.db.all("SELECT * FROM products", (err, rows) => {
        callback(rows);
        this.db.close();
    });
  }

  getProduct(id, callback) {
    this.init();
    this.db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
    //this.db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
        console.log(row);
        callback(row);
        this.db.close();
    });

  }
}

export default function load(parameters) {
  return new ProductService(parameters)
}
