import React from 'react'
import { FormGroup ,FormControlLabel,Checkbox} from '@mui/material';
const Checker = ({label,check,HandleCheckchange}) => {
  return (
    <div>
        <FormGroup>
        <FormControlLabel control={<Checkbox  checked={check} onChange={()=>{
          if(check === false){
            HandleCheckchange(true)
          }else{
            HandleCheckchange(false)
          }
        }}/>} label={label} />
        </FormGroup>
    </div>
  )
}

export default Checker