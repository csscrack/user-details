import React,{Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './home.css';

let Home = () => {

     let [users, setUsers] = useState([]);

     useEffect(() => {
         getAllUsers();
     }, []);

     let getAllUsers = () =>{
      Axios.get('/api/users').then((response)=>{
          setUsers(response.data);
      }).catch((err)=>{
         console.log(err);
      });
     }

     // delete user

     let deleteUser = (userId) => {
         Axios.delete(`/api/users/${userId}`).then((response)=>{
             getAllUsers();
         })
         .catch((err)=>{
          console.error(err);
         })

     }

    return (
        <Fragment>
            
            <div className='container mt-3 '>
               <div className='row'>
                 <div className='col'>
                     <h1 className=' text-primary text-center'>User Details</h1>
                     <p className='lead'>The homepage or home page is the name of the main page of a website where visitors can find hyperlinks to other pages on the site. ... A home page may also be referred to as a "Add User page," "Update User page," or "Delete page." Website homepage.</p>
                   <Link to='/add-user' className='btn btn-success btn-sm'>Add User</Link>
                 </div>
               </div>
            </div>

            <div className='container mt-3'>
               <div className='row'>
                   <div className='col'>
                       <table className='table table-hover table-striped text-center table-light'>
                           <thead className='bg-dark text-white'>
                               <tr>
                                   <td>SNO</td>
                                   <td>First Name</td>
                                   <td>Last Name</td>
                                   <td>EMAIL</td>
                                   <td>GENDER</td>
                                   <td>MOBILE NUMBER</td>
                                   <td>ACTIONS</td>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   users.length > 0 ?
                                    <Fragment>
                                      {
                                          users.map((user , index)=>{
                                            return(
                                              <tr key={user.id}>
                                                 <td>{index + 1}</td>
                                                 <td>{user.first_name}</td>
                                                 <td>{user.last_name}</td>
                                                 <td>{user.email}</td>
                                                 <td>{user.gender}</td>
                                                 <td>{user.mobile_number}</td>
                                                 <td>
                                                  <Link to={`/users/${user._id}`} className='btn btn-primary text-white btn-sm'>Update</Link>&nbsp;
                                                  <button onClick={deleteUser.bind(this,user._id)} className='btn btn-danger btn-sm'>Delete</button>        
                                                 </td>
                                              </tr>
                                            );
                                          })
                                      }
                                   </Fragment> : 
                                   <Fragment></Fragment>
                               }
                           </tbody>
                       </table>

                   </div>

               </div>
            </div>
        </Fragment>
    )
}

export default Home;