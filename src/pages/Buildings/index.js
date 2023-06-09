/*eslint-disable*/
import React, { useEffect, useState, useMemo } from 'react';

import Spinner from 'components/Spinner';
import { getCurrentBuildingsData } from 'api';

import {
  Table,
  TableBody,
  TableCell,
  TextField,
  TableHead,
  TableRow,
  Container,
} from '@mui/material';

import BuildingTableRow from 'components/Buildings/BuildingTableRow ';
import InfiniteScroll from 'react-infinite-scroll-component';

const Buildings = () => {
  const [buildingData, setBuildingData] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [search, setSearch] = useState();

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
    if (buildingData.length) getBuildings(0, 20);
  }, [buildingData]);

  const handleNext = () => {
    getBuildings(buildings.length, buildings.length + 2);
  };

  const filteredBuidings = useMemo(() => {
    if (search) {
      return buildings.filter((item) => {
        return item.Name.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return buildings;
    }
  }, [search, buildings]);

  return (
    <Container maxWidth='md' sx={{ mt: 15 }}>
      <TextField
        fullWidth
        label={'search'}
        id='margin-dense'
        margin='dense'
        mx={10}
        mt={20}
        onChange={(e) => setSearch(e.target.value)}
      />
      <InfiniteScroll
        dataLength={buildings.length}
        next={handleNext}
        hasMore={true}
        loader={
          <h4>
            <Spinner />
          </h4>
        }
      >
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
            {filteredBuidings.map(
              (item, i) =>
                item && <BuildingTableRow item={item} key={i} id={i} />
            )}
          </TableBody>
        </Table>
      </InfiniteScroll>
    </Container>
  );
};
export default Buildings;
