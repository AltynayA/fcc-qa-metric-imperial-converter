'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get( (req,res)=> {
    var input = req.query.input;
    var initialNum = convertHandler.getNum(input);
    var initialUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initialNum,initialUnit);
    var returnUnit = convertHandler.getReturnUnit(initialUnit);
    var toString = convertHandler.toString(initialNum,initialUnit,returnNum,returnUnit);
    let responseObject = {}
    responseObject['initNum'] = initialNumNum
    responseObject['initUnit'] = initialUnit
    responseObject['returnNum'] = returnNum
    responseObject['returnUnit'] = returnUnit
    responseObject['string'] = toString
    res.json(responseObject)
  });
};
