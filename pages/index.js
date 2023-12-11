import React, { Component } from "react";
import factory from "../ethereum/factory";

class CampaignsIndex extends Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  }

  render() {
    return <h1>campaigns</h1>;
  }
}

export default CampaignsIndex;
