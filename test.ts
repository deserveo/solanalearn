import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import axios from "axios";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey('CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function fetchData() {
  let flag = true;
  let count = 0;
  while (flag) {
    console.log("start");
    try {
      const balance = await connection.getBalance(address);  
      console.log(`The balance of the account at ${address} is ${balance} lamports`);
      console.log(`✅ Finished!`);
      flag = false;
    } catch (e) {
      console.log("fail,", ++count);
    }
    await delay(200);
  }
}

fetchData();