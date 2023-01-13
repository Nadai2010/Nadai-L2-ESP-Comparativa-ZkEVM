import { utils, Wallet, Provider } from 'zksync-web3';
import * as ethers from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';

export default async function (hre: HardhatRuntimeEnvironment) {

  const adminPrivateKey = ethers.Wallet.fromMnemonic(hre.config.env.MNEMONIC, `m/44'/60'/0'/0/0`).privateKey; // first account
  const provider = new Provider(hre.config.networks.zkSyncTestnet);
  const adminWallet = new Wallet(adminPrivateKey).connect(provider);
  const adminAddress = adminWallet.address;
  console.log("Admin address: " + adminAddress)

  let deployer = new Deployer(hre, adminWallet);
  const ZkEVMzkSyncArtifact = await deployer.loadArtifact('ZkEVMzkSync');

  const zkevmzksyncERC20 = await deployer.deploy(
    ZkEVMzkSyncArtifact,
    [],
    undefined,
    []
  );

  console.log(`ZkEVMTzkSync address: ${zkevmzksyncERC20.address}`);
}