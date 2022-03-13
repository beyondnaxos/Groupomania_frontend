import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import adminPhoto from './adminPhoto.jpg';
import './AdminMsg.css';

export default function MultiActionAreaCard() {
  return (
    <Card 
    id='cardMsg'

    sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={adminPhoto}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Message du jour !
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Groupomania est fière de vous annoncer que nous avons décidé de faire un nouveau site internet.
              Nous avons décidé de le mettre en ligne pour que vous puissiez y accéder.
                
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}