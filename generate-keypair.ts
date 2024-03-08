/*
//generate keypair
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
*/


/*
// call pub-key from .env secret key

import { Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction } from "@solana/web3.js"

import "dotenv/config";
import { Keypair } from "@solana/web3.js";

const secretKeyString = process.env.SECRET_KEY as string; 
const secretKeyArray = JSON.parse(secretKeyString);
const secretKeyUint8Array = new Uint8Array(secretKeyArray);

const keypair = Keypair.fromSecretKey(secretKeyUint8Array);

console.log(`Public Key: ${keypair.publicKey.toBase58()}`);

*/

/*Connect to the network

import { Connection, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
console.log(`✅ Connected!`)

*/

/*get balance devnet

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey('BKgg9Fb8ep9TFw6k8LmSEA3RBpNZDsGryaYm1jAZ7xLQ');
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`); 
console.log(`✅ Finished!`)

*/

/*
getbalance mainnet

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
// Connect to Solana Mainnet
const connection = new Connection(clusterApiUrl("mainnet-beta"));

// Use a valid Solana public key
const address = new PublicKey('CH9i39Jga5ZTsKKadFd4N9V3GUUXjn3gPxJhePTeoJ22'); // Replace 'YourPublicKeyHere' with a valid address
const balance = await connection.getBalance(address);

console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`✅ Finished!`);
*/


