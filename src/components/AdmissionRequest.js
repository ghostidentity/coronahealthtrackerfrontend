import React, { Component } from "react";
import { Grid, Label, Segment, Tab } from "semantic-ui-react";
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
            <Segment>
              <Label attached="top">Waiting list</Label>
              <WaitingList />
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <Label attached="top">Pickup Queue</Label>
              <PickUpStatus />
            </Segment>
          </Grid.Column>
        </Grid>
      </Tab.Pane>
    );
  }
}

export default AdmissionRequest;
