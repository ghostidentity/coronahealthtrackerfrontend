import React, { Component } from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";

class HospitalCapacity extends Component {
  state = {};
  render() {
    return (
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Hospital Name</Table.HeaderCell>
            <Table.HeaderCell>Type</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Available Rooms</Table.HeaderCell>
            <Table.HeaderCell>Available Beds</Table.HeaderCell>
            <Table.HeaderCell>Available Testing Kits</Table.HeaderCell>
            <Table.HeaderCell>Last Updated On</Table.HeaderCell>
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
              <Button> Update Status</Button>
              <Button> Delete </Button>
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
                  <Icon name="user" /> Add Hospital
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
    );
  }
}

export default HospitalCapacity;
