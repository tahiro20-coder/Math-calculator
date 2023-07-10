import React from 'react'
import { FormGroup ,FormControlLabel,Checkbox} from '@mui/material';
const Checker = ({label,check,HandleCheckchange}) => {
  return (
    <div>
        <FormGroup>
        <FormControlLabel control={<Checkbox  checked={check} onChange={()=>{
          if(check === 0){
            HandleCheckchange(1)
          }else{
            HandleCheckchange(0)
          }
        }}/>} label={label} />
        </FormGroup>
    </div>
  )
}

export default Checker