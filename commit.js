
const { Web3 } = require("web3");

const web3 = new Web3(
  "https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG"
);

const contractAddress = "0x118E7fb4Af3d0f87429aDf04738fB5f5b7a6Be7c";

const contractABI = [
    {
        "inputs": [
          {
            "components": [
              {
                "internalType": "uint128",
                "name": "marketId",
                "type": "uint128"
              },
              {
                "internalType": "uint128",
                "name": "accountId",
                "type": "uint128"
              },
              {
                "internalType": "int128",
                "name": "sizeDelta",
                "type": "int128"
              },
              {
                "internalType": "uint128",
                "name": "settlementStrategyId",
                "type": "uint128"
              },
              {
                "internalType": "uint256",
                "name": "acceptablePrice",
                "type": "uint256"
              },
              {
                "internalType": "bytes32",
                "name": "trackingCode",
                "type": "bytes32"
              },
              {
                "internalType": "address",
                "name": "referrer",
                "type": "address"
              }
            ],
            "internalType": "struct AsyncOrder.OrderCommitmentRequest",
            "name": "commitment",
            "type": "tuple"
          }
        ],
        "name": "commitOrder",
        "outputs": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "commitmentTime",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint128",
                    "name": "marketId",
                    "type": "uint128"
                  },
                  {
                    "internalType": "uint128",
                    "name": "accountId",
                    "type": "uint128"
                  },
                  {
                    "internalType": "int128",
                    "name": "sizeDelta",
                    "type": "int128"
                  },
                  {
                    "internalType": "uint128",
                    "name": "settlementStrategyId",
                    "type": "uint128"
                  },
                  {
                    "internalType": "uint256",
                    "name": "acceptablePrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "trackingCode",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "address",
                    "name": "referrer",
                    "type": "address"
                  }
                ],
                "internalType": "struct AsyncOrder.OrderCommitmentRequest",
                "name": "request",
                "type": "tuple"
              }
            ],
            "internalType": "struct AsyncOrder.Data",
            "name": "retOrder",
            "type": "tuple"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
      
];

const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";

const accountAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";

async function commitOrder() {
  try {
   
    const nonce = await web3.eth.getTransactionCount(accountAddress);

    // Create a transaction object
    const contract = new web3.eth.Contract(contractABI, contractAddress);
    // console.log("contract Instance =========== ",contract);
    const data = contract.methods.commitOrder(
        {
            marketId: '100',
            accountId: '170141183460469231731687303715884106101',
            sizeDelta: '-25309909639657713',
            settlementStrategyId: '0',
            acceptablePrice: '1',
            trackingCode: '0x0000000000000000000000000000000000000000000000000000000000000000',
            referrer: '0x0000000000000000000000000000000000000000',
            sender: "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8"
        }
    ).encodeABI();
    
    console.log(data);

    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 300000;

    const txObject = {
      nonce: nonce,
      gasPrice: gasPrice,
      gasLimit: gasLimit,
      to: contractAddress,
      data: data,
    };

    // Sign the transaction
    const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);

    console.log(signedTx);
    // Send the transaction
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction receipt:', receipt);
  } catch (error) {
    console.error('Error:', error);
  }
}

commitOrder();


