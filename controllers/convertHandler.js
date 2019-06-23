/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const regexUnits = /[a-zA-z]/
    const regexNumbers = /^\d+\.*\d*\/*\d*\.*\d*$/
    let index = input.match(regexUnits)
    if (!index) return false;
    let num = input.slice(0, index.index);
    if (!regexNumbers.test(num)) return false;
    if (num.length === 0) return 1;

    return eval(num).toFixed(5);
  };
  
  this.getUnit = function(input) {
    const regex = /[a-zA-z]/
    let index = input.match(regex)
    if (!index) return false;
    let unit = input.slice(index.index);
    if (unit !== 'gal' && unit !== 'L' && unit !== 'lbs' && unit !== 'kg' && unit !== 'mi' && unit !== 'km') return false;

    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case 'gal':
        return 'L'
      case 'L':
        return 'gal'
      case 'lbs':
        return 'kg'
      case 'kg':
        return 'lbs'
      case 'mi':
        return 'km'
      case 'km':
        return 'mi'
      default: return false
    }
  };

  // this.spellOutUnit = function(unit) {
  //   var result;
    
  //   return result;
  // };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    
    const num = eval(initNum)
    let convert
    switch (initUnit) {
      case 'gal':
        convert = num * galToL
        break;
      case 'L':
        convert = num / galToL
        break;
      case 'lbs':
        convert = num * lbsToKg
        break;
      case 'kg':
        convert =  num / lbsToKg
        break;
      case 'mi':
        convert = num * miToKm
        break;
      case 'km':
        convert = num / miToKm
        break;
      default: return false
    };
    return convert.toFixed(5);
  }

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {

    let units = {}

    switch (initUnit) {
      case 'gal':
        units.initial = 'gallons';
        units.convert = 'litres'
        break;
      case 'L':
        units.initial = 'litres';
        units.convert = 'gallons'
        break;
      case 'lbs':
        units.initial = 'pounds';
        units.convert = 'kilograms'
        break;
      case 'kg':
        units.initial = 'kilograms';
        units.convert = 'pounds'
        break;
      case 'mi':
        units.initial = 'miles';
        units.convert = 'kilometers'
        break;
      case 'km':
        units.initial = 'kilometers';
        units.convert = 'miles'
        break;
      default: return false
    };
    return `${initNum} ${units.initial} converts to ${returnNum} ${units.convert}`
  }
}

module.exports = ConvertHandler;





