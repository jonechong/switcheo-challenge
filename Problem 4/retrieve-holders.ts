import { ethers } from "ethers";

// Define the network and the provider
const network: string = "https://bscscan.com/";
const provider: ethers.JsonRpcProvider = new ethers.JsonRpcProvider(network);

// Define the token contract and the addresses
const tokenContractAddress: string =
  "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";
const addresses: string[] = [
  "0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392",
];

// Define the ABI of the balanceOf function in the ERC20 standard
const erc20Abi: string[] = [
  "function balanceOf(address owner) view returns (uint256)",
];

// Create a contract instance
const contract = new ethers.Contract(tokenContractAddress, erc20Abi, provider);

// Fetch and log the balances
addresses.forEach(async (address: string) => {
  const balance = await contract.balanceOf(address);
  console.log(`The balance of ${address} is ${balance}`);
});
