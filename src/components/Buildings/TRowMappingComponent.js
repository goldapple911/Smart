import React from 'react';

import {
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const TRowMappingComponent = (props) => {
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
export default TRowMappingComponent;
