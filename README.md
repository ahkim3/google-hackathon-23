# Diamond in the Rough (Google Hackathon 23)

Andrew Kim, Caleb Alexander, Sengdao Inthavong, Sebastian Gluszak

[⧉ Link to presentation about this project](https://docs.google.com/presentation/d/1XK0-fwrsbcD1GnM9GglqR-h3aq18DZ2b263rN91W2Bs/edit?usp=sharing)

### Prerequisites

-   node v18.16.1
-   npm v9.5.1
-   Alchemy account
-   Metamask account with testing ETH

## Server Setup Instructions

1. Clone this repo
2. Enter into `diamond` directory
3. Run `npm i`
4. Create a file named `.env` that contains the following information (only fill in the first three variables):

    ```
    API_URL = "REPLACE"
    PRIVATE_KEY = "REPLACE"
    RECEIVER_ID = "REPLACE"
    AMOUNT = ""
    DURATION = ""
    ```

    To do this, setup an Alchemy account and create an App. Also, setup a Metamask account that contains some amount of Ether (0.01 ETH to get testing ETH).

5. Execute `sudo sh -c 'node /path/to/directory/google-hackathon-23/diamond/server.js'`
