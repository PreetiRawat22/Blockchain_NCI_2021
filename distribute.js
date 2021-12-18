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
    console.log(addresses);
    let ownerBalance = await contract.getBalance(ownerAddress);
    let ownerBalBigNo = new BigNumber(ownerBalance);
    console.log(`total balance is ${ownerBalBigNo}`);
    let tokenSymbol = await contract.getSymbolInformation();
    let fivePercent = ownerBalBigNo.div(5);
    console.log(`five percent is ${fivePercent}`);

    let totalNumberOfAddress= addresses.length;
    console.log(`number of addresses are ${totalNumberOfAddress}`);

    let amountToDistribute = fivePercent.div(totalNumberOfAddress);
    console.log(`${amountToDistribute}`);
    for(looper =0; looper<totalNumberOfAddress; looper++)
    {
        console.log(`${addresses[looper]}: ${amountToDistribute}`);
        let response = await method.transferToken(addresses[looper], amountToDistribute);
    }

}
distributeTokens();
//module.exports={distributeTokens}