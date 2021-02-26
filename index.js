
class FirstArgumentTypeError extends Error {}
class SecondArgumentTypeError extends Error {}

const sum = (a, b) => {
  if ((typeof a) !== 'number'){
    throw new FirstArgumentTypeError('Value a is not a number!')
  }

  if((typeof b) !== 'number'){
    throw new SecondArgumentTypeError('Value b is not a number!')
  }

  return a+b;
};

module.exports = {
  sum,
  FirstArgumentTypeError,
  SecondArgumentTypeError
};
