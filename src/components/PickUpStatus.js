import React, { Component } from "react";
import { Button, Image, List } from "semantic-ui-react";

class PickUpStatus extends Component {
  state = {};
  render() {
    return (
      <List divided>
      <List.Item>
        <List.Content floated="right">
          <Button.Group basic>
            <Button>View Status</Button>
            <Button>Delete</Button>
          </Button.Group>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
        />
        <List.Content>Lena</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button.Group basic>
            <Button>View Status</Button>
            <Button>Delete</Button>
          </Button.Group>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
        />
        <List.Content>Lindsay</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button.Group basic>
            <Button>View Status</Button>
            <Button>Delete</Button>
          </Button.Group>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
        />
        <List.Content>Mark</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated="right">
          <Button.Group basic>
            <Button>View Status</Button>
            <Button>Delete</Button>
          </Button.Group>
        </List.Content>
        <Image
          avatar
          src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
        />
        <List.Content>Molly</List.Content>
      </List.Item>
    </List>
    );
  }
}

export default PickUpStatus;
