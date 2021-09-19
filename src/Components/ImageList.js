import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import image1 from './../Assets/loki.jpg';
import image2 from './../Assets/rangbaaz.jpg';
import image3 from './../Assets/rabindra.jpg';
import image4 from './../Assets/mastani.jpg';
import image5 from './../Assets/herapheri.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


  
  const itemData = [
    {
    img: image1,
     title: 'Disney + Hotstar',
     author: 'Only â‚¹399',
    },
   
  ];
  const itemData2 = [
    {
    img2: image2,
     title: 'Zee5',
    author: 'Upto 55% off',
    },
   
  ];
  const itemData3 = [
    {
    img3: image3,
     title: 'Epicon',
    author: 'Starts from â‚¹29',
    },
   
  ];
  const itemData4 = [
    {
    img4: image4,
     title: 'Eros now',
    author: 'Only â‚¹39',
    },
   
  ];
  const itemData5 = [
    {
    img5: image5,
     title: 'ShemarooMe',
    author: 'Starts from â‚¹129',
    },
   
  ];
 
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {itemData2.map((item) => (
          <ImageListItem key={item.img2}>
            <img src={item.img2} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {itemData3.map((item) => (
          <ImageListItem key={item.img3}>
            <img src={item.img3} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {itemData4.map((item) => (
          <ImageListItem key={item.img4}>
            <img src={item.img4} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
        {itemData5.map((item) => (
          <ImageListItem key={item.img5}>
            <img src={item.img5} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}