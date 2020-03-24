import React, { Component } from "react";
import { Button, Checkbox, Icon, Table, Tab, Menu } from "semantic-ui-react";

class PatientMonitoring extends Component {
  state = {};
  render() {
    return (
      <Tab.Pane>
        <Table compact celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Patient ID</Table.HeaderCell>
              <Table.HeaderCell>Patient Name</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Test Result</Table.HeaderCell>
              <Table.HeaderCell>Viral Strain</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Hospital</Table.HeaderCell>
              <Table.HeaderCell>Admission Date</Table.HeaderCell>
              <Table.HeaderCell>Discharged Date</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Danica Reyes</Table.Cell>
              <Table.Cell>Female</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>Makati, Philippines</Table.Cell>
              <Table.Cell>Positive</Table.Cell>
              <Table.Cell>S Type</Table.Cell>
              <Table.Cell>Recovering</Table.Cell>
              <Table.Cell>St. Lukes Hospital</Table.Cell>
              <Table.Cell>March 23, 2019</Table.Cell>
              <Table.Cell>March 24, 2019</Table.Cell>
              <Table.Cell>
                <Button> Update Status</Button>
                <Button> Delete</Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell colSpan="12">
                <Button
                  floated="left"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Add Patient
                </Button>
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Tab.Pane>
    );
  }
}

export default PatientMonitoring;
