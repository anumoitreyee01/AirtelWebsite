import React from 'react';
import Container from '@material-ui/core/Container';


import SwipeableTextMobileStepper from '../Components/Movies';
import { red } from '@mui/material/colors';

import AirtelPrepaidCard from '../Components/AirtelPrepaidCard';
import AirtelPostpaidCard from '../Components/AirtelPostpaidCard';
import FullWidthTabs from '../Components/FullWidhTab';
import AirtelBlackCard from '../Components/AirtelBlack';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={red} alt="red"/>

        
            
          <FullWidthTabs/>  
         
          <SwipeableTextMobileStepper/>
          <AirtelPrepaidCard/>
          <AirtelPostpaidCard/>
          <AirtelBlackCard/>



          <SwipeableTextMobileStepper/>
            
        </Container>
    </React.Fragment>
  );
}