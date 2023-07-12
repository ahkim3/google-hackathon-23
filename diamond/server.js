var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/add", function (req, res) {
    // Store GET params
    console.log(req.query.receiverid);
    console.log(req.query.amount);
    console.log(req.query.duration);

    process.env.RECEIVER_ID = req.query.receiverid;
    process.env.AMOUNT = req.query.amount;
    process.env.DURATION = req.query.duration;

    // Run commands
    const child_process = require("child_process");
    const command = "npx hardhat compile";
    const output = child_process.execSync(command);
    console.log(output);

    const command2 = "npx hardhat run scripts/deploy.js --network goerli";
    const output2 = child_process.execSync(command2);
    console.log(output2);

    res.send("GET Request Received");
});

app.listen(80);
