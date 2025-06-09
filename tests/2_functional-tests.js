const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
test("Valid Unit Input Test", function() {
    var input = ['l','gal','mi','km','kg','lbs','GAL','L','MI','KM','LBS','KG'];
})
});
