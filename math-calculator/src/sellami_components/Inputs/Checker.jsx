import React from 'react'
import { FormGroup ,FormControlLabel,Checkbox} from '@mui/material';
const Checker = ({label,check,HandleCheckchange}) => {
  return (
    <div>
        <FormGroup>
        <FormControlLabel control={<Checkbox  checked={check} onChange={HandleCheckchange}/>} label={label} />
        </FormGroup>
    </div>
  )
}

export default Checker