/* eslint-disable react/prop-types */
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Products({data}) {
  return (
    <div style={{display : "flex", flexWrap: "wrap", gap:"15px",margin:"5px"}} >
    {data.map((e)=>
    <Card key={e.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={e.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {e.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {e.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )}
    </div>
)
}
