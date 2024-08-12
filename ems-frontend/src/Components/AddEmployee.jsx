import React, { useState } from 'react'
import { createEmployees } from '../Service/Employeeservice'
import { useNavigate } from 'react-router-dom'

function AddEmployee() {


    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[emailId,setEmailId]=useState('')
    const navigator=useNavigate();
    function handleFirstName(e){
     setFirstName(e.target.value)
    }
    function handleLastName(e){
setLastName(e.target.value)
    }
    function handleEmailId(e){
setEmailId(e.target.value)
    }
    function saveEmployee(e){
              e.preventDefault();
          const employee={firstName,lastName,emailId};
          console.log(employee);
createEmployees(employee).then((response) => {
    console.log(response.data);
    navigator('/employees');
})
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
                <h2 className='text-center'>Add Employee</h2>
                <div className='card-body'>
                    <form action="submit">
                        <div className='form-group mb-2'>
                            <label className='form-label'>First Name</label>
                            <input type="text"
                            placeholder='Entet Employee First Name'
                            name='firstName' 
                            value={firstName}
                            className='form-control'
                            onChange={handleFirstName}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Last Name</label>
                            <input type="text"
                            placeholder='Entet Employee Last Name'
                            name='lastName' 
                            value={lastName}
                            className='form-control'
                            onChange={handleLastName}
                            />
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Email Id</label>
                            <input type="text"
                            placeholder='Entet Employee Email Id'
                            name='' emailId
                            value={emailId}
                            className='form-control'
                            onChange={handleEmailId}
                            />
                        </div>
                        <button className='btn btn-success' onClick={saveEmployee}> save Employee</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee