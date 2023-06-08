import React, { useEffect, useState } from "react";

import { getCurrentBuildingsData } from "api";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container } from "@mui/material";

import TRowComponent from "components/Buildings/TRowcomponent";

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

  // display 20 items in screen and more items whenever scroll downs

  // const [buildings, setBuildings] = useState(buildingsData.buildings);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
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
    <Container maxWidth="md" className="pt-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
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
            {buildingdata &&
              buildingdata
                .slice(0, PAGE_SIZE)
                .map((item, i) => item && <TRowComponent item={item} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Buildings;
