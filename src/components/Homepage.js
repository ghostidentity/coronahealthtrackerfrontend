import React, { useCallback, useState } from "react";
import { animated, useTransition } from "react-spring";
import { Button, Divider, Grid, Header, Icon, Item, Message, Segment, Statistic } from "semantic-ui-react";
import "../styles/homepage.css";
const axios = require('axios').default;

function login() {
  axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

const advisory = [
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightblue" }}>
      Vaccine 1
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightgreen" }}>
      Vaccine 2
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: "lightpink" }}>
      Vaccine 3
    </animated.div>
  )
];

export default function Homepage() {
  const [index, set] = useState(0);

  const onClick = useCallback(() => set(state => (state + 1) % 3), []);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={16}>
          <Segment clearing>
            <Item>
              <Button
                basic
                floated="right"
                size="mini"
                key="login"
                onClick={login}
              >
                <Icon name="key" />
                login
              </Button>
              <Button basic floated="right" size="mini" key="mini">
                <Icon name="edit" />
                register
              </Button>
            </Item>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={16}>
          <Message
            attached
            content="Enhance community quarantine nationwide, effective today."
            color="red"
          />
          <Divider hidden />
        </Grid.Column>

        <Grid.Column width={16}>
          <Item className="advisoryRow">
            <div className="advisory" onClick={onClick}>
              {transitions.map(({ item, props, key }) => {
                const Page = advisory[item];
                return <Page key={key} style={props} />;
              })}
            </div>
          </Item>
        </Grid.Column>

        <Grid.Column width={16}>
          <Divider horizontal>
            <Header as="h4">
              <Icon name="heartbeat" />
              Local Infections
            </Header>
          </Divider>
          <Segment>
            <Statistic.Group widths="five">
              <Statistic>
                <Statistic.Value>8,990</Statistic.Value>
                <Statistic.Label>PUM</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>5,450</Statistic.Value>
                <Statistic.Label>PUI</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>60,000</Statistic.Value>
                <Statistic.Label>Infected</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>86,9849</Statistic.Value>
                <Statistic.Label>Recovered</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>60,304</Statistic.Value>
                <Statistic.Label>Died</Statistic.Label>
              </Statistic>
            </Statistic.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
