var firebase = require("firebase");
const config = require("./secret");

firebase.initializeApp(config);

export default firebase;
