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
import SingleLineImageList from '../Components/ImageList';





export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
          <img src={vector} alt="vector" height="220px" width="370px" />

        
            
          <FullWidthTabs/>  
         
          <SwipeableTextMobileStepper/>
          
          <AirtelPrepaidCard/>
          <br></br>
          <AirtelPostpaidCard/>
          <br></br>
          <AirtelBlackCard/>
          <br></br>
          <AirtelSmallCard/>
          <br></br>
          <p> Entertainment</p>
          <SwipeableTextMobileStepper/>
          <SingleLineImageList/>
          <AirtelThanksCard/>
         
         <TextButton/>
         <footer/>
            
        </Container>
    </React.Fragment>
  );
}