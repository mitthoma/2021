import React, { useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Container, Header, Grid, Menu } from 'semantic-ui-react';
import AnimationBox from './components/AnimationBox';
import Trail from './components/NameTrail';
import Typist from 'react-typist';
import ExpSection from './components/ExpSection';
import Layout from './components/Layout';
import WorkItem from './components/WorkItem';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from './components/About';
import ContactForm from './components/ContactForm';
import FadeInSection from './components/FadeInSection';

function App() {



    return (
        <div className="App">

          <Layout />
          <FadeInSection>

          <Grid container={true}>
              <Grid.Row className="newGridRow" columns={2}>
                <Grid.Column computer={8} mobile={16} >
                  <h1 className="mobileHeader">MITCHELL</h1>
                  <h1 className="mobileHeader">THOMAS</h1>
                  <h3 className="mobileHeaderh3">Senior Full Stack Software Engineer.</h3>

                </Grid.Column>
                <Grid.Column  width={8}>
                <Typist>
                  <h3 className="boxText"></h3>
                  <br />
                  <h4 className="boxText">
                    Typescript
                  </h4>
                  <h4 className="boxText">
                    Vue/Nuxt
                  </h4>
                  <h4 className="boxText">
                    React/Next
                  </h4>
                  <h4 className="boxText">
                    Python & AI/ML
                  </h4>
                  <h4 className="boxText">
                    Android/Java
                  </h4>
                  <h4 className="boxText">
                    Javascript/HTML/CSS/SCSS
                  </h4>
                  <h4 className="boxText">
                    MySQL/PostgreSQL
                  </h4>
                  <h4 className="boxText">
                    AWS/Azure
                  </h4>
                  <h4 className="boxText">
                    Solidity/JS
                  </h4>
                  <h4 className="boxText">
                    Redis
                  </h4>
                  <h4 className="boxText">
                    TypeORM/Prisma
                  </h4>
                  <h4 className="boxText">
                    MongoDB
                  </h4>
                </Typist>

                </Grid.Column>
              </Grid.Row>

            <Grid.Row className="typeRow">
              <Grid.Column width={16}>
                {/* <Typist avgTypingDelay={18} stdTypingDelay={50}> */}
                  {/* <Typist.Delay ms={3000} /> */}
                  <h3 className="type_sentence">

                  I'm a coder. I have 6 years of experience helping 30+ individuals and businesses build web products and software that helps them achieve success with their goals. I work in the unique intersection of being a seasoned software engineer and a communicator who works to bridge the understanding gap of the rapidly moving tech space. So I would love to chat if you have any questions about the space or how you could move forward.
<br></br>
<br></br>

I've worked with machine learning/AI, blockchain, and full-stack web development. I have been in a professional full-stack role  for 5+ years with my own company, Blacsand, as well as OPEN Health, a leading company in the Biotech industry for close to 3 years. At OPEN Health we have worked on many applications all striving to improve control and customizability of the event management space for many major companies in the industry.
<br></br>
<br></br>
I am a 2019 graduate of Indiana University. I received a B.S. in Computer Science with a specialization in Artificial Intelligence and a minor in Human Centered Computing.
                  <br />
                  <br />
                  

                  
                  Co-Founder of Blacsand, LLC


                  </h3>
                {/* </Typist> */}

              </Grid.Column>
            </Grid.Row>
          </Grid>
          </FadeInSection>

          <div id="work"></div>
          <FadeInSection>
          <Grid>

            <Grid.Row  className="experience_row">
                <ExpSection />
            </Grid.Row>

            <Grid.Row >
                <Grid.Column  id="contact" className="myForm" width={16}>
                  <Container>
                    <h1 className="sectionHeader">CONTACT</h1>
                    <br />
                    <a href="mailto:mitthoma@gmail.com"><h3>mitthoma@gmail.com</h3></a>
                    <br />
                    <a href="https://www.linkedin.com/in/mitchellthecoder/"><Button className="workButton">LinkedIn</Button></a>
                    <a href="https://github.com/mitthoma"><Button className="workButton">Github</Button></a>
                    <a href="https://mitchellthecoder.medium.com/"><Button className="workButton">Medium Blog</Button></a>



                  </Container>
                </Grid.Column>
            </Grid.Row>

          </Grid>
          </FadeInSection>

        </div>
    );
}

export default App;
