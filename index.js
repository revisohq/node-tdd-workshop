const sum = (a, b) => {
  if((typeof a) !== 'number'){
    throw new Error('Value a is not a number!')
  }
  return a+b;
};

module.exports = {
  sum,
};
