import React, { Component } from "react";
import { Grid, Tab } from "semantic-ui-react";
import PickUpStatus from "./PickUpStatus";
import WaitingList from "./WaitingList";

class AdmissionRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tab.Pane>
        <Grid>
          <Grid.Column width={8}>
                <WaitingList />
          </Grid.Column>
          <Grid.Column width={8}>
            <PickUpStatus />
          </Grid.Column>
        </Grid>
      </Tab.Pane>
    );
  }
}

export default AdmissionRequest;
