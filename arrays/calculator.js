function Calculator() {

  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {

    let splitStr = str.split(' '),
      a = +splitStr[0],
      op = splitStr[1],
      b = +splitStr[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}
