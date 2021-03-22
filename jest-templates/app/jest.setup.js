const axios = require('axios')

module.exports = async () => {
  // Make sure the app is dead before awaiting for it:
  await new Promise(r => setTimeout(r, 100));

  // Await my app to be running:
  let shouldTry = true;
  while (shouldTry) {
    try {
      await axios.get('http://localhost:6173/healthz');
      shouldTry = false;
    } catch (err) {
      console.log('App not yet ready')
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // Setup other stuff....
}