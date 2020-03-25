import React, { Component } from "react";
import { Button, Icon, Menu, Tab, Table } from "semantic-ui-react";

class InfectionControl extends Component {
  state = {};
  render() {
    return (
      <Tab.Pane>
        <Table compact celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Location</Table.HeaderCell>
              <Table.HeaderCell>Alert Level</Table.HeaderCell>
              <Table.HeaderCell>PUI</Table.HeaderCell>
              <Table.HeaderCell>PUM</Table.HeaderCell>
              <Table.HeaderCell>Infected</Table.HeaderCell>
              <Table.HeaderCell>Recovered</Table.HeaderCell>
              <Table.HeaderCell>Last Updated On </Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell>
                <Button.Group basic fluid>
                  <Button>Update</Button>
                  <Button>Delete</Button>
                </Button.Group>
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
                  <Icon name="user" /> Add Location
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

export default InfectionControl;
