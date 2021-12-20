let fs = require("fs");
let BigNumber = require("big-number");

let method=require('./method.js');
let contract=require('./contract.js');

//setup the env file
require('dotenv').config()

//need to capture values from .env file
infuraTokenValue = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS
secretPrivateKey = Buffer.from(process.env.SUPER_SECRET_PRIVATE_KEY, 'hex')

const distributeTokens = async()=>{
    let addresses=fs.readFileSync('./accounts.txt', 'utf8').split('\r\n');
    let ownerBalance = await contract.getBalance(ownerAddress);
    let ownerBalBigNo = new BigNumber(ownerBalance);
    console.log(`owner balance is ${ownerBalBigNo}`);

    //get the token symbol
    let tokenSymbol = await contract.getSymbolInformation();
    console.log(`token symbol is ${tokenSymbol}`);

    //five percent of total amount
    let fivePercent = ownerBalBigNo.div(5);
    console.log(`five percent is ${fivePercent}`);

    //find out total addresses in accounts.txt (M)
    let totalNumberOfAddress= addresses.length;
    console.log(`number of addresses are ${totalNumberOfAddress}`);

    //divide 5% by M to get amountToDistribute
    let amountToDistribute = fivePercent.div(totalNumberOfAddress);
    console.log(`distribution amount per address is ${amountToDistribute}`);
    for(looper =0; looper<totalNumberOfAddress; looper++)
    {
        console.log(`goint to distribute ${tokenSymbol}, ${amountToDistribute} token goes to ${addresses[looper]}`);
        let response = await method.transferToken(addresses[looper], amountToDistribute);
    }

}

module.exports={distributeTokens}