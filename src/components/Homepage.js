import React, { useCallback, useState, useEffect, useRef } from "react";
import { animated, useTransition } from "react-spring";
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Item,
  Message,
  Segment,
  Statistic,
  Container
} from "semantic-ui-react";
import "../styles/homepage.css";
import axios from "axios";

export default function Homepage() {
  useEffect(() => {
    console.log("Homepage component loaded");
  });

  const vaccines = [
    {
      data: {
        title: "Remdesivir",
        description:
          "Remdesivir (development code GS-5734) is a novel antiviral drug in the class of nucleotide analogs. It was developed by Gilead Sciences as a treatment for Ebola virus disease and Marburg virus infections,[1] though it subsequently was found to show antiviral activity against other single stranded RNA viruses such as respiratory syncytial virus, Junin virus, Lassa fever virus, Nipah virus, Hendra virus, and the coronaviruses (including MERS and SARS viruses",
        status: "Trial Stage",
        release_date: "December 26, 2020"
      }
    },
    {
      data: {
        title: "BNT162",
        description:
          "Gilead is a longtime drugmaker best known for developing the first major cure for hepatitis-C in Sovaldi, a therapy that changed the standard of care for that disease but also kicked off the national debate about drug pricing. The company has experience developing and marketing HIV drugs, including Truvada for pre-exposure prophylaxis (PrEP), its preventive HIV medicine",
        status: "Planning Stage",
        release_date: "December 26, 2020"
      }
    }
  ];

  return (
    <React.Fragment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <MenuSection />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <MessageSection value="Enhance community quarantine nationwide, effective today." />
            <Divider hidden />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <VaccineSection data={vaccines} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <InfectionSection
              waiting="23"
              died="34"
              recovered="69"
              infected="60"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <footer>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container textAlign="left">Engineered by: Mark Tagab</Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container textAlign="right">
                <Icon
                  name="facebook"
                  size="large"
                  color="grey"
                  onClick={() => console.log("facebook")}
                />
                <Icon
                  name="linkedin"
                  size="large"
                  color="grey"
                  onClick={() => console.log("linked")}
                />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </footer>
    </React.Fragment>
  );
}

function MenuSection() {
  const login = () => {
    axios
      .get("http://localhost:8080/api/login")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };

  const register = () => {
    axios
      .get("http://localhost:8080/api/register")
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  };
  return (
    <Segment clearing>
      <Item>
        <Button basic floated="right" size="mini" key="login" onClick={login}>
          <Icon name="key" />
          login
        </Button>
        <Button basic floated="right" size="mini" key="mini" onClick={register}>
          <Icon name="edit" />
          register
        </Button>
      </Item>
    </Segment>
  );
}

function MessageSection({ value }) {
  useEffect(() => {
    console.log("Message Loaded");
  });

  return <Message attached content={value} color="red" size="big" />;
}

function VaccineSection({ data }) {
  useEffect(() => {
    console.log("Vaccine Loaded");
  });

  const vaccineItems = [];
  const [index, set] = useState(0);
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" }
  });

  data.map(entry =>
    vaccineItems.push(({ style }) => (
      <Grid>
        <Grid.Row>
          <Grid.Column width={13}>
            <animated.div style={{ ...style, background: "#FCFCFC", color: "black" }}>
                <Header as="h1">{entry.data.title}</Header>
                <Divider />
                <p>{entry.data.description}</p>
                <Divider />
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={8}>
                      <p>Status: {entry.data.status}</p>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right">
                      <p>Release Date: {entry.data.release_date}</p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
            </animated.div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ))
  );

  const onClick = useCallback(
    () => set(state => (state + 1) % data.length),
    []
  );
  return (
    <Item className="vaccineRow">
      <div className="vaccine" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
          const Page = vaccineItems[item];
          return <Page key={key} style={props} />;
        })}
      </div>
    </Item>
  );
}

function InfectionSection({ waiting, infected, recovered, died }) {
  useEffect(() => {
    console.log("Infection Loaded");
  });

  return (
    <Segment style={{ borderStyle: "solid", borderColor: "grey" }}>
      <Divider horizontal>
        <Header as="h5">
          <Icon name="heartbeat" />
          Local Infections
        </Header>
      </Divider>
      <Statistic.Group widths="four">
        <Statistic color="red">
          <Statistic.Value>{infected}</Statistic.Value>
          <Statistic.Label>Infected</Statistic.Label>
        </Statistic>
        <Statistic color="green">
          <Statistic.Value>{recovered}</Statistic.Value>
          <Statistic.Label>Recovered</Statistic.Label>
        </Statistic>
        <Statistic color="black">
          <Statistic.Value>{died} </Statistic.Value>
          <Statistic.Label>Died</Statistic.Label>
        </Statistic>
        <Statistic color="brown">
          <Statistic.Value>{waiting}</Statistic.Value>
          <Statistic.Label>Awaiting Test Result</Statistic.Label>
        </Statistic>
      </Statistic.Group>
      <Divider />
    </Segment>
  );
}
