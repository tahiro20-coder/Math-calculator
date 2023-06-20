import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
function DropDownMenu (){
  return (
    <div>
        <Dropdown className='w-100'>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
        {/* href="#/AddMatrices" */}
            <Dropdown.Item >
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