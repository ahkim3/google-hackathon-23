var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/add", function (req, res) {
    // Store GET params
    process.env.RECEIVER_ID = req.query.receiverid;
    process.env.AMOUNT = req.query.amount;
    process.env.DURATION = req.query.duration;

    // Run batch script
    const child_process = require("child_process");
    const command = "npx hardhat run scripts/deploy.js --network goerli";
    const output = child_process.execSync(command);
    console.log(output);

    res.send("GET Request Received");
});

app.listen(80);
