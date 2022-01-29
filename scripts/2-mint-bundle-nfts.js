import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0xf24f85d3aE68E7C8def86c65E627854986A08746"; //"0x73E1a0e572c0661600dFb485cd7CeE4a002c8d58";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Apple Watch",
        description: "The ultimate device for a healthy life.",
        image: readFileSync("./assets/apple.jpg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Tissot",
        description: "AN UNCOMPROMISING ESSENTIAL",
        image: readFileSync("./assets/tissot.jpg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Rolex",
        description: "CRAFTED WITH SCRUPULOUS ATTENTION TO DETAIL.",
        image: readFileSync("./assets/rolex.jpg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
