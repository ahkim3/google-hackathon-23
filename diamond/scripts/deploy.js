require('dotenv').config

async function main() {
    const { API_URL, PRIVATE_KEY, RECIEVER_ID, AMOUNT, DURATION} = process.env;
    
    const manufacturingAgreement = await ethers.getContractFactory("manufacturingAgreement");
 
    // Start deployment, returning a promise that resolves to a contract object
    const manufacturing_Agreement = await manufacturingAgreement.deploy(RECIEVER_ID, AMOUNT, DURATION);
    console.log("Contract deployed to address:", manufacturing_Agreement.address);
}
 
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    }
    );
 
 