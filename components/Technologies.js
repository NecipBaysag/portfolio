import React from 'react'
import { Grid,Stack, Typography } from '@mui/material'
import Image from 'next/image'

const Technologies = () => {
  return (
    <Grid container data-aos="zoom-out-right" >
        <Grid container   justifyContent="center" marginBottom="1em" >
            <Typography variant='h4' className='techsHeader'>Technologies</Typography>
        </Grid>
        
        <Grid item xs={12}  >
            <Stack
              direction="row"
              justifyContent="center"
              spacing={{xs:1, md:3, lg:5}}>
                <Image title="Blender" alt="blender" src="/techs/blender.png" width={100} height={100} />
                <Image title="Unity" alt="unity" src="/techs/unity.png" width={100} height={100} />
                <Image title="ZBrush" alt="zbrush" src="/techs/zbrush.png" width={100} height={100} />
            </Stack>
        </Grid>
        
    </Grid>
  )
}

export default Technologies