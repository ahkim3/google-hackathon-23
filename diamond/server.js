var express = require("express");
var app = express();
let addressMessage = "";

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
    process.env.APPLICATION_ACCESS_KEY = req.query.APPLICATION_ACCESS_KEY;
    process.env.APP_ID = req.query.APP_ID;

    const {
        API_URL,
        PRIVATE_KEY,
        RECEIVER_ID,
        AMOUNT,
        DURATION,
        APPLICATION_ACCESS_KEY,
        APP_ID,
    } = process.env;

    // console.log("map\n");
    // console.log(RECEIVER_ID);
    // console.log(AMOUNT);
    // console.log(DURATION);

    // Run commands
    const child_process = require("child_process");
    const command = "npx hardhat compile";
    const output = child_process.exec(command);
    // console.log(output);

    const util = require("util");
    const exec = util.promisify(child_process.exec);

    async function executeCommand(command) {
        try {
            const {stdout, stderr} = await exec(command);
            addressMessage = stdout.toString();

            // Send POST request to AppSheet
            fetch(
                "POST  https://api.appsheet.com/api/v2/apps/" +
                    APP_ID +
                    "/tables/Contracts/Action?applicationAccessKey=" +
                    APPLICATION_ACCESS_KEY,
                {
                    method: "POST",
                    body: JSON.stringify({
                        ContractID: "11",
                        ManagerID: "sengdaointhavong2024@u.northwestern.edu",
                        ClientID: "sglus2@illinois.edu",
                        "Contract Status": "Completed",
                    }),
                }
            );

            // Send request
            console.log(addressMessage);
            res.send(addressMessage);

            // console.log(`Standard error: ${stderr}`);
        } catch (error) {
            // console.error(`Error: ${stdout}`);
            res.send("Error");
        }
    }

    const command2 = "npx hardhat run scripts/deploy.js --network goerli";
    executeCommand(command2);
});

app.listen(80);
