
const { Web3 } = require("web3");

const web3 = new Web3(
  "https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG"
);

const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";
const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
const toAddress = "0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6";


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

  const calldata = await generateFunctionCallData(
    "commitOrder",
    ['uint128', 'uint128', 'int128', 'uint128', 'uint256', 'bytes32', 'address'],
    [
      '100',
      '170141183460469231731687303715884106105',
      '200000000000000',
      '0',
      '20988711000000000000000',
      '0x4b57454e54410000000000000000000000000000000000000000000000000000',
      "0x3bD64247d879AF879e6f6e62F81430186391Bdb8",
    ]
  );

  console.log("calldata", calldata);

    const multicall = await generateFunctionCallData(
      "muticall",
      ['bytes[]'],
      [
        [calldata],
      ]
    );

    console.log("multicall",multicall);


  const tx = {
    nonce: nonce,
    to: toAddress,
    data: multicall,
    gas: 250_000,
    gasPrice: gasPrice,
    value: web3.utils.toWei("0.0001", "ether"),
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