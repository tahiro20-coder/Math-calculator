import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import "../../Styles/DropDownMenu.css"

function DropDownMenu ({selected}){
  // const [selected,setSelected] = useState(sel)
  // console.log(selected)
  return (
    <div>
        <Dropdown className='w-100'>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            {
              selected == null ? "Dropdown Button" : selected
            }
            
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
        {/* href="#/AddMatrices" */}
            <Dropdown.Item  className={selected==="AddMatrices" ? "active" : ""} >
              <Link to='/Calculator/AddMatrices' className='d-flex w-100'>Add Matricices</Link>
              </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Subtract</Dropdown.Item>
            <Dropdown.Item href="#/action-3">multiplication</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDownMenu