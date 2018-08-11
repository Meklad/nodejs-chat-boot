const express = require("express")
const app = express();
const bodyParser = require('body-parser')

console.log("Server is activate")

app.use(bodyParser.json())

app.get("/", (req, res) => {
	res.send("<h1>Welcome To Node.js Chat Boot</h1>")
});

app.get("/facebook-webhook", (req, res) => {
    let challenge = req.query['hub.challenge']
    res.send(challenge)
});

app.post("/facebook-webhook", (req, res) => {
	let messageBody = req.body
    console.log(messageBody)

	res.sendStatus(200)
});

app.listen(5000)