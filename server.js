
const jsonServer = require('json-server');
const server = jsonServer.create();

// Load the router with your db.json file
const router = jsonServer.router('db.json'); 

// Create default middlewares, but explicitly disable the static middleware.
// This prevents json-server from searching for the non-existent 'public' folder.
const middlewares = jsonServer.defaults({
  static: './public' 
});

// Use the PORT environment variable provided by Render, or 3000 for local development.
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router); // Use the router after the middlewares

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});