const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, './project.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

const server2 = http.createServer((req, res) => {
    if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, './'), (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
}
);



const PORT = process.env.PORT || 5000;

server.listen(PORT, () => 
    console.log(`Server running on port ${PORT}`
));
