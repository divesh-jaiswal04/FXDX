
// // // const web3 = new Web3('https://base-mainnet.g.alchemy.com/v2/ZGdGp7oECJieu8BV7vx-3sBrmPAO-uZl');
// // // const toAddress = '0x0a2af931effd34b81ebcc57e3d3c9b1e1de1c9ce';


// const { Web3 } = require("web3");

// const web3 = new Web3(
//   "https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG"
// );

// const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";
// const privateKey =
//   "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
// const toAddress = "0xE6C5f05C415126E6b81FCc3619f65Db2fCAd58D0";

// const main = async () => {
//   const nonce = await web3.eth.getTransactionCount(fromAddress);
//   console.log("Nonce:", nonce);

//   const gasPrice = await web3.eth.getGasPrice();
//   console.log("Gas Price:", gasPrice);

//   const tx = {
//     nonce: nonce,
//     to: toAddress,
//     data: "0x9f978860",
//     gas: 250_000,
//     gasPrice: gasPrice,
//   };

//   console.log("Transaction object:", tx);

//   try {
//     const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
//     console.log("Signed Transaction:", signedTx);

//     const receipt = await web3.eth.sendSignedTransaction(
//       signedTx.rawTransaction
//     );
//     console.log("Transaction receipt:", receipt);
//   } catch (err) {
//     console.error("Error in transaction process:", err);
//   }
// };

// main();

const { Web3 } = require("web3");

const web3 = new Web3(
  "https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG"
);

const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";
const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
const toAddress = "0xE6C5f05C415126E6b81FCc3619f65Db2fCAd58D0";
// const ercAddress = "0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6";

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
    "grantPermission",
    ["uint128", "bytes32", "address"],
    [
      "170141183460469231731687303715884106105",
      "0x41444d494e000000000000000000000000000000000000000000000000000000",
      "0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6",
    ]
  );
  console.log(calldata);

  // const calldata = await generateFunctionCallData(
  //   "commitOrder",
  //   ['uint128', 'uint128', 'int128', 'uint128', 'uint256', 'bytes32', 'address'],
  //   [
  //     '100',
  //     '170141183460469231731687303715884106095',
  //     '-170141183460469231731687303715884105727',
  //     '0',
  //     '20988711000000000000000',
  //     '0x4b57454e54410000000000000000000000000000000000000000000000000000',
  //     "0x3bD64247d879AF879e6f6e62F81430186391Bdb8",
  //   ]
  // );
  // console.log("calldata",calldata);

  // const multicall = await generateFunctionCallData(
  //   "muticall",
  //   ['bytes[]'],
  //   [
  //     ["0x28f61b100000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000008000000000000000000000000000016fffffffffffffffffffffffffffffffff800000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000471cce0ab8b0dbd80004b57454e544100000000000000000000000000000000000000000000000000000000000000000000000000003bd64247d879af879e6f6e62f81430186391bdb8"],
  //   ]
  // );
  // console.log("multicall",multicall);



  // const commitorder = "0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e428f61b100000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000008000000000000000000000000000016f00000000000000000000000000000000000000000000000000049e57d635400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ca65c9d01f05d004ad4b57454e544100000000000000000000000000000000000000000000000000000000000000000000000000003bd64247d879af879e6f6e62f81430186391bdb800000000000000000000000000000000000000000000000000000000"
  
  // const closeorder = "0xac9650d800000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e428f61b100000000000000000000000000000000000000000000000000000000000000064000000000000000000000000000000008000000000000000000000000000016ffffffffffffffffffffffffffffffffffffffffffffffffffffb61a829cac00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c62c14611f01df57f24b57454e544100000000000000000000000000000000000000000000000000000000000000000000000000003bd64247d879af879e6f6e62f81430186391bdb800000000000000000000000000000000000000000000000000000000"
  const createAccount = "0x9dca362f";

  const tx = {
    nonce: nonce,
    to: toAddress,
    // to: ercAddress,
    data: calldata,
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

