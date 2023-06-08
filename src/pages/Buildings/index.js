import React, { useEffect, useState } from 'react';

import { getCurrentBuildingsData } from 'api';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from '@mui/material';

import TRowMappingComponent from 'components/Buildings/TRowMappingComponent';

let PAGE_SIZE = 20;

const Buildings = () => {
  const [buildingdata, setBuildingdata] = useState([]);
  const getCurrentBuildings = async () => {
    const result = await getCurrentBuildingsData();

    if (result.data) {
      setBuildingdata(result.data.buildings);
    }
  };

  useEffect(() => {
    getCurrentBuildings();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      searchQuery.length > 0
    ) {
      return;
    }
    setBuildingdata((prevBuildings) => prevBuildings.concat([]));
  };

  useEffect(() => {
    PAGE_SIZE += 3;
  }, [buildingdata]);

  return (
    <Container maxWidth='md' className='pt-10'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Site</TableCell>
              <TableCell>Alerts</TableCell>
              <TableCell>Savings</TableCell>
              <TableCell>Uptime</TableCell>
              <TableCell>Power</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buildingdata
              .slice(0, PAGE_SIZE)
              .map(
                (item, i) =>
                  item && <TRowMappingComponent item={item} key={i} />
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Buildings;
