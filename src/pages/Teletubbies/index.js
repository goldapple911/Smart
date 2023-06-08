import React, { useState, useRef, useEffect } from "react";
import { Grid, TextField, Typography } from "@mui/material"
import { getCurrenTeletubbyData } from 'api/index';

const Teletubbies = () => {
  const [teletubbies, setTeletubbies] = useState([]);

  const getTeletubbies = async () => {
    try {
      const response = await getCurrenTeletubbyData();
      setTeletubbies(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getTeletubbies();
  }, []);

  
}

export default Teletubbies;
