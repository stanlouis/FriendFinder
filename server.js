const express = require('express')
const bodyParser = require("body-parser");
const app = express();
let htmlRoutes = require('./app/routing/htmlRoutes');

require("./app/routing/apiRoutes")(app);

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


PORT = process.env.PORT || 7500;

app.use('/', htmlRoutes);
app.use('/survey', htmlRoutes);





app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});