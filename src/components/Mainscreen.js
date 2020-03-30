import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  Divider,
  Grid,
  Label,
  Menu,
  Message,
  Segment,
  Tab
} from "semantic-ui-react";
import HospitalCapacity from "./HospitalCapacity";
import InfectionControl from "./InfectionControl";
import PatientMonitoring from "./PatientMonitoring";
import ReportedSymptoms from "./Reported Symptoms";
import AdmissionRequest from "./AdmissionRequest";
import Socket from "./Socket";

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

function Mainscreen() {
  const [activeItem, setActiveItem] = useState(0);
  const childRef = useRef();

  return (
    <React.Fragment>
      <Socket ref={childRef} />
      <Menu>
        <Menu.Menu position="left">
          <Menu.Item name="Health Tracker" />
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={() => childRef.current.sendMessage("temp")}
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
                  New: 2,323
                  <Divider />
                  Infected: 34,223 <br />
                  Recovered: 12,323 <br />
                  Died: 18,099 <br />
                  Awaiting Result: 3,223
                  <Divider />
                  <b> Total: 66, 968</b>
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

export default Mainscreen;
