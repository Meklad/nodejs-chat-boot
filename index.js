const express = require("express"), app = express()

console.log("Server is activate")

app.get("/", (req, res) => {
	res.send("<h1>Welcome To Node.js Chat Boot</h1>");
});

app.listen(5000)