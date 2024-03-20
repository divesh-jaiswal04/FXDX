
// const { ethers } = require('ethers');

// const provider = new ethers.providers.JsonRpcProvider("https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG");

// const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
// const wallet = new ethers.Wallet(privateKey, provider);

// const engineABI =  [
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "_perpsMarketProxy",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "_spotMarketProxy",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "_sUSDProxy",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "_pDAO",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "_usdc",
//               "type": "address"
//           },
//           {
//               "internalType": "uint128",
//               "name": "_sUSDCId",
//               "type": "uint128"
//           }
//       ],
//       "stateMutability": "nonpayable",
//       "type": "constructor"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "target",
//               "type": "address"
//           }
//       ],
//       "name": "AddressEmptyCode",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "token",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "owner",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "spender",
//               "type": "address"
//           },
//           {
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "ApprovalFailed",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "CannotExecuteOrder",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "implementation",
//               "type": "address"
//           }
//       ],
//       "name": "ERC1967InvalidImplementation",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "ERC1967NonPayable",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "FailedInnerCall",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "InsufficientAmount",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "InsufficientCredit",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "bytes4",
//               "name": "selector",
//               "type": "bytes4"
//           }
//       ],
//       "name": "InvalidConditionSelector",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "id",
//               "type": "uint128"
//           }
//       ],
//       "name": "InvalidIdSUSDC",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "InvalidNonce",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "MaxConditionSizeExceeded",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "NonUpgradeable",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "NotSupported",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "OnlyPDAO",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "SUSDZeroAddress",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "SpotMarketZeroAddress",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "token",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "from",
//               "type": "address"
//           },
//           {
//               "internalType": "address",
//               "name": "to",
//               "type": "address"
//           },
//           {
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "TransferFailed",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "USDCZeroAddress",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "UUPSUnauthorizedCallContext",
//       "type": "error"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "bytes32",
//               "name": "slot",
//               "type": "bytes32"
//           }
//       ],
//       "name": "UUPSUnsupportedProxiableUUID",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "Unauthorized",
//       "type": "error"
//   },
//   {
//       "inputs": [],
//       "name": "ZeroAddress",
//       "type": "error"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "components": [
//                   {
//                       "internalType": "uint256",
//                       "name": "settlementTime",
//                       "type": "uint256"
//                   },
//                   {
//                       "components": [
//                           {
//                               "internalType": "uint128",
//                               "name": "marketId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "accountId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "int128",
//                               "name": "sizeDelta",
//                               "type": "int128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "settlementStrategyId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint256",
//                               "name": "acceptablePrice",
//                               "type": "uint256"
//                           },
//                           {
//                               "internalType": "bytes32",
//                               "name": "trackingCode",
//                               "type": "bytes32"
//                           },
//                           {
//                               "internalType": "address",
//                               "name": "referrer",
//                               "type": "address"
//                           }
//                       ],
//                       "internalType": "struct IPerpsMarketProxy.OrderCommitmentRequest",
//                       "name": "request",
//                       "type": "tuple"
//                   }
//               ],
//               "indexed": false,
//               "internalType": "struct IPerpsMarketProxy.Data",
//               "name": "order",
//               "type": "tuple"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "synthetixFees",
//               "type": "uint256"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "executorFee",
//               "type": "uint256"
//           }
//       ],
//       "name": "ConditionalOrderExecuted",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": true,
//               "internalType": "uint128",
//               "name": "accountId",
//               "type": "uint128"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "Credited",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": true,
//               "internalType": "uint128",
//               "name": "accountId",
//               "type": "uint128"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "Debited",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": true,
//               "internalType": "uint128",
//               "name": "accountId",
//               "type": "uint128"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "word",
//               "type": "uint256"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "mask",
//               "type": "uint256"
//           }
//       ],
//       "name": "UnorderedNonceInvalidation",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": true,
//               "internalType": "address",
//               "name": "implementation",
//               "type": "address"
//           }
//       ],
//       "name": "Upgraded",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amountWrapped",
//               "type": "uint256"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amountMinted",
//               "type": "uint256"
//           }
//       ],
//       "name": "ZappedIn",
//       "type": "event"
//   },
//   {
//      "anonymous": false,
//       "inputs": [
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amountBurned",
//               "type": "uint256"
//           },
//           {
//               "indexed": false,
//               "internalType": "uint256",
//               "name": "amountUnwrapped",
//               "type": "uint256"
//           }
//       ],
//       "name": "ZappedOut",
//       "type": "event"
//   },
//   {
//       "inputs": [],
//       "name": "DOMAIN_SEPARATOR",
//       "outputs": [
//           {
//               "internalType": "bytes32",
//               "name": "separator",
//               "type": "bytes32"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "UPGRADE_INTERFACE_VERSION",
//       "outputs": [
//           {
//               "internalType": "string",
//               "name": "",
//               "type": "string"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "components": [
//                   {
//                       "components": [
//                           {
//                               "internalType": "uint128",
//                               "name": "marketId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "accountId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "int128",
//                               "name": "sizeDelta",
//                               "type": "int128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "settlementStrategyId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint256",
//                               "name": "acceptablePrice",
//                               "type": "uint256"
//                           },
//                           {
//                               "internalType": "bool",
//                               "name": "isReduceOnly",
//                               "type": "bool"
//                           },
//                           {
//                               "internalType": "bytes32",
//                               "name": "trackingCode",
//                               "type": "bytes32"
//                           },
//                           {
//                               "internalType": "address",
//                               "name": "referrer",
//                               "type": "address"
//                           }
//                       ],
//                       "internalType": "struct IEngine.OrderDetails",
//                       "name": "orderDetails",
//                       "type": "tuple"
//                   },
//                   {
//                       "internalType": "address",
//                       "name": "signer",
//                       "type": "address"
//                   },
//                   {
//                       "internalType": "uint256",
//                       "name": "nonce",
//                       "type": "uint256"
//                   },
//                   {
//                       "internalType": "bool",
//                       "name": "requireVerified",
//                       "type": "bool"
//                   },
//                   {
//                       "internalType": "address",
//                       "name": "trustedExecutor",
//                       "type": "address"
//                   },
//                   {
//                       "internalType": "uint256",
//                       "name": "maxExecutorFee",
//                       "type": "uint256"
//                   },
//                   {
//                       "internalType": "bytes[]",
//                       "name": "conditions",
//                       "type": "bytes[]"
//                   }
//               ],
//               "internalType": "struct IEngine.ConditionalOrder",
//               "name": "_co",
//               "type": "tuple"
//           },
//           {
//               "internalType": "bytes",
//               "name": "_signature",
//               "type": "bytes"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_fee",
//               "type": "uint256"
//           }
//       ],
//       "name": "canExecute",
//       "outputs": [
//           {
//               "internalType": "bool",
//               "name": "",
//               "type": "bool"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "_perpsMarketId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint128",
//               "name": "_accountId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "int128",
//               "name": "_sizeDelta",
//               "type": "int128"
//           },
//           {
//               "internalType": "uint128",
//               "name": "_settlementStrategyId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_acceptablePrice",
//               "type": "uint256"
//           },
//           {
//               "internalType": "bytes32",
//               "name": "_trackingCode",
//               "type": "bytes32"
//           },
//           {
//               "internalType": "address",
//               "name": "_referrer",
//               "type": "address"
//           }
//       ],
//       "name": "commitOrder",
//       "outputs": [
//           {
//               "components": [
//                   {
//                       "internalType": "uint256",
//                       "name": "settlementTime",
//                       "type": "uint256"
//                   },
//                   {
//                       "components": [
//                           {
//                               "internalType": "uint128",
//                               "name": "marketId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "accountId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "int128",
//                               "name": "sizeDelta",
//                               "type": "int128"
//                           },
//                           {
//                               "internalType": "uint128",
//                               "name": "settlementStrategyId",
//                               "type": "uint128"
//                           },
//                           {
//                               "internalType": "uint256",
//                               "name": "acceptablePrice",
//                               "type": "uint256"
//                           },
//                           {
//                               "internalType": "bytes32",
//                               "name": "trackingCode",
//                               "type": "bytes32"
//                           },
//                           {
//                               "internalType": "address",
//                               "name": "referrer",
//                               "type": "address"
//                           }
//                       ],
//                       "internalType": "struct IPerpsMarketProxy.OrderCommitmentRequest",
//                       "name": "request",
//                       "type": "tuple"
//                   }
//               ],
//               "internalType": "struct IPerpsMarketProxy.Data",
//               "name": "retOrder",
//               "type": "tuple"
//           },
//           {
//               "internalType": "uint256",
//               "name": "fees",
//               "type": "uint256"
//           }
//       ],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "accountId",
//               "type": "uint128"
//           }
//       ],
//       "name": "credit",
//       "outputs": [
//           {
//               "internalType": "uint256",
//               "name": "",
//               "type": "uint256"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "_accountId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "creditAccount",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "_accountId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "creditAccountZap",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "_accountId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "debitAccount",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "uint128",
//               "name": "_accountId",
//               "type": "uint128"
//           },
//           {
//               "internalType": "uint256",
//               "name": "_amount",
//               "type": "uint256"
//           }
//       ],
//       "name": "debitAccountZap",
//       "outputs": [],
//       "stateMutability": "payable",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "eip712Domain",
//       "outputs": [
//           {
//               "internalType": "bytes1",
//               "name": "fields",
//               "type": "bytes1"
//           },
//           {
//               "internalType": "string",
//               "name": "name",
//               "type": "string"
//           },
//           {
//               "internalType": "string",
//               "name": "version",
//               "type": "string"
//           },
//           {
//               "internalType": "uint256",
//               "name": "chainId",
//               "type": "uint256"
//           },
//           {
//               "internalType": "address",
//               "name": "verifyingContract",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "eip712DomainHash",
//       "outputs": [
//           {
//               "internalType": "bytes32",
//               "name": "",
//               "type": "bytes32"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "engine",
//       "outputs": [
//           {
//               "internalType": "contract IEngine",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "migrations",
//       "outputs": [
//           {
//               "internalType": "contract IMigrations",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "pDAO",
//       "outputs": [
//           {
//               "internalType": "contract IPDAO",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "perpsMarketProxy",
//       "outputs": [
//           {
//               "internalType": "contract IPerpsMarketProxy",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "spotMarketProxy",
//       "outputs": [
//           {
//               "internalType": "contract ISpotMarketProxy",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "sUSD",
//       "outputs": [
//           {
//               "internalType": "contract ISUSD",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "sUSDId",
//       "outputs": [
//           {
//               "internalType": "uint128",
//               "name": "",
//               "type": "uint128"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [],
//       "name": "sUSDSynth",
//       "outputs": [
//           {
//               "internalType": "contract ITokenSynth",
//               "name": "",
//               "type": "address"
//           }
//       ],
//       "stateMutability": "view",
//       "type": "function"
//   },
//   {
//       "inputs": [
//           {
//               "internalType": "address",
//               "name": "target",
//               "type": "address"
//           }
//       ],
//       "name": "verifyAddress",
//       "outputs": [],
//       "stateMutability": "view",
//       "type": "function"
//   }
// ];

// const engineAddress = "0x33B725a1B2dE9178121D423D2A1c062C5452f310";

// const engineContract = new ethers.Contract(engineAddress, engineABI, wallet);
// const perpsMarketId = 100;
// const accountId = ethers.BigNumber.from("170141183460469231731687303715884106105");
// const sizeDelta = ethers.BigNumber.from("-170141183460469231731687303715884105727"); 
// const settlementStrategyId = 0;
// const acceptablePrice = ethers.BigNumber.from("20988711000000000000000"); 
// const trackingCode = "0x4b57454e54410000000000000000000000000000000000000000000000000000";
// const referrer = "0x3bD64247d879AF879e6f6e62F81430186391Bdb8";

// const commitOrder = async () => {
//     const value = ethers.utils.parseEther('0.0001');
//     const overrides = {
//       value: value,
//       gasLimit: 5000000,
//     };
  
//     const tx = await engineContract.commitOrder(
//       perpsMarketId,
//       accountId,
//       sizeDelta,
//       settlementStrategyId,
//       acceptablePrice,
//       trackingCode,
//       referrer,
//       overrides,
//     );
  
//     console.log("Transaction hash:", tx.hash);
//     await tx.wait(); 
//     console.log("Transaction confirmed");
//   };
  
//   commitOrder().catch((error) => {
//     console.error("Error committing order:", error);
//   });
  

const { Web3 } = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG'));

const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
const engineAddress = "0x33B725a1B2dE9178121D423D2A1c062C5452f310";
const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8"

const engineABI =  [
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_perpsMarketProxy",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_spotMarketProxy",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_sUSDProxy",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_pDAO",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_usdc",
              "type": "address"
          },
          {
              "internalType": "uint128",
              "name": "_sUSDCId",
              "type": "uint128"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          }
      ],
      "name": "AddressEmptyCode",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
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
      "name": "ApprovalFailed",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "CannotExecuteOrder",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "ERC1967InvalidImplementation",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ERC1967NonPayable",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "FailedInnerCall",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "InsufficientAmount",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InsufficientCredit",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes4",
              "name": "selector",
              "type": "bytes4"
          }
      ],
      "name": "InvalidConditionSelector",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "id",
              "type": "uint128"
          }
      ],
      "name": "InvalidIdSUSDC",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "InvalidNonce",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "MaxConditionSizeExceeded",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NonUpgradeable",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "NotSupported",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "OnlyPDAO",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "SUSDZeroAddress",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "SpotMarketZeroAddress",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "token",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "TransferFailed",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "USDCZeroAddress",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "UUPSUnauthorizedCallContext",
      "type": "error"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
          }
      ],
      "name": "UUPSUnsupportedProxiableUUID",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
  },
  {
      "inputs": [],
      "name": "ZeroAddress",
      "type": "error"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "settlementTime",
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
                      "internalType": "struct IPerpsMarketProxy.OrderCommitmentRequest",
                      "name": "request",
                      "type": "tuple"
                  }
              ],
              "indexed": false,
              "internalType": "struct IPerpsMarketProxy.Data",
              "name": "order",
              "type": "tuple"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "synthetixFees",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "executorFee",
              "type": "uint256"
          }
      ],
      "name": "ConditionalOrderExecuted",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint128",
              "name": "accountId",
              "type": "uint128"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "Credited",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint128",
              "name": "accountId",
              "type": "uint128"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "Debited",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "uint128",
              "name": "accountId",
              "type": "uint128"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "word",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "mask",
              "type": "uint256"
          }
      ],
      "name": "UnorderedNonceInvalidation",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "implementation",
              "type": "address"
          }
      ],
      "name": "Upgraded",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountWrapped",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountMinted",
              "type": "uint256"
          }
      ],
      "name": "ZappedIn",
      "type": "event"
  },
  {
     "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountBurned",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "amountUnwrapped",
              "type": "uint256"
          }
      ],
      "name": "ZappedOut",
      "type": "event"
  },
  {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "separator",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "UPGRADE_INTERFACE_VERSION",
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
      "inputs": [
          {
              "components": [
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
                              "internalType": "bool",
                              "name": "isReduceOnly",
                              "type": "bool"
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
                      "internalType": "struct IEngine.OrderDetails",
                      "name": "orderDetails",
                      "type": "tuple"
                  },
                  {
                      "internalType": "address",
                      "name": "signer",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "nonce",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bool",
                      "name": "requireVerified",
                      "type": "bool"
                  },
                  {
                      "internalType": "address",
                      "name": "trustedExecutor",
                      "type": "address"
                  },
                  {
                      "internalType": "uint256",
                      "name": "maxExecutorFee",
                      "type": "uint256"
                  },
                  {
                      "internalType": "bytes[]",
                      "name": "conditions",
                      "type": "bytes[]"
                  }
              ],
              "internalType": "struct IEngine.ConditionalOrder",
              "name": "_co",
              "type": "tuple"
          },
          {
              "internalType": "bytes",
              "name": "_signature",
              "type": "bytes"
          },
          {
              "internalType": "uint256",
              "name": "_fee",
              "type": "uint256"
          }
      ],
      "name": "canExecute",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "_perpsMarketId",
              "type": "uint128"
          },
          {
              "internalType": "uint128",
              "name": "_accountId",
              "type": "uint128"
          },
          {
              "internalType": "int128",
              "name": "_sizeDelta",
              "type": "int128"
          },
          {
              "internalType": "uint128",
              "name": "_settlementStrategyId",
              "type": "uint128"
          },
          {
              "internalType": "uint256",
              "name": "_acceptablePrice",
              "type": "uint256"
          },
          {
              "internalType": "bytes32",
              "name": "_trackingCode",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "_referrer",
              "type": "address"
          }
      ],
      "name": "commitOrder",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "uint256",
                      "name": "settlementTime",
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
                      "internalType": "struct IPerpsMarketProxy.OrderCommitmentRequest",
                      "name": "request",
                      "type": "tuple"
                  }
              ],
              "internalType": "struct IPerpsMarketProxy.Data",
              "name": "retOrder",
              "type": "tuple"
          },
          {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "accountId",
              "type": "uint128"
          }
      ],
      "name": "credit",
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
              "internalType": "uint128",
              "name": "_accountId",
              "type": "uint128"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "creditAccount",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "_accountId",
              "type": "uint128"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "creditAccountZap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "_accountId",
              "type": "uint128"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "debitAccount",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint128",
              "name": "_accountId",
              "type": "uint128"
          },
          {
              "internalType": "uint256",
              "name": "_amount",
              "type": "uint256"
          }
      ],
      "name": "debitAccountZap",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "eip712Domain",
      "outputs": [
          {
              "internalType": "bytes1",
              "name": "fields",
              "type": "bytes1"
          },
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "version",
              "type": "string"
          },
          {
              "internalType": "uint256",
              "name": "chainId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "verifyingContract",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "eip712DomainHash",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "engine",
      "outputs": [
          {
              "internalType": "contract IEngine",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "migrations",
      "outputs": [
          {
              "internalType": "contract IMigrations",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "pDAO",
      "outputs": [
          {
              "internalType": "contract IPDAO",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "perpsMarketProxy",
      "outputs": [
          {
              "internalType": "contract IPerpsMarketProxy",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "spotMarketProxy",
      "outputs": [
          {
              "internalType": "contract ISpotMarketProxy",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "sUSD",
      "outputs": [
          {
              "internalType": "contract ISUSD",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "sUSDId",
      "outputs": [
          {
              "internalType": "uint128",
              "name": "",
              "type": "uint128"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "sUSDSynth",
      "outputs": [
          {
              "internalType": "contract ITokenSynth",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "target",
              "type": "address"
          }
      ],
      "name": "verifyAddress",
      "outputs": [],
      "stateMutability": "view",
      "type": "function"
  }
];

const engineContract = new web3.eth.Contract(engineABI, engineAddress);

const perpsMarketId = 100;
const accountId = "170141183460469231731687303715884106105"; 
const sizeDelta = "-170141183460469231731687303715884105727"; 
const settlementStrategyId = 0;
const acceptablePrice = "20988711000000000000000"; 
const trackingCode = "0x4b57454e54410000000000000000000000000000000000000000000000000000";
const referrer = "0x3bD64247d879AF879e6f6e62F81430186391Bdb8"; 

  const main = async () => {
    const nonce = await web3.eth.getTransactionCount(fromAddress);
    console.log("Nonce:", nonce);
  
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Gas Price:", gasPrice);
  
    const data = engineContract.methods.commitOrder(
      perpsMarketId,
      accountId,
      sizeDelta,
      settlementStrategyId,
      acceptablePrice,
      trackingCode,
      referrer
    ).encodeABI();

  
    const tx = {
      nonce: nonce,
      from: fromAddress,
      to: engineAddress,
      data: data,
      gas: 250_000,
      gasPrice: gasPrice,
      value: web3.utils.toWei("0.01", "ether"),
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
  
  

 