import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9577C5dB8417d3b6af2b5A0Cf6939746608B0f16"
);

export default instance;
