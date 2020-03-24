import React, { Component } from 'react'
import {
    Grid,
    Tab,
    Item,
    Button,
    Segment,
    Label,
  } from "semantic-ui-react";

class WaitingList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
                        <Button floated="right">Approve</Button>
                        <Button floated="right">Reject</Button>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Grid.Column>
              <Grid.Column width={8}></Grid.Column>
            </Grid>
          </Tab.Pane>
        );
    }
}

export default WaitingList;