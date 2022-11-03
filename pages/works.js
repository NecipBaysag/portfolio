import React from 'react'
import { Grid, Typography,ImageList,Container, Link } from "@mui/material";
import PanelModelViewer from "../components/PanelModelViewer";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Head from "next/head";
import "aos/dist/aos.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function ModelPanel() {
  const [modelPath,setModelPath] = React.useState("/models/1-alarm.glb");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const modelList = [
    {
      name: "Model 1",
      image: "https://picsum.photos/200/200?random=1",
      model: "/models/1-alarm.glb"
    },
    {
      name: "Model 2",
      image: "https://picsum.photos/200/200?random=2",
      model: "/models/2-cycle.glb"
    },
    {
      name: "Model 3",
      image: "https://picsum.photos/200/200?random=3",
      model: "/models/3-cake.glb"
    },
    {
      name: "Model 4",
      image: "https://picsum.photos/200/200?random=4",
      model: "/models/4-earth.glb"
    },
    {
      name: "Model 5",
      image: "https://picsum.photos/200/200?random=5",
      model: "/models/5-iglo.glb"
    },
    {
      name: "Model 6",
      image: "https://picsum.photos/200/200?random=6",
      model: "/models/6-newspaper.glb"
    }]
   
  return (
    <Container maxWidth="lg" sx={{paddingTop:'2em'}} >
      <Grid container sx={{minHeight:'100vh'}} alignContent="center" direction="column" data-aos="zoom-out-right">
      <Head>
        <title>Necip Baysağ</title>
      </Head>

      <Grid marginBottom={5} container direction="row" >
        <Typography variant="h3" className='techsHeader'>My Works</Typography>
        <Link href="/" marginY="auto" marginX="1em">
          <ArrowBackIcon sx={{fontSize:'2.5em'}} color="secondary" marginY="auto" />
        </Link>
      </Grid>

      <Grid  container spacing={2} columns={16} sx={{border:'3px dashed #9c27b0',borderRadius:'1em'}}>
        <Grid item xs={16} md={7} >
           <PanelModelViewer modelPath={modelPath}/>
        </Grid>
        <Grid item xs={16} md={9} sx={matches?{borderLeft:'3px dashed #9c27b0'}:{borderTop:'3px dashed #9c27b0'}}>
          <ImageList className='imgliste' variant="quilted" cols={3} sx={{maxWidth:'max-content',maxHeight:'65vh'}} gap={3} >
          {modelList.map((item) => (
              <Image
                key={item.name}
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                title={item.name}
                onClick={() => setModelPath(item.model)}
              />
            ))}{modelList.map((item) => (
              <Image
                key={item.name}
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                title={item.name}
                onClick={() => setModelPath(item.model)}
              />
            ))}{modelList.map((item) => (
              <Image
                key={item.name}
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                title={item.name}
                onClick={() => setModelPath(item.model)}
              />
            ))}
          </ImageList>
    
          </Grid>
        </Grid>  
    </Grid>
    </Container>
  )
}

export default ModelPanel

const panel = () => {
  return (
    <Grid  container spacing={2} columns={16} sx={{border:'3px dashed #9c27b0',borderRadius:'1em'}}>
    <Grid item xs={16} md={8} >
       <PanelModelViewer modelPath={modelPath}/>
    </Grid>
    <Grid item xs={16} md={8} sx={matches?{borderLeft:'3px dashed #9c27b0'}:{borderTop:'3px dashed #9c27b0'}}>
      <ImageList variant="masonry" cols={3} sx={{maxHeight:'60vh'}} >
        {modelList.map((item) => (
          <Image
            key={item.name}
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            title={item.name}
            onClick={() => setModelPath(item.model)}
          />
        ))}
      </ImageList>

      </Grid>
    </Grid>
  )
}