import React, { Component } from "react";
import { Button, Container, Divider, Item } from "semantic-ui-react";
class WaitingList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Item.Group divided>
          <Item>
            <Item.Image
              size="small"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content verticalAlign="middle">
              <Item.Header>John Santos</Item.Header>
              <Item.Description>
                <Container>
                  <p>
                    Gender: Male <br />
                    Age: 24 <br />
                    Address: Manila <br />
                    Symptoms: Difficulty Breathing
                  </p>
                  <Divider />
                </Container>
              </Item.Description>
              <Item.Extra>
                <Button.Group basic fluid>
                  <Button>View Profile</Button>
                  <Button>Accept</Button>
                  <Button>Reject</Button>
                </Button.Group>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
    );
  }
}

export default WaitingList;
