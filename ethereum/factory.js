import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8511D0eDa532D79E63725EcEBd98046F516af4b5"
);

export default instance;
