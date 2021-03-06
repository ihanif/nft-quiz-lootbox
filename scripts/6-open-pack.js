import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0xa9ecDdB01e8BAB150e9a964ef4a071d03af2b0Be";
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Opening the pack...");
  const opened = await packModule.open("0");
  console.log("Opened the pack!");
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}
