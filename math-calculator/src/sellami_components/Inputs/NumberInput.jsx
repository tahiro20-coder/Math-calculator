import React from 'react'
import Button from 'react-bootstrap/Button';
import { Dash,Plus } from "react-bootstrap-icons";
function NumberInput ({number,HandleChangeValue}){
    const min = 1
    const max = 10
    // const [number , setnumber] = useState(2)
    const ModifyValue = (newValue) =>{
        if((newValue>= min) && (newValue <= max)){
            // setnumber(newValue)
            HandleChangeValue(newValue)
        }
    }
  return (
    <div >
        <div className='NBInputC'>
        <Button className='Controlbtn' variant="light" onClick={() => ModifyValue(number-1)}><Dash /></Button>
        <input className='Number_input'
        value={number}
        onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
            }
        }}
        onInput={e => {
            ModifyValue(e.target.value)
        }}
    />
    <Button className='Controlbtn' variant="light" onClick={() => ModifyValue(Number(number)+1)}><Plus /></Button>
    </div>
    </div>
  )
}

export default NumberInput