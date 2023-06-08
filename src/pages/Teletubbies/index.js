import React, { useState, useRef, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { getCurrenTeletubbyData } from "api";
import renderTeletubbyCard from "../../components/Teletubby/index";
const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);

  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      setTeletubbies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTeletubbies();
  }, []);

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        mt={4}
        mb={3}
      >
        Teletubbies
      </Typography>

      <Grid
        container
        spacing={3}
        sx={{ "& > div": { border: "1px solid black" } }}
      >
        {teletubbies.map((teletubby, index) =>
          renderTeletubbyCard(teletubby, index)
        )}
      </Grid>
    </div>
  );
};

export default Teletubbies;
