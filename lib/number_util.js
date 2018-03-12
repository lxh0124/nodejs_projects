const increase = function(number) {
  return parseFloat(number) + 1;
};

const decrease = function(number) {
  return parseFloat(number) - 1;
};

const plus = function (a, b) {
  return parseFloat(a) + parseFloat(b);
}

const calculate = function (a, b, c) {
  return parseFloat(a) * parseFloat(b) * parseFloat(c);
}

module.exports = {
  increase,
  decrease,
  calculate,
  plus
}
