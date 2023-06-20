import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
function DropDownMenu (){
  return (
    <div>
        <Dropdown className='w-100'>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
            <Dropdown.Item href="#/action-1">Add Matricices</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Subtract</Dropdown.Item>
            <Dropdown.Item href="#/action-3">multiplication</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDownMenu