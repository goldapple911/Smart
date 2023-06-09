import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import { getCurrenTeletubbyData } from 'api';
import renderTeletubbyCard from '../../components/Teletubby/index';

const Teletubbies = () => {
  const [numTeletubbiesToShow, setNumTeletubbiesToShow] = useState(20);
  const [visibleTeletubbies, setVisibleTeletubbies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef(null);
  const filteredTeletubbies = visibleTeletubbies.filter((teletubby) => {
    return teletubby.name.toLowerCase().includes(searchTerm.toLowerCase());
    
  });
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
  }, [numTeletubbiesToShow]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setNumTeletubbiesToShow(numTeletubbiesToShow + 1);
    }
  };

  useEffect(() => {   
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div>
      <Grid item md={4} lg={2} sm={6} xs={8} >
        <Typography
          variant='h3'
          sx={{
            width: '50%',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
          mt={12}
          mb={2}
        >
          Teletubbies
        </Typography>
      </Grid>
      <div ref={containerRef}>
        <TextField
          label='Search Teletubbies'
          variant='outlined'
          width='50%'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ marginBottom: '20px' }}
        />
        {filteredTeletubbies.length === 0 ? (
          <p>There is no teletubby</p>
        ) : (
        <Grid
          container
          spacing={1}
          sx={{
            '& > div': { border: '1px solid black' },
          }}
          style={{ textAlign: 'left' }}
        >
          {filteredTeletubbies
            .slice(0, numTeletubbiesToShow)
            .map((teletubby, index) => renderTeletubbyCard(teletubby, index))}
        </Grid>)}
      </div>
    </div>
  );
};

export default Teletubbies;
