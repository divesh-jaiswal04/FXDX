
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://base-sepolia.g.alchemy.com/v2/1NMSG9GzvLl_gI5MyoHWRZVb-8y-H7cG');

const privateKey = "0x81ce6421ebde78b74e23f872eb552f2679c3ced2b9ba88d00ec4e6ab3dbbc20b";
const fromAddress = "0x9B6367Def1e27EF0C2c07481206D5E3F498b52b8";
const proxyAddress = "0xe5bB889B1f0B6B4B7384Bd19cbb37adBDDa941a6";
const payableAmount = ethers.utils.parseEther("0.01");

const perpsMarketId = 100;
const accountId = "170141183460469231731687303715884106105";
const sizeDelta = "-170141183460469231731687303715884105727"; 
const settlementStrategyId = 0; 
const trackingCode = "0x4b57454e54410000000000000000000000000000000000000000000000000000";
const referrer = "0x3bD64247d879AF879e6f6e62F81430186391Bdb8"; 

const main = async () => {
  const nonce = await provider.getTransactionCount(fromAddress);
  console.log("Nonce:", nonce);

  const gasPrice = await provider.getGasPrice();
  console.log("Gas Price:", gasPrice.toString());

  const wallet = new ethers.Wallet(privateKey, provider);

  const proxyContract = new ethers.Contract(proxyAddress, [], wallet);

  
  const commitOrderData = proxyContract.interface.encodeFunctionData('commitOrder', [
    perpsMarketId,
    accountId,
    sizeDelta,
    settlementStrategyId,
    trackingCode,
    referrer
  ]);

  console.log("commitOrderData:", commitOrderData);

  const tx = {
    nonce: nonce,
    to: proxyAddress,
    data: commitOrderData,
    gasPrice: gasPrice,
    value: payableAmount,
  };

  console.log("Transaction object:", tx);

  try {
    const signedTx = await wallet.signTransaction(tx);
    console.log("Signed Transaction:", signedTx);

    const txResponse = await provider.sendTransaction(signedTx);
    console.log("Transaction hash:", txResponse.hash);

    // Wait for the transaction to be mined
    await txResponse.wait();
    console.log("Transaction mined!");

    // Get transaction receipt
    const receipt = await provider.getTransactionReceipt(txResponse.hash);
    console.log("Transaction receipt:", receipt);
  } catch (err) {
    console.error("Error in transaction process:", err);
  }
};

main();
