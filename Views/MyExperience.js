import React from "react";
import { Grid, Typography,Stack } from "@mui/material";

//components
import Technologies from "../components/Technologies";

const MyExperience = () => {
  return (
    <Grid container sx={{ minHeight: "100vh" }} 
    alignItems="center" >
      <Grid data-aos="zoom-out-right">
      <Typography variant="h3" className="headerAnim" >
        <span>My Experience</span> & <span>Technologies</span>
        </Typography>
      <Typography variant="h6" color="secondary" className="headerAnim">
        <span>1 year experience in 3D modeling and texturing.</span> 
      </Typography>
      <Typography variant="h6" color="secondary" className="headerAnim">
        <span> I have worked on architectural visualization projects.</span>
      </Typography>
      <Typography variant="h6" color="secondary" className="headerAnim">
        <span> I have using Blender, Unity and ZBrush</span>
      </Typography>
      </Grid>

      <Technologies />

    </Grid>
  );
};

export default MyExperience;
