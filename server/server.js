const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());






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