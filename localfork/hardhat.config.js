/** @type import('hardhat/config').HardhatUserConfig */
// const hre= require ('hardhat')
require("@nomiclabs/hardhat-waffle");
const { task } = require('hardhat/config');

// module.exports = {
//   solidity: "0.8.17",
//   networks: {
//     hardhat: {
//       forking: {
//         url: "https://eth-mainnet.g.alchemy.com/v2/lcA7Kyqv42J1Qh-wLm__DdqSCJBtZyd1",
//       }
//     },
//     binance:{
//       url: "https://bsc.w3node.com/1252b7dcac60d06cd7590c67aa44579d27e9d8eaab52b799e056edc2803ca639/api",
//       chainId: 56,
//       gasPrice: 20000000000,
//     }
//   }
// };
// task("test", async (args, runSuper) => {
//   let BSC_URL = "https://bsc.w3node.com/1252b7dcac60d06cd7590c67aa44579d27e9d8eaab52b799e056edc2803ca639/api"
//   const bscProvider = new ethers.providers.JsonRpcProvider(BSC_URL);
//   const latestBlock = await bscProvider.getBlockNumber();
//   console.log(latestBlock)
//   await hre.network.provider.send("hardhat_reset", [{
//     forking: {
//       jsonRpcUrl: BSC_URL,
//       blockNumber: latestBlock
//     }
//   }])
// });

task("test", async (args, hre, runSuper) => {
  console.log('sjdfk')
  const jsonRpcUrl = (hre.network.config).forking
    ?.url;
  const remoteProvider = new ethers.providers.JsonRpcProvider(jsonRpcUrl)
  const blockNumber = (await remoteProvider.getBlockNumber()).toNumber();
  console.log('sdjfk')

  await hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl,
          blockNumber,
        },
      },
    ],
  });


  return await runSuper(args);
});
module.exports = {
  defaultNetwork: "mainnet",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      // forking: {
      //   url: "https://bsc-dataseed.binance.org",
      //   blockNumber:27521157
      // },
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
    },
    mainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
    }
  },
  solidity: {
    version: "0.5.16",
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};