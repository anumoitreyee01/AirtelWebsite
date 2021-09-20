import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ContainedButtons from './Button';

export default function AirtelPrepaidCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           <center> Airtel Unlimited Prepaid </center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Talk Unlimited
          </Typography>
          <ContainedButtons/>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
