//https://ropsten.infura.io/v3/c4a8db5374a94057ad93e4b96193c523

const Web3= require("web3")

//to setup .env 
require('dotenv').config()

//need to capture values from .env file
infuraTokenValue = process.env.INFURA_TOKEN
contractAddress = process.env.CONTRACT_ADDRESS
ownerAddress = process.env.OWNER_ADDRESS

//infuraURL to make remote procedural call to connect with etherium node
const infuraURL="https://ropsten.infura.io/v3/c4a8db5374a94057ad93e4b96193c523";
console.log(infuraURL);
// create an instantance of web3 with infuraURL
const web3 = new Web3(infuraURL);

const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDecimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSymbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
//create an instance of contract object
const contract = new web3.eth.Contract(abi, contractAddress);
console.log("connected to contract on robsten network")

const owner=ownerAddress

//wrapper around methods of contract is created by using javascript
const getTotalSupplyOfToken= async()=>{
	let totSupply = await contract.methods.totalSupply().call();
    return totSupply;
}

//get name of currency
const getName = async() => {
    let name = await contract.methods.getName().call();
    return name
}

//get balance of account
const getBalance = async(owner) => {
    let balance = await contract.methods.balanceOf(owner).call();
    return balance;
}

//Decimal places information
const getDecimalsInformation = async() => {
    let decimals = await contract.methods.getDecimals().call();
    return decimals;
}

//Get information about the synbol of token
const getSymbolInformation = async() => {
    let symbol = await contract.methods.getSymbol().call();
    return symbol;
}

//const returnAllValues = async() => {
 //   console.log(await getTotalSupplyOfToken());
  //  console.log(await getSymbolInformation());
  //  console.log(await getName());
 //   console.log(await getDecimalsInformation());
    //console.log(await getBalance(owner));
//}
//returnAllValues();
//console.log("hello world")

module.exports={getTotalSupplyOfToken,getName,getBalance,getDecimalsInformation,getSymbolInformation}
