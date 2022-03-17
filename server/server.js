const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// include and initialize the rollbar library with your access token
var _rollbarConfig = {
    accessToken: "167a1751bdfe4ddca42422598f09ae88",
    captureUncaught: true,
    captureUnhandledRejections: true,
    payload: {
        environment: "production"
    }
};

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')




try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error);

}


// Middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use(rollbar.errorHandler());

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`We vibin on port ${port}`);
});