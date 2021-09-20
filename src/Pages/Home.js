import React from 'react';
import Container from '@material-ui/core/Container';


import SwipeableTextMobileStepper from '../Components/Movies';
import { red } from '@mui/material/colors';

import AirtelPrepaidCard from '../Components/AirtelPrepaidCard';
import AirtelPostpaidCard from '../Components/AirtelPostpaidCard';
import FullWidthTabs from '../Components/FullWidhTab';
import AirtelBlackCard from '../Components/AirtelBlack';
import AirtelSmallCard from '../Components/AirtelSmallCard';
import AirtelThanksCard from '../Components/AirtelThanksCard';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={red} alt="red"/>

        
            
          <FullWidthTabs/>  
         
          <SwipeableTextMobileStepper/>
          <br></br>
          <AirtelPrepaidCard/>
          <br></br>
          <AirtelPostpaidCard/>
          <br></br>
          <AirtelBlackCard/>
          <br></br>
          <AirtelSmallCard/>
          <br></br>
          <AirtelThanksCard/>



          <SwipeableTextMobileStepper/>
            
        </Container>
    </React.Fragment>
  );
}