import React, { Component } from "react";
import { Divider, Grid, Label, Menu, Message, Segment, Tab } from "semantic-ui-react";
import HospitalCapacity from "./HospitalCapacity";
import InfectionControl from "./InfectionControl";
import PatientMonitoring from "./PatientMonitoring";
import ReportedSymptoms from "./Reported Symptoms";
import AdmissionRequest from "./AdmissionRequest";

export default class Mainscreen extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const panes = [
      {
        menuItem: {
          key: "users",
          icon: "users",
          content: "Admission",
          position: "left"
        },
        render: () => <AdmissionRequest />
      },
      {
        menuItem: {
          key: "patient",
          icon: "users",
          content: "Monitoring",
          position: "left"
        },
        render: () => <PatientMonitoring />
      },
      {
        menuItem: {
          key: "infection",
          icon: "users",
          content: "Control",
          position: "left"
        },
        render: () => <InfectionControl />
      },
      {
        menuItem: {
          key: "symptoms",
          icon: "users",
          content: "Reported",
          position: "left"
        },
        render: () => <ReportedSymptoms />
      },
      {
        menuItem: {
          key: "hospital",
          icon: "users",
          content: "Hospital",
          position: "left"
        },
        render: () => (
          <Tab.Pane>
            <HospitalCapacity />{" "}
          </Tab.Pane>
        )
      },
      {
        menuItem: {
          key: "public",
          icon: "users",
          content: "Advisory",
          position: "left",
          disabled: false
        },
        render: () => <Tab.Pane>Public Advisory</Tab.Pane>
      },
      {
        menuItem: {
          key: "vaccine",
          icon: "users",
          content: "Vaccine",
          position: "left",
          disabled: false
        },
        render: () => <Tab.Pane>Vaccine Status</Tab.Pane>
      }
    ];

    return (
      <React.Fragment>
        <Menu>
          <Menu.Menu position="left">
            <Menu.Item name="Health Tracker" />
          </Menu.Menu>
          <Menu.Menu position="right">
            <Menu.Item
              name="logout"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        <Grid columns="equal" divided>
          <Grid.Row>
            <Grid.Column width={16}>
              <Message visible>Welcome, Mark!</Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Segment>
                <Segment.Group raised>
                  <Label attached="top">Organization</Label>
                  <Segment>
                    Name: Department of Health <br />
                    Country: Philippines <br />
                  </Segment>
                </Segment.Group>

                <Segment.Group raised>
                  <Label attached="top">General Overview</Label>
                  <Segment>
                    PUI: 895 <br />
                    PUM: 23 <br />
                    Infected: 3223 <br />
                    Recovered: 2323 <br />
                    Died: 3099
                  </Segment>
                </Segment.Group>
              </Segment>
            </Grid.Column>
            <Grid.Column width={13}>
              <Tab
                menu={{ fluid: true, tabular: true }}
                panes={panes}
                defaultActiveIndex={0}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row stretched>
            <Grid.Column width={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
