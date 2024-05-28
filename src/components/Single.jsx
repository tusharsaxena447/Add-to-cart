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
    const [load,setload] = useState(true)
    console.log(params)
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(datas => {setData(datas)
          setload(false)
        })
    },[params.id])
  return (
    <>
      {load ? <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" style={{height : "100%"}} alt="" />:
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="440"
          image={data.image}
          alt={data.title}
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
      }
    </>
  )
}
