const trim = function(str){
		return str.replace(/^\s+|\s+$/g, '');
};
    
const toInt = function(str, base){
		return parseInt(str, base || 10);
}

const toFloat = function(str){
		return parseFloat(str);
}

module.exports = {
  trim, 
  toInt, 
  toFloat
}
