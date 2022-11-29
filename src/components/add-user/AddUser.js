import React,{Fragment, useState} from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

let AddUser = () => {

    let history = useHistory();
    let [isSubmitted , setSubmitted] = useState(false);
    let [user , setUser] = useState({
        first_name : '',
        last_name : '',
        email :'',
        gender :'',
        mobile_number : ''
    });

    let inputValuesHandler = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })

    };

    let addUserSubmit = (e) =>{
      e.preventDefault();
      Axios.post(`/api/users`, user).then(()=>{
          setSubmitted(true);             

      })
      .catch((err)=>{
    console.error(err);
      })
    }

    return (
        <Fragment>
            {
                isSubmitted ? history.push('/') : 
            
            <div className='container mt-3'>
               <div className='row'>
                   <div className='col-md-5'>
                      <div className='card'>
                         <div className='card-header bg-success text-white'>
                           <h3>Add User</h3>
                         </div>
                         <div className='card-body bg-light'>
                            <form onSubmit={addUserSubmit}> 
                                <div className='form-group'>
                                  <input type="text" 
                                  className='form-control' 
                                  placeholder='First Name' 
                                  name='first_name'
                                  value={user.first_name}
                                  onChange={inputValuesHandler}
                                  // onChange={(e)=>setUser({...user,first_name:e.target.value})}
                                  required 
                                  />
                                </div>
                                <div className='form-group'>
                                  <input type="text" 
                                  className='form-control' 
                                  placeholder='Last Name' 
                                  name='last_name'
                                  value={user.last_name}
                                  onChange={inputValuesHandler}
                                  required
                                  />
                                </div>
                                <div className='form-group'>
                                  <input type="email" 
                                  className='form-control' 
                                  placeholder='Email Address' 
                                  name='email'
                                  value={user.email}
                                  onChange={inputValuesHandler}
                                  required
                                  
                                  />
                                </div>
                                <div className='form-group'>
                                   <select 
                                   name='gender'
                                   value={user.gender}
                                   onChange={inputValuesHandler}
                                   required
                                   className='form-control'>
                                       <option value="">Select Gender</option>
                                       <option value="Male">Male</option>
                                       <option value="Female">Female</option>
                                   </select>
                                  
                                </div>
                                <div className='form-group'>
                                  <input type="text" 
                                  className='form-control' 
                                  placeholder='Mobile Number' 
                                  name='mobile_number'
                                  value={user.mobile_number}
                                  onChange={inputValuesHandler}
                                  maxLength="15"
                                  required
                                  
                                  />
                                  </div>
                                  <div className='form-group'> 
                                   <input type="submit" value="Add User" className='btn btn-success btn-sm'/>
                                  </div>
                            </form>
                         </div>
                      </div>
                   </div>
               </div>
            </div>
     }
        </Fragment>
    )
}

export default AddUser;