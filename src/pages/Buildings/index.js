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

    console.log(result.data, "adfadfdfsdfas");
    if (result.data) {
      console.log(result.data.buildings);
      setBuildingdata(result.data.buildings);
    }
  };
  useEffect(() => {
    getCurrentBuildings();
  }, []);

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
              buildingdata.map(
                (item, i) => item && <TRowComponent item={item} />
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
export default Buildings;
