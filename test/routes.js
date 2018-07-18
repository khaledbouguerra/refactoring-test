let expect  = require('chai').expect;
let request = require('request');

it('Main page content', function() {
    request('http://localhost:3000' , function(error, response, body) {
        console.log(body);
        expect(body).to.equal('Hello World');
    });
});

it('Main page content', function() {
    request('http://localhost:3000' , function(error, response, body) {
        console.log(body);
        expect(body).to.equal('Hello World');
    });
});
