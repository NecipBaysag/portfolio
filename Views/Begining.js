import React from "react";
import { Grid, Typography,Stack } from "@mui/material";
import HeaderModelViewer from "../components/HeaderModelViewer";

const Begining = ({selectedPanel}) => {
  const [isopen,setIsopen] = React.useState(0);
  React.useEffect(() => {
    setIsopen(selectedPanel);
  }, [selectedPanel]);
  return (
    <Grid container sx={{minHeight:'100vh'}} >
      <Grid
        container
        item
        xs={12}
        md={6}
        direction="row"
        justifyContent="center"
        alignItems="center"
        zIndex="1"
      >
        <Stack  >
          <Typography className="headerAnim" variant="h2" sx={{ fontFamily: "Nunito"}} data-aos="zoom-out-up">
            <span>Necip</span> <span>Baysağ </span>
          </Typography>
          <Typography className="headerAnim" variant="h4" color="secondary" sx={{ fontFamily: "Roboto" }} data-aos="zoom-out-right">
            <span>I`m</span> Junior <span>3D Artist</span>
          </Typography>
        </Stack>
      </Grid>
      <Grid  container
        item
        xs={12}
        md={6}
        direction="row"
        justifyContent="center"
        alignItems="center" >
        {isopen===0 ? <HeaderModelViewer/>:<HeaderModelViewer/>}
      </Grid>
    </Grid>
  );
};

export default Begining;
