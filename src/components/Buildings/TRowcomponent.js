import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const TRowComponent = (props) => {
  return (
    <TableRow>
      <TableCell>{props.item.Name}</TableCell>
      <TableCell>
        <List>
          <ListItem disablePadding>
            <ListItemText
              primary={
                props.item.Alerts.high.count === undefined
                  ? 0
                  : props.item.Alerts.high.count
              }
            />
            <ListItemText
              primary={
                props.item.Alerts.med.count === undefined
                  ? 0
                  : props.item.Alerts.med.count
              }
            />
            <ListItemText
              primary={
                props.item.Alerts.low.count === undefined
                  ? 0
                  : props.item.Alerts.low.count
              }
            />
          </ListItem>
        </List>
      </TableCell>
      <TableCell>{props.item.Savings}</TableCell>
      <TableCell>{props.item.Uptime}</TableCell>
      <TableCell>{props.item.Power}</TableCell>
    </TableRow>
  );
};
export default TRowComponent;
