import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { getCurrenTeletubbyData } from "api";
import renderTeletubbyCard from "../../components/Teletubby/index";

const Teletubbies = () => {
  const [numTeletubbiesToShow, setNumTeletubbiesToShow] = useState(20);
  const [visibleTeletubbies, setVisibleTeletubbies] = useState([]);

  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      setVisibleTeletubbies(response.data.slice(0, numTeletubbiesToShow));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeletubbies();
  }, [numTeletubbiesToShow]);

  const handleScroll = () => {
    console.error("here");
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setNumTeletubbiesToShow(numTeletubbiesToShow + 20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        mt={12}
        mb={3}
      >
        Teletubbies
      </Typography>

      <Grid
        container
        spacing={1}
        sx={{
          "& > div": { border: "1px solid black" },
        }}
        style={{ textAlign: "left" }}
      >
        {visibleTeletubbies.map((teletubby, index) =>
          renderTeletubbyCard(teletubby, index)
        )}
      </Grid>
    </div>
  );
};

export default Teletubbies;
