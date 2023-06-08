import React from 'react';

import {
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Fab,
  Typography,
} from '@mui/material';

const BuildingTableRow = (props) => {
  return (
    <TableRow>
      <TableCell>{props.id + 1}</TableCell>
      <TableCell>
        <Typography variant='h6'>{props.item.Name}</Typography>
      </TableCell>
      <TableCell>
        <List>
          <ListItem disablePadding>
            <Fab
              size='small'
              sx={
                props.item.Alerts.high.count
                  ? {
                      backgroundColor: '#f69e3d',
                      mx: 1,
                      fontWeight: 'bold',
                      zIndex: 1,
                    }
                  : {
                      backgroundColor: '#eeeeee',
                      mx: 1,
                      fontWeight: 'bold',
                      zIndex: 1,
                    }
              }
              aria-label='add'
            >
              <ListItemText primary={props.item.Alerts.high.count || 0} />
            </Fab>
            <Fab
              size='small'
              sx={
                props.item.Alerts.med.count
                  ? { backgroundColor: '#f69e3d', mx: 1, zIndex: 1 }
                  : {
                      backgroundColor: '#eeeeee',
                      mx: 1,
                      fontWeight: 'bold',
                      zIndex: 1,
                    }
              }
              aria-label='add'
            >
              <ListItemText primary={props.item.Alerts.med.count || 0} />
            </Fab>
            <Fab
              size='small'
              sx={
                props.item.Alerts.low.count
                  ? { backgroundColor: '#ff4850', mx: 1, zIndex: 1 }
                  : {
                      backgroundColor: '#eeeeee',
                      mx: 1,
                      fontWeight: 'bold',
                      zIndex: 1,
                    }
              }
              aria-label='add'
            >
              <ListItemText primary={props.item.Alerts.low.count || 0} />
            </Fab>
          </ListItem>
        </List>
      </TableCell>
      <TableCell>
        <Fab
          variant='extended'
          sx={
            props.item.Savings.slice(0, props.item.Savings.length - 1) < 100
              ? { backgroundColor: '#ffd8d9', mx: 1, zIndex: 1, color: 'red' }
              : { backgroundColor: '#eeeeee', mx: 1, zIndex: 1, color: 'red' }
          }
        >
          {props.item.Savings}
        </Fab>
      </TableCell>
      <TableCell>
        <Fab
          variant='extended'
          sx={
            props.item.Uptime.slice(0, props.item.Uptime.length - 1) < 100
              ? { backgroundColor: '#ffd8d9', mx: 1, zIndex: 1, color: 'red' }
              : {
                  backgroundColor: '#eeeeee',
                  mx: 1,
                  zIndex: 1,
                  color: 'red',
                }
          }
        >
          {props.item.Uptime}
        </Fab>
      </TableCell>
      <TableCell sx={{ color: 'lightgreen' }}>{props.item.Power}</TableCell>
    </TableRow>
  );
};
export default BuildingTableRow;
