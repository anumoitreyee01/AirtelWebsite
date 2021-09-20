import React from 'react';
import Container from '@material-ui/core/Container';


import SwipeableTextMobileStepper from '../Components/Movies';
import { red } from '@mui/material/colors';
import BasicTabs from '../Components/Tab';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={red} alt="red"/>

        
            
            
          <BasicTabs/>
            <SwipeableTextMobileStepper/>
            
        </Container>
    </React.Fragment>
  );
}