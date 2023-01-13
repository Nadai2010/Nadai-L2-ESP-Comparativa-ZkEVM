require("@matterlabs/hardhat-zksync-deploy");
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");
require("dotenv").config();

const {
  MNEMONIC
} = process.env

module.exports = {
  env: {
    MNEMONIC: MNEMONIC
  },
  zksolc: {
    version: "1.2.1",
    compilerSource: "binary",
    settings: {
      experimental: {
        dockerImage: "matterlabs/zksolc",
        tag: "v1.2.1",
      },
    },
  },
  defaultNetwork: 'zkSyncTestnet',

  networks: {
    hardhat: {
      zksync: true,
    },
    zkSyncTestnet: {
      url: 'https://zksync2-testnet.zksync.dev',
      ethNetwork: 'goerli', // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      zksync: true,
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      gas: 3_000_000,
      gasPrice: 50_000_000_000,
      timeout: 99999999,
      accounts: {mnemonic: MNEMONIC}
    }
  },
  solidity: {
    version: "0.8.16",
  },
};