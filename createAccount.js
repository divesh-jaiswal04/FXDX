
// // // const web3 = new Web3('https://base-mainnet.g.alchemy.com/v2/ZGdGp7oECJieu8BV7vx-3sBrmPAO-uZl');
// // // const toAddress = '0x0a2af931effd34b81ebcc57e3d3c9b1e1de1c9ce';


const { Web3 } = require("web3");

const web3 = new Web3(
  "https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG"
);

const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";
const privateKey = "";
const toAddress = "0xE6C5f05C415126E6b81FCc3619f65Db2fCAd58D0";


const generateFunctionCallData = async (functionName, paramTypes, params) => {
  const encodedParams = await web3.eth.abi
    .encodeParameters(paramTypes, params)
    .substr(2);
  const functionSignature = await web3.eth.abi.encodeFunctionSignature(
    `${functionName}(${paramTypes.join(",")})`
  );
  const functionCallData = functionSignature + encodedParams;
  return functionCallData;
};

const main = async () => {
  const nonce = await web3.eth.getTransactionCount(fromAddress);
  console.log("Nonce:", nonce);

  const gasPrice = await web3.eth.getGasPrice();
  console.log("Gas Price:", gasPrice);

  const createAccount = "0x9dca362f";

  const tx = {
    nonce: nonce,
    to: toAddress,
    data: createAccount,
    gas: 250_000,
    gasPrice: gasPrice,
    // value: web3.utils.toWei("0.001", "ether"),
    
  };

  console.log("Transaction object:", tx);

  try {
    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    console.log("Signed Transaction:", signedTx);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("Transaction receipt:", receipt);
  } catch (err) {
    console.error("Error in transaction process:", err);
  }
};

main();

