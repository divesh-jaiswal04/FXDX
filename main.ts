import Web3 from 'web3';

// Initialize a web3 instance
const web3 = new Web3(new Web3.providers.HttpProvider('https://base-mainnet.g.alchemy.com/v2/sk6nemJuz8S4loZ5g2Lhgq3Eu1OJg2Jr'));

// Define the contract ABI
const contractABI = 
  [{"inputs":[{"internalType":"bytes32","name":"which","type":"bytes32"}],"name":"FeatureUnavailable","type":"error"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"}],"name":"InvalidAccountId","type":"error"},{"inputs":[{"internalType":"bytes32","name":"permission","type":"bytes32"}],"name":"InvalidPermission","type":"error"},{"inputs":[{"internalType":"address","name":"origin","type":"address"}],"name":"OnlyAccountTokenProxy","type":"error"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"target","type":"address"}],"name":"PermissionDenied","type":"error"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"PermissionNotGranted","type":"error"},{"inputs":[],"name":"PositionOutOfBounds","type":"error"},{"inputs":[],"name":"ValueAlreadyInSet","type":"error"},{"inputs":[],"name":"ValueNotInSet","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint128","name":"accountId","type":"uint128"},{"indexed":true,"internalType":"address","name":"owner","type":"address"}],"name":"AccountCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint128","name":"accountId","type":"uint128"},{"indexed":true,"internalType":"bytes32","name":"permission","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"PermissionGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint128","name":"accountId","type":"uint128"},{"indexed":true,"internalType":"bytes32","name":"permission","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"PermissionRevoked","type":"event"},{"inputs":[],"name":"createAccount","outputs":[{"internalType":"uint128","name":"accountId","type":"uint128"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"requestedAccountId","type":"uint128"}],"name":"createAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"}],"name":"getAccountLastInteraction","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"}],"name":"getAccountOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"}],"name":"getAccountPermissions","outputs":[{"components":[{"internalType":"address","name":"user","type":"address"},{"internalType":"bytes32[]","name":"permissions","type":"bytes32[]"}],"internalType":"struct IAccountModule.AccountPermissions[]","name":"accountPerms","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAccountTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"grantPermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"hasPermission","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"isAuthorized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint128","name":"accountId","type":"uint128"}],"name":"notifyAccountTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"}],"name":"renouncePermission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"accountId","type":"uint128"},{"internalType":"bytes32","name":"permission","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"revokePermission","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// Define the contract address
const contractAddress = '0xD5FcCd43205CEF11FbaF9b38dF15ADbe1B186869'; 

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

console.log("contract",contract);

// Example function to call the createAccount method
// async function createAccount() {
//     try {
//         // Call the createAccount function
//         const accounts = await web3.eth.getAccounts();
//         const result = await contract.methods.createAccount().send({ from: accounts[0] });

//         console.log('Account created successfully!');
//         console.log('Transaction Hash:', result.transactionHash);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// Call the createAccount function
// createAccount();
