const increaseNumber = function(number) {
  return parseFloat(number) + 1;
};

const decreaseNumber = function(number) {
  return parseFloat(number) - 1;
};

const plus = function (a, b) {
  return parseFloat(a) + parseFloat(b);
}

const calculate = function (a, b, c) {
  return parseFloat(a) * parseFloat(b) * parseFloat(c);
}

module.exports = {
  increaseNumber,
  decreaseNumber,
  calculate,
  plus
}
