import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import AirtelBlackButton from './AirtelBlackButton';


export default function AirtelBlackCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography  variant="body2" color="text.secondary">
           <center> BLACK</center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Enjoy first 30 days free of a new service with Airtel Black
          </Typography>
          <AirtelBlackButton/>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
