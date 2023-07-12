var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello world!");
});

app.get("/add", function (req, res) {
    // Store GET params
    // console.log("GET params\n");
    // console.log(req.query.receiverid);
    // console.log(req.query.amount);
    // console.log(req.query.duration);

    process.env.RECEIVER_ID = req.query.receiverid.toString();
    process.env.AMOUNT = req.query.amount;
    process.env.DURATION = req.query.duration;

    const {API_URL, PRIVATE_KEY, RECEIVER_ID, AMOUNT, DURATION} = process.env;

    // console.log("map\n");
    // console.log(RECEIVER_ID);
    // console.log(AMOUNT);
    // console.log(DURATION);

    // Run commands
    const child_process = require("child_process");
    const command = "npx hardhat compile";
    const output = child_process.exec(command);
    // console.log(output);

    const command2 = "npx hardhat run scripts/deploy.js --network goerli";
    const output2 = child_process.exec(command2);
    console.log(output2);

    res.send("GET Request Received");
});

app.listen(80);
