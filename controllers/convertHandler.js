/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
  const regex = /[a-zA-z]/
  let index = input.match(regex)
  if (!index) return false;
  let num = input.slice(0, index.index);
  if (isNaN(eval(num))) return false;

  return num;
  };
  
  this.getUnit = function(input) {
    // const regex = /[a-zA-z]/
    // const index = input.match(regex)
    // if (!index) return false;
    // index = index.index;
    // if 
    // return input.slice(0, index);
  };
  
  this.getReturnUnit = function(initUnit) {
    const regex = /[a-zA-z]/
    const index = input.match(regex)
    if (!index) return false;
  
    index = index.index;
    return input.slice(index);
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
