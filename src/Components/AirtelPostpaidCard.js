import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ContainedButtons from './Button';

export default function AirtelPostpaidCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography  variant="body2" color="text.secondary">
           <center> Airtel Unlimited Postpaid </center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Airtel Postpaid starting at ₹499
          </Typography>
          <ContainedButtons/>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
