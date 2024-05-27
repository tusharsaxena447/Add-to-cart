import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Single() {
    const params = useParams()
    const[data,setData] = useState([])
    console.log(params)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(datas => setData(datas))
    },[params.id])
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  )
}
