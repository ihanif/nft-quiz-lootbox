import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing");
  process.exit(1);
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Wallet private key. NEVER CHECK THE KEY IN. ALWAYS USE ENVIRONMENT VARIABLES.
    process.env.WALLET_PRIVATE_KEY,
    // We use Polygon Mumbai network
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

const appAddress = "0xf24f85d3aE68E7C8def86c65E627854986A08746"; // your project address from thirdweb

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}
