// this is similar to doing:
// import express from 'express';
const express = require("express");

// i'm creating a new server instance
// node lets you create as many servers as you want
// this is extremely powerful!
// ..
// ..
// but here i am only creating a single instance.
const app = express();

// register static 'middleware'
const folderInWhichToLook = 'public';
const staticMiddleware = express.static(folderInWhichToLook)
app.use(staticMiddleware);

// i changed my route because i want my `index.html` to be server from the root
app.get('/api/json', (req, res) => {
  const json = {};
  json.message = 'Hello World';
  json.otherMessage = 'Foo Bar Baz';
  json.numberOfClicks = numberOfClicks

  res.json(json);
});
let numberOfClicks = 0
app.post('/api/json', (req,res) =>{
  numberOfClicks++;
  res.redirect('/')
})

// start the server and take port 3000
app.listen(
	// I am now actually running the server on port 3000
	3000,
	// callback that runs when the server successfully starts
	() => console.log(`Now listening on localhost:3000`)
);
