const { link } = require("ethereum-waffle");

const LINK = "0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2";
const paymentAmount = 1;
const timeout = 60; // are these sane defaults
const validator = "0x0000000000000000000000000000000000000000"; // are these sane defaults
const minSubmissionValue = 10000000000; // not sure what this is
const maxSubmissionValue = 1000000000000; // not sure what this is
const decimals = 8; // is this is the token decimals of HNY
const description = "HNY/WXDAI oracle";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Aggregator = await ethers.getContractFactory("AccessControlledAggregator");
  const aggregator = await Aggregator.deploy(
    LINK,
    paymentAmount,
    timeout,
    validator,
    minSubmissionValue,
    maxSubmissionValue,
    decimals,
    description
  );

  console.log("Aggregator address:", aggregator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
