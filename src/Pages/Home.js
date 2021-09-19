import React from 'react';
import Container from '@material-ui/core/Container';
import DatePickers from '../Components/DateTimePicker';
import ContainedButtons from '../Components/Button';
import SwipeableTextMobileStepper from '../Components/Movies';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
             <ContainedButtons/>
            <p>
                Welcome to your web application. Make something beautiful!
            </p>
            <p>
                To get started, edit <code>src/App.js</code>, save, and reload this page.
            </p>
            <DatePickers/>
            <SwipeableTextMobileStepper/>
            
        </Container>
    </React.Fragment>
  );
}