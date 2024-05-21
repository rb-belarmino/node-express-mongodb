import http from "http";

const PORT = process.env.PORT || 3000;

const routes = {
  "/": "Hello World, friend\n",
  "/authors": "Authors routes",
  "/books": "Books routes",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url] || "404 Not Found");
});

server.listen(PORT, () => {
  console.log("Server running at http://localhost:3000/");
});
