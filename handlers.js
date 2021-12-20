let contract = require("./contract.js");
let method = require("./method.js");
let distribute = require('./distribute.js');
const express = require("express");
// A web server is created and port 8080 is assigned for communication.
const app = express();
app.use(express.json())
const port = 8080;
//urls are added to find symbol, to do transfer of the token.
app.get('/symbol', async(reques, response)=>{
    response.send(await contract.getSymbolInformation())
});
app.post('/transfer', async(request, response) => {
    let account_to = request.body.account_to;
    let amount = response.body.amount;

    response.send(await method.transferToken(account_to, amount));
})
//url to distribute tokens
app.get('/distribute', async(request, response) => {
    response.send(await distribute.distributeTokens());
})
app.listen(port, ()=> console.log(`listening on port ${port}`));
