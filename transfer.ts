import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import "dotenv/config";
import { getKeypairFromEnv } from "./loadKeypair"; // Adjust the path as necessary

const suppliedToPubkey = process.argv[2] || null;

if (!suppliedToPubkey) {
  console.log("BKgg9Fb8ep9TFw6k8LmSEA3RBpNZDsGryaYm1jAZ7xLQ");
  process.exit(1);
}

const senderKeypair = getKeypairFromEnv(); // Use your function to load the keypair

console.log(`suppliedToPubkey: ${suppliedToPubkey}`);

const toPubkey = new PublicKey(suppliedToPubkey);
const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log(
  "✅ Loaded our own keypair, the destination public key, and connected to Solana"
);
console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`
);

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
  fromPubkey: senderKeypair.publicKey,
  toPubkey,
  lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
  senderKeypair,
]);

console.log(
  `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${toPubkey}. `
);
console.log(`Transaction signature is ${signature}!`);

/*// With @solana/web3.js, you can create non-native instructions with the TransactionInstruction constructor. This constructor takes a single argument of the data type TransactionInstructionCtorFields. 
export type TransactionInstructionCtorFields = {
  keys: Array<AccountMeta>;
  programId: PublicKey;
  data?: Buffer;
};
*/

//Each object in the keys array must include the following:

//pubkey - the public key of the account
//isSigner - a boolean representing whether or not the account is a signer on the transaction
//isWritable - a boolean representing whether or not the account is written to during the transaction's execution

/*
const instruction = new web3.TransactionInstruction({
  keys: [
    {
      pubkey: programDataAccount,
      isSigner: false,
      isWritable: true,
    },
  ],
  programId,
});

const transaction = new web3.Transaction().add(instruction)

const signature = await web3.sendAndConfirmTransaction(
  connection,
  transaction,
  [payer],
);

console.log(`✅ Success! Transaction signature is: ${signature}`);
*/