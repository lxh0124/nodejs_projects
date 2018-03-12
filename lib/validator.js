const isDigital = function(str) {
  var patrn = /^[0-9]*$/;

    if (patrn.exec(str) == null || str == "") {
        return false
    } else {
        return true
    }
}


const isNull = function(str) {
  return str == undefined || str == '';
}


module.exports = {
  isDigital, 
  isNull
}
