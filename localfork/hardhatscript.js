// const { task } = require('hardhat/config');

// task("test", async (args, runSuper) => {
//     let BSC_URL = "https://bsc.w3node.com/1252b7dcac60d06cd7590c67aa44579d27e9d8eaab52b799e056edc2803ca639/api"
//     const bscProvider = new ethers.providers.JsonRpcProvider(BSC_URL);
//     const latestBlock = await bscProvider.getBlockNumber();
//     console.log(latestBlock)
//     await network.provider.send("hardhat_reset", [{
//         forking: {
//             jsonRpcUrl: BSC_URL,
//             blockNumber: latestBlock
//         }
//     }])
// });