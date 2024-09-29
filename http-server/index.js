const http = require('http');
const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

// Parse command line arguments
const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

let homeContent = '';
let projectContent = '';
let registrationContent = '';

fs.readFile(path.join(__dirname, 'home.html'), (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile(path.join(__dirname, 'project.html'), (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile(path.join(__dirname, 'registration.html'), (err, registration) => {
  if (err) {
    throw err;
  }
  registrationContent = registration;
});

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(homeContent);
    } else if (req.url === '/project') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(projectContent);
    } else if (req.url === '/registration') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(registrationContent);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});