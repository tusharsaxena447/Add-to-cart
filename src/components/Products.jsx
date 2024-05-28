/* eslint-disable react/prop-types */
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

export default function Products({data,load}) {
  const dispatch = useDispatch()
  return (
    <>
    {load ? <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" style={{height : "100%"}} alt="" />:
    <div style={{display : "flex", flexWrap: "wrap", gap:"15px",margin:"5px"}} >
    {data.map((e)=>
    <Card key={e.id} sx={{ maxWidth: 345 }}>
    <Link to={`/single/${e.id}`}>
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
      </Link>
      <CardActions>
        <Button onClick={()=> dispatch(addToCart(e))} sx={{fontSize: "15px", position: "relative", bottom: "-1"}} size="medium" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )}
    </div>
    }
    </>
)
}
