# Diamond in the Rough (Google Hackathon 23)

A no-code tool to quickly create and deploy smart contracts to the blockchain. We used AppSheet, GCP, an Express server, Solidity, and Ethereum to develop our project.

### Authors:

-   [Andrew Kim](https://www.linkedin.com/in/ahkim3/)
-   [Caleb Alexander](https://www.linkedin.com/in/student-caleb-alexander/)
-   [Sengdao Inthavong](https://www.linkedin.com/in/sengdao-inthavong/)
-   [Sebastian Gluszak](https://www.linkedin.com/in/sebastiangluszak/)

### [⧉ View our frontend on Google AppSheet](https://www.appsheet.com/start/3f5953e5-4265-4f0b-8853-7b523b6b2407)

[⧉ Link to presentation about this project](https://docs.google.com/presentation/d/1XK0-fwrsbcD1GnM9GglqR-h3aq18DZ2b263rN91W2Bs/edit?usp=sharing)

### Prerequisites

-   node v18.16.1
-   npm v9.5.1
-   Alchemy account
-   Metamask account with testing ETH
-   Google AppSheet account

## Client Setup Instructions

1. Modify our [Google AppSheet template](https://www.appsheet.com/start/3f5953e5-4265-4f0b-8853-7b523b6b2407) to your use case
2. Happy congratulating!

## Server Setup Instructions

1. Clone this repo
2. Enter into `diamond` directory
3. Run `npm i`
4. Create a file named `.env` that contains the following information (only fill in the first three and last two variables):

    ```
    API_URL = "REPLACE"
    PRIVATE_KEY = "REPLACE"
    RECEIVER_ID = "REPLACE"
    AMOUNT = ""
    DURATION = ""
    APPLICATION_ACCESS_KEY = "REPLACE"
    APP_ID = "REPLACE"
    ```

    To do this, setup an Alchemy account and create an App. Also, setup a Metamask account that contains some amount of Ether (0.01 ETH to get testing ETH). For the APPLICATION_ACCESS_KEY and APP_ID, grab that information from AppSheet.

5. Execute `sudo sh -c 'node /path/to/directory/google-hackathon-23/diamond/server.js'`
