let inputRegex = /[a-z]+|[^a-z]+/gi

function ConvertHandler() {
  this.getNum = function(input) {
    // return all matched with regex in array
    let result = input.match(inputRegex)[0];
    if (!result || /^[a-z]+$/i.test(result)) {
      return 1;
    }
    // handle the fraction
    if (result.includes('/')) {
      const values = result.split('/');
      // allow only one slash for valid fraction
      if (values.length !== 2) {
        return 'invalid number';
      }
      result = parseFloat((parseFloat(values[0]) / parseFloat(values[1])).toFixed(5));
    } else {
      result = parseFloat(result);
    }
    return result;
  };
  
  this.getUnit = function(input) {
    const validUnits = ['gal', 'l', 'mi', 'km', 'lbs', 'kg'];
    //normalizing to find in map in lowercase
    let result = input.match(inputRegex)[1];
    if (!result) return 'invalid unit';
    //lowercase exception for L
    let resultLower = result.toLowerCase();
    if (!validUnits.includes(resultLower))  return 'invalid unit';
    return resultLower === 'l' ? 'L' : resultLower;
  };
  
  this.getReturnUnit = function(initUnit) {
    const unitMap = {
      gal: 'L',
      L: 'gal',
      mi: 'km',
      km: 'mi',
      lbs: 'kg',
      kg: 'lbs'
    };
    return unitMap[initUnit];
  };

  this.spellOutUnit = function(unit) {
    const spellMap = {
      gal: 'gallons',
      L: 'liters',
      mi: 'miles',
      km: 'kilometers',
      lbs: 'pounds',
      kg: 'kilograms'
    };
    const normalizedUnit = unit.toLowerCase() === 'l' ? 'L' : unit.toLowerCase();
    return spellMap[normalizedUnit];
  };
  
  this.convert = function(initNum, initUnit) {

    const conversionRates = {
      gal: 3.78541,
      L: 1 / 3.78541,
      lbs: 0.453592,
      kg: 1 / 0.453592,
      mi: 1.60934,
      km: 1 / 1.60934
    };
    const rate = conversionRates[initUnit];
    if (!rate) return 'invalid input';
    const result = initNum * rate;
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' +  returnNum+ ' ' + this.spellOutUnit(returnUnit)
    return result;
  };
  
}

module.exports = ConvertHandler;
