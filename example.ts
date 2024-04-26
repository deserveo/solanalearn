// import { Connection, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection(clusterApiUrl("devnet"));
// console.log(`✅ Connected!`)

import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const connection = new Connection("https://rpc.ankr.com/solana_devnet", "confirmed");;
const address = new PublicKey('DM5vhRHYeyqPm8uzsruLKbfjTNMcKGpvWVbjUGXB4iBB');
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`); 
console.log(`✅ Finished!`)
