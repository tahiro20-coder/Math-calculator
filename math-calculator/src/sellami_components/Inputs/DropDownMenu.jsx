import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import "../../Styles/DropDownMenu.css"

function DropDownMenu ({selected}){
  // const [selected,setSelected] = useState(sel)
  // console.log(selected)
  const TitleList = {
    "AddMatrices" : "Add two matrices",
    "Gradient_Linear_Regression" : "Linear Regression ( Gradient Descent ) "
  }
  return (
    <div>
        <Dropdown className='w-100'>
        <Dropdown.Toggle className=' dropdown_btn' variant="success" id="dropdown-basic">
            {
              selected == null ? "Dropdown Button" : TitleList[selected]
            }
            
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropdown_menu'>
        {Object.entries(TitleList).map(([keyV, value])=>{
          return <Dropdown.Item key={keyV}  className={selected===keyV? "active" : ""} >
          <Link to={'/Calculator/'+keyV} className='d-flex w-100'>{value}</Link>
          </Dropdown.Item>
        })}
{/*         
            <Dropdown.Item  className={selected==="AddMatrices" ? "active" : ""} >
              <Link to='/Calculator/AddMatrices' className='d-flex w-100'>Add two matrices</Link>
              </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Subtract</Dropdown.Item>
            <Dropdown.Item href="#/action-3">multiplication</Dropdown.Item> */}
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default DropDownMenu