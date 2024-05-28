import { useEffect } from "react"
import { useSelector } from "react-redux"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Cart() {
  
  const carts = useSelector((state) => state.addToCart.value)
  useEffect(()=>{
    console.log(carts)
  },[carts])
  return (
    <>
      <div style={{display : "flex",flexWrap : 'wrap',gap : '15px'}}>
        {carts.map((e)=>(
          <Card key={e.id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
    </Card>
        ))}
      </div>
    </>
  )
}
