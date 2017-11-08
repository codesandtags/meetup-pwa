/****
 * Express configuration
 ****/
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Our Express app
const app = express();

// Serves up static files from the dist folder.
// Anything in dist/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'dist')));

// Takes the raw request and turns them into usable properties on req.body
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

// Send every request to the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Set port and starts the application
app.set('port', process.env.PORT || 7777);

const server = app.listen(app.get('port'), () =>{
  console.log(`Express running → PORT ${server.address().port}`);
});
