const concatenate = (strings, splitOperator = " ") =>{
  const charElements = strings.filter(c => (typeof c) === 'string');
  const constracteString = charElements.join([splitOperator]);
  return constracteString;
};
module.exports = {
  concatenate
};