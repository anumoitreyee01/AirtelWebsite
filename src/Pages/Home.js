import React from 'react';
import Container from '@material-ui/core/Container';


import SwipeableTextMobileStepper from '../Components/Movies';
import { red } from '@mui/material/colors';
import FullWidthTabs from '../Components/FullWidthTab';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={red} alt="red"/>

        
            <FullWidthTabs/>
            
            
            <SwipeableTextMobileStepper/>
            
        </Container>
    </React.Fragment>
  );
}