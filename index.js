const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      const home = fs.readFileSync("pages/index.html", "utf-8");
      res.end(home);
      break;
    case "/about":
      const about = fs.readFileSync("pages/about.html", "utf-8");
      res.end(about);
      break;
    case "/contact":
      const contact = fs.readFileSync("pages/contact.html", "utf-8");
      res.end(contact);
      break;
    default:
      res.end("Not Found...");
  }
});
server.listen(process.env.PORT || 5000, () => {
  console.log("Server is running.");
});
