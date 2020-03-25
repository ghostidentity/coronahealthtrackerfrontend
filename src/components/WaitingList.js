import React, { Component } from "react";
import {
  Button,
  Grid,
  Item,
  Label,
  Segment,
  Tab,
  List,
  Image
} from "semantic-ui-react";

class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Tab.Pane>
        <Grid>
          <Grid.Column width={8}>
            <Item.Group divided>
              <Label attached="bottom left">Waiting list</Label>
              <Item>
                <Item.Image
                  size="small"
                  src="https://react.semantic-ui.com/images/wireframe/image.png"
                />
                <Item.Content verticalAlign="middle">
                  <Item.Header>John Santos</Item.Header>
                  <Item.Description>
                    <Segment>
                      Gender: Male <br />
                      Age: 24 <br />
                      Address: Manila <br />
                      Symptoms: Difficulty Breathing
                    </Segment>
                  </Item.Description>
                  <Item.Extra>
                    <Button floated="left">View Profile</Button>
                    <Button.Group basic fluid>
                      <Button>Update</Button>
                      <Button>Delete</Button>
                    </Button.Group>
                  </Item.Extra>
                </Item.Content>
              </Item>
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={8}>
            <List divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                  <Button>Delete</Button>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <List.Content>Lena --[Waiting to be picked]</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Delete</Button>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <List.Content>Lindsay --[Waiting to be picked]</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Delete</Button>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <List.Content>Mark --[Waiting to be picked]</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                  <Button>Delete</Button>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/rachel.png"
                />
                <List.Content>Molly --[Waiting to be picked]</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </Tab.Pane>
    );
  }
}

export default WaitingList;
