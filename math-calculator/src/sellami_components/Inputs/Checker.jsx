import React from 'react'

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