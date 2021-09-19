import React from 'react';
import Container from '@material-ui/core/Container';


import SwipeableTextMobileStepper from '../Components/Movies';
import vector from './../Assets/vector.jpg';

import AirtelPrepaidCard from '../Components/AirtelPrepaidCard';
import AirtelPostpaidCard from '../Components/AirtelPostpaidCard';
import FullWidthTabs from '../Components/FullWidhTab';
import AirtelBlackCard from '../Components/AirtelBlack';
import AirtelSmallCard from '../Components/AirtelSmallCard';
import AirtelThanksCard from '../Components/AirtelThanksCard';
import TextButton from '../Components/BackToTopTextButton';



export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={vector} alt="vector" height="220px" width="370px" />

        
            
          <FullWidthTabs/>  
         
          <SwipeableTextMobileStepper/>
          
          <AirtelPrepaidCard/>
          
          <AirtelPostpaidCard/>
          
          <AirtelBlackCard/>
          
          <AirtelSmallCard/>
          
          <p> Entertainment</p>
          <SwipeableTextMobileStepper/>
          
          <AirtelThanksCard/>
         
         <TextButton/>
         <footer/>
            
        </Container>
    </React.Fragment>
  );
}