import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function MainForm() {
    const [data,setData]=useState({name:"",room:""})
    const [err,setErr]=useState('')
    const navigate=useNavigate();
     const handleChange=(e)=>{
       console.log(e.target.name,e.target.value);
       setData({...data,[e.target.name]:e.target.value});
     }

     const validation=()=>{
        if(!data.name){
            setErr('Please Enter Your Name');
            return false;
        }
        if(!data.room){
            setErr('Please Select Room');
            return false;

        }
        setErr('')
        return true
     }

     const handleSubmit=(e)=>{
        e.preventDefault();//ye hum isliye kr rhe h qki form hmara automatic submit na ho,ab refresh nhi hoga
        const isValid=validation();
        if(isValid){
           navigate(`/chat/${data.room}`,{state:data})
        }
     }

  return (
    <div className='px-3 py-4 shadow bg-white text-dark border rounded row'>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
                <h2 className='text-warning mb-4'>Welcome to TalkApp</h2>
            </div>
            <div className="form-group mb-4">
                <input type='text' className='form-control bg-light' name='name' onChange={handleChange} placeholder="Enter Name"/>
            </div>
            <div className="form-group mb-4">
                <select className='form-select bg-light' name='room' onChange={handleChange}>
                    <option value=''>Select Room</option>
                    <option value='gaming'>Gaming</option>
                    <option value='coding'>Coding</option>
                    <option value='socialMedia'>Social Media</option>

                </select>
            </div>
            <button type='submit' className='btn btn-warning w-100 mb-2'>Submit</button>
        {err?<small className='text-danger'>{err}</small>:""}
        </form>
    </div>
  )
}

export default MainForm;