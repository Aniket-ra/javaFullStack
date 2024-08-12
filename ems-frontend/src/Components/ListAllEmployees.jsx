import React, { useEffect, useState } from 'react'
import { listEmployees } from '../Service/Employeeservice'
import { useNavigate } from 'react-router-dom'

function ListAllEmployees() {
  const navigator=useNavigate()

  const[employees,setEmployees]= useState([])

  useEffect(()=>{
    listEmployees().then((Response)=>{
        setEmployees(Response.data);
    }).catch(error=>{
        console.error(error);
    });
    
  },[])

  function addNewEmployee(){
navigator('/add-Employee');
  }
  return (
    <div className='container'>
      <h2> List Of Employees</h2>
      <button type="button" className="btn btn-primary" onClick={addNewEmployee}>ADD New Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee EmailID</th>
            </tr>
        </thead>
        <tbody>
            {
                employees.map(employee=>
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.emailId}</td>
                    </tr>
                )
            }
        </tbody>
      </table>

    </div>
  )
}

export default ListAllEmployees