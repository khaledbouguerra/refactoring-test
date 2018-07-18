'use strict';
import sqlite3 from 'sqlite3'

class ProductService {

    constructor(parameters) {
        this.parameters = parameters;
    }

    init() {
        this.sqlite3 = require('sqlite3').verbose();
        this.db = new sqlite3.Database('database.sqlite');
        /**
         * handling database initialisation error
         */
        this.db.on("error", function (error) {
            console.error("Getting an error : ", error);
        });
    }

    getProducts(callback) {
        this.init();

        this.db.all("SELECT * FROM products", (err, rows) => {
            /**
             * handle database errors in case there is any
             */
            if (err) {
                this.errorHandler(err)
            }
            callback(rows);

            this.db.close();
        });
    }

    getProduct(id, callback) {
        this.init();
        this.db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
            //this.db.get("SELECT * FROM products WHERE id = ?", [id], (err, row) => {
            /**
             * handle database errors in case there is any
             */
            console.log(row);
            if (err) {
                this.errorHandler(err)
            }
            callback(row);


            this.db.close();
        });

    }

    /**
     * simplified error handler
     * @param err
     */
    errorHandler(err) {
        console.log('this is the err', err)
    }
}

export default function load(parameters) {
    return new ProductService(parameters)
}
