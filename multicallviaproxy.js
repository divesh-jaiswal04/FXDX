// const ethers = require('ethers');

// // ERC1967Proxy contract address
// const erc1967ProxyAddress = '0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6';

// // ABI for ERC1967Proxy contract
// const erc1967ProxyAbi = [{"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"}],"name":"ERC1967InvalidImplementation","type":"error"},{"inputs":[],"name":"ERC1967NonPayable","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"}];

// // Initialize provider and signer
// const provider = new ethers.providers.JsonRpcProvider('https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG');
// const wallet = new ethers.Wallet('0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b', provider);

// // Construct contract instance
// const erc1967ProxyContract = new ethers.Contract(erc1967ProxyAddress, erc1967ProxyAbi, wallet);

// // Commit order function signature
// const commitOrderSignature = 'commitOrder(uint128,uint128,int128,uint128,uint256,bytes32,address)';

// const perpsMarketId = 100;
// const accountId = ethers.BigNumber.from("170141183460469231731687303715884106105");
// const sizeDelta = ethers.BigNumber.from("-170141183460469231731687303715884105727"); 
// const settlementStrategyId = 0;
// const acceptablePrice = ethers.BigNumber.from("20988711000000000000000"); 
// const trackingCode = "0x4b57454e54410000000000000000000000000000000000000000000000000000";
// const referrer = "0x3bD64247d879AF879e6f6e62F81430186391Bdb8";

// // Encode parameters
// const encodedParameters = ethers.utils.defaultAbiCoder.encode(
//     ['uint128', 'uint128', 'int128', 'uint128', 'uint256', 'bytes32', 'address'],
//     [perpsMarketId, accountId, sizeDelta, settlementStrategyId, acceptablePrice, trackingCode, referrer]
// );

// // Construct function call data
// const functionCallData = ethers.utils.hexConcat([
//     ethers.utils.hexDataSlice(ethers.utils.id(commitOrderSignature), 0, 4),
//     encodedParameters
// ]);

// // Encode data for multicall function
// const encodedData = ethers.utils.defaultAbiCoder.encode(
//     ['uint256', 'bytes[]'],
//     [ethers.utils.parseEther('0.0001'), [functionCallData]]
// );

// // Call multicall function
// async function callMulticall() {
//     const tx = await erc1967ProxyContract.multicall(ethers.utils.parseEther('0.0001'), [encodedData]);
//     console.log('Transaction hash:', tx.hash);

//     const receipt = await tx.wait();
//     console.log('Transaction receipt:', receipt);
// }

// callMulticall().catch(err => console.error(err));


const { ethers } = require('ethers');

// ERC1967Proxy contract address
const proxyAddress = '0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6';

// ERC1967Proxy contract ABI
const proxyABI = [{"inputs":[{"internalType":"address","name":"implementation","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"implementation","type":"address"}],"name":"ERC1967InvalidImplementation","type":"error"},{"inputs":[],"name":"ERC1967NonPayable","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"}];


// Commit order function signature
const commitOrderSignature = 'commitOrder(uint128,uint128,int128,uint128,uint256,bytes32,address)';

const perpsMarketId = 100;
const accountId = ethers.BigNumber.from("170141183460469231731687303715884106105");
const sizeDelta = ethers.BigNumber.from("-170141183460469231731687303715884105727"); 
const settlementStrategyId = 0;
const acceptablePrice = ethers.BigNumber.from("20988711000000000000000"); 
const trackingCode = "0x4b57454e54410000000000000000000000000000000000000000000000000000";
const referrer = "0x3bD64247d879AF879e6f6e62F81430186391Bdb8";

// Encode parameters
const encodedParameters = ethers.utils.defaultAbiCoder.encode(
    ['uint128', 'uint128', 'int128', 'uint128', 'uint256', 'bytes32', 'address'],
    [perpsMarketId, accountId, sizeDelta, settlementStrategyId, acceptablePrice, trackingCode, referrer]
);

// Construct function call data
const functionCallData = ethers.utils.hexConcat([
    ethers.utils.hexDataSlice(ethers.utils.id(commitOrderSignature), 0, 4),
    encodedParameters
]);

// Wallet private key
const privateKey = '0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b';

// Provider
const provider = new ethers.providers.JsonRpcProvider('https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG');

// Wallet
const wallet = new ethers.Wallet(privateKey, provider);

// Contract instance
const proxyContract = new ethers.Contract(proxyAddress, proxyABI, wallet);

// Multicall parameters
const payableAmount = ethers.utils.parseEther('0.001'); // Example payable amount in ether
const data = [functionCallData]; // Array containing the function call data

// Call the multicall function
async function callMulticall() {
    try {
        const tx = await proxyContract.multicall(payableAmount, data);
        console.log("Transaction Hash:", tx.hash);
        const receipt = await tx.wait();
        console.log("Transaction Receipt:", receipt);
    } catch (error) {
        console.error("Error calling multicall:", error);
    }
}

callMulticall();
