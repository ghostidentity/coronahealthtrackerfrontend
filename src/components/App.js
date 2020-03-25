import React, { Component } from "react";
import {
  Grid,
  Menu,
  Tab,
  Icon,
  Image,
  Item,
  Button,
  Message,
  Segment,
  Statistic,
  Label,
  Table,
  TextArea,
  Divider
} from "semantic-ui-react";

import PatientMonitoring from "./PatientMonitoring";
import InfectionControl from "./InfectionControl";
import ReportedSymptoms from "./Reported Symptoms";
import HospitalCapacity from "./HospitalCapacity";
import WaitingList from "./WaitingList";

export default class App extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    const panes = [
      {
        menuItem: {
          key: "users",
          icon: "users",
          content: "Admission Request",
          position: "left"
        },
        render: () => <WaitingList />
      },
      {
        menuItem: {
          key: "patient",
          icon: "users",
          content: "Patient Monitoring",
          position: "left"
        },
        render: () => <PatientMonitoring />
      },
      {
        menuItem: {
          key: "infection",
          icon: "users",
          content: "Infection Control",
          position: "left"
        },
        render: () => <InfectionControl />
      },
      {
        menuItem: {
          key: "symptoms",
          icon: "users",
          content: "Reported Symptoms",
          position: "left"
        },
        render: () => <ReportedSymptoms />
      },
      {
        menuItem: {
          key: "hospital",
          icon: "users",
          content: "Hospital Capacity",
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
          content: "Public Advisory",
          position: "left",
          disabled: "true"
        },
        render: () => <Tab.Pane>Public Advisory</Tab.Pane>
      },
      {
        menuItem: {
          key: "user",
          icon: "users",
          content: "User Management",
          position: "left",
          disabled: "true"
        },
        render: () => <Tab.Pane>User Management</Tab.Pane>
      },
      {
        menuItem: {
          key: "vaccine",
          icon: "users",
          content: "Vaccine Status",
          position: "left",
          disabled: "true"
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

        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Message visible>Welcome, Mark!</Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Segment>
                <Segment.Group raised>
                  <Label attached="top">Account</Label>
                  <Segment>
                    Country: Philippines <br />
                    Organization: Department of Health <br />
                    Role: Admin
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
                menu={{ fluid: true, vertical: false, tabular: true }}
                panes={panes}
                defaultActiveIndex={0}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
