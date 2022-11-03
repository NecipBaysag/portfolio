import React from "react";
import { Grid, Typography, Stack, Link } from "@mui/material";

function Contact() {
  const connects = [
    {
      name: "Email",
      link: "mailto:nbaysag2002@gmail.com",
      icon: "",
    },
    {
      name: "İnstagram",
      link: "mailto:nbaysag2002@gmail.com",
      icon: "",
    },
    {
      name: "Discord",
      link: "mailto:nbaysag2002@gmail.com",
      icon: "",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/necip-baysa%C4%9F-9b6b1224a/",
      icon: "",
    },
    {
      name: "Sketchfab",
      link: "mailto:nbaysag2002@gmail.com",
      icon: "",
    },
  ];
  return (
    <Grid
      container
      sx={{ minHeight: "100vh" }}
      direction={{ xs: "column", sm: "column", md: "row" }}
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "start",
        lg: "start",
        xl: "start",
      }}
      alignContent="center"
      columnGap={5}
      data-aos="zoom-out-right"
    >
      <Grid>
        <Typography variant="h3" className="techsHeader">
          Connect
        </Typography>
      </Grid>
      <Grid alignContent="center">
        <Stack
          alignContent="center"
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={3}
          sx={{ marginTop: "1em" }}
        >
          {connects.map((connect, i) => (
            <Link key={i} href={connect.link} underline="none">
              <Typography
                className="techsHeader"
                color="secondary"
                variant="h5"
              >
                {connect.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Contact;
