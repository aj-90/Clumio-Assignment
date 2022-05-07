import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Select ,MenuItem, FormControl, InputLabel} from '@material-ui/core'
const useStyles = makeStyles({
  
});

const SliderProton = ({ handlefrom , value }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl >
      <InputLabel >From</InputLabel>
      <Select onChange={handlefrom} value={value}>
    <MenuItem value={2016}>2016</MenuItem>
    <MenuItem value={2017}>2017</MenuItem>
    <MenuItem value={2018}>2018</MenuItem>
    <MenuItem value={2019}>2019</MenuItem>
    <MenuItem value={2020}>2020</MenuItem>
    <MenuItem value={2021}>2021</MenuItem>
    <MenuItem value={2022}>2022</MenuItem>
  </Select>
</FormControl>
    </div>
  );
};

export default SliderProton;