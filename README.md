# Diamond in the Rough (Google Hackathon 23)

### Authors:

-   [Andrew Kim](https://www.linkedin.com/in/ahkim3/)
-   [Caleb Alexander](https://www.linkedin.com/in/student-caleb-alexander/)
-   [Sengdao Inthavong](https://www.linkedin.com/in/sengdao-inthavong/)
-   [Sebastian Gluszak](https://www.linkedin.com/in/sebastiangluszak/)

### [⧉ View our frontend on Google AppSheet](https://google.com)

[⧉ Link to presentation about this project](https://docs.google.com/presentation/d/1XK0-fwrsbcD1GnM9GglqR-h3aq18DZ2b263rN91W2Bs/edit?usp=sharing)

### Prerequisites

-   node v18.16.1
-   npm v9.5.1
-   Alchemy account
-   Metamask account with testing ETH
-   Google AppSheet account

## Client Setup Instructions

1. Modify our [Google AppSheet template](https://google.com) to your use case

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
