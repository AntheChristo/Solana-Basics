import dotenv from 'dotenv';
import { Keypair } from '@solana/web3.js';

dotenv.config();

function getKeypairFromEnv() {
  const secretKeyString = process.env.SECRET_KEY;
  if (!secretKeyString) {
    throw new Error('Secret key not found in .env file');
  }
  
  const secretKeyArray = JSON.parse(secretKeyString);
  const secretKeyUint8Array = new Uint8Array(secretKeyArray);
  return Keypair.fromSecretKey(secretKeyUint8Array);
}

// Export the function
export { getKeypairFromEnv };
