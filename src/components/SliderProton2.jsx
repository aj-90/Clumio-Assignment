import React from 'react';
import {Select ,MenuItem, FormControl, InputLabel} from '@material-ui/core'


function SliderProton2({ handleto,value }) {
return (
  <div>
    <FormControl >
    <InputLabel >To</InputLabel>
    <Select onChange={handleto} value={value} >
  <MenuItem value={2020}>2020</MenuItem>
  <MenuItem value={2021}>2021</MenuItem>
  <MenuItem value={2022}>2022</MenuItem>
</Select>
</FormControl>
  </div>
);

}

export default SliderProton2;
