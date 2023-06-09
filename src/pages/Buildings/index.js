/*eslint-disable*/
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

import BuildingTableRow from 'components/Buildings/BuildingTableRow ';
import InfiniteScroll from 'react-infinite-scroll-component';

const Buildings = () => {
  const [buildingData, setBuildingData] = useState([]);
  const [buildings, setBuildings] = useState([]);

  const getCurrentBuildings = async () => {
    const result = await getCurrentBuildingsData();

    if (result.data) {
      setBuildingData(result.data.buildings);
    }
  };

  useEffect(() => {
    getCurrentBuildings();
  }, []);

  const getBuildings = (start, end) => {
    if (start === 0) {
      setBuildings(buildingData.slice(start, end));
    } else {
      setBuildings([...buildings, ...buildingData.slice(start, end)]);
    }
  };

  useEffect(() => {
    console.log(buildingData);
    if (buildingData.length) getBuildings(0, 20);
  }, [buildingData]);

  const handleNext = () => {
    getBuildings(buildings.length, buildings.length + 20);
  };

  return (
    <InfiniteScroll
      dataLength={buildings.length}
      next={handleNext}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Container maxWidth='md' sx={{ mt: 5 }}>
        <TableContainer sx={{ maxHeight: 700 }} mt={4}>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
            <TableHead sx={{ zIndex: 2 }}>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>Site</TableCell>
                <TableCell>Alerts</TableCell>
                <TableCell>Savings</TableCell>
                <TableCell>Uptime</TableCell>
                <TableCell>Power</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {buildings.map(
                (item, i) =>
                  item && <BuildingTableRow item={item} key={i} id={i} />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </InfiniteScroll>
  );
};
export default Buildings;
