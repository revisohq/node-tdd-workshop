const concatenate = (strings) =>{
  const charElements = strings.filter(c => (typeof c) === 'string');
  const constracteString = charElements.join([" "]);
  return constracteString;
};
module.exports = {
  concatenate
};