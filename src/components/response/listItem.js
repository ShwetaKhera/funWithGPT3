import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';


function listItem(props) {
  const { index, style, data } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <Card sx={{ width: "100%" }}>
        <CardContent>
          <Typography variant="h6" component="div" style={{color:"darkgray"}}>
            {data[index].input}
          </Typography>

          <Typography variant="body1">
            {data[index].output}
          </Typography>
        </CardContent>

      </Card>
    </ListItem>
  );
}

export default listItem;