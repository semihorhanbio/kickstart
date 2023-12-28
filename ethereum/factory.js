import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x4d83933077F93E761E2b6e0364Bd5cC474019e2b"
);

export default instance;
