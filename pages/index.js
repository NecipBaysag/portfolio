import React from "react";
import Head from "next/head";
import { Container, Grid, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

//sections

import Begining from "../Views/Begining";
import MyExperience from "../Views/MyExperience";
import Contact from "../Views/Contact";

//components
import ScrollButton from "../components/ScrollButton";

function Home() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>Necip Baysağ</title>
      </Head>
   
      <Begining />
      <ScrollButton count={1} />
      <MyExperience />
      <ScrollButton count={2} />
      <Grid
        container
        sx={{ minHeight: "100vh" }}
        alignContent="center"
        justifyContent="center"
      >
        <Link href="/works">
          <Typography
            className="workLink"
            variant="h3"
            color="secondary"
            sx={{ fontFamily: "Roboto" }}
            data-aos="zoom-out-right"
          >
            {"`"}re you wanna look My Works
          </Typography>
        </Link>
      </Grid>
      <ScrollButton count={3} />
      <Contact />
    </Container>
  );
}

export default Home;
