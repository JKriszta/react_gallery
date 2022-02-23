import React from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const Radios=({rbValue,handleChangeRb})=>{

console.log('Radios:', rbValue)

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Radios</FormLabel>
      <RadioGroup className="d-inline-flex"
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={rbValue}
        onChange={(e)=>handleChangeRb(e.target.value)}
      >
        <FormControlLabel value="all" control={<Radio />} label="All" />
        <FormControlLabel value="see" control={<Radio />} label="See" />
        <FormControlLabel value="mountain" control={<Radio />} label="Mountain" /> 
      </RadioGroup>
    </FormControl>
  )
}