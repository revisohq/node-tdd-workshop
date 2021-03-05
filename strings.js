const onlyString = input => (typeof input) === 'string'

const __concatenate = (strings, splitOperator = " ") =>{
  const charElements = strings.filter(c => (typeof c) === 'string');
  const constracteString = charElements.join([splitOperator]);
  return constracteString;
};

const concatenate = (tokens, concatOperator = " ") => {
  const strings = tokens.filter(onlyString);
  return strings.join([concatOperator]);
};

module.exports = {
  onlyString,
  concatenate
};
