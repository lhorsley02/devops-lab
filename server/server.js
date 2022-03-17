const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());


// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'df4dcda0f68e4f6e90bb200fddb39f56',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error);

}

try {
    errFunction();
} catch (error) {
    rollbar.critical("This is a critical error and must be fixed immediately!")
}

try {
    errFunction();
} catch (error) {
    rollbar.warning("This is a warning concerning your code.")
}


// Middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});