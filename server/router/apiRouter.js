const express = require('express');
const router = express.Router();
const User = require('../model/User');

// Get all users
// URL : http://127.0.0.1:5000/api/users
// method : get

router.get('/users',async (request,response)=>{
   try{
         let users = await User.find();
         response.status(200).json(users);
   } catch (err){
      console.error(err);
      response.status(500).json({
          msg : 'Server error'
      });
   }
});
// Get a single user
// URL : http://127.0.0.1:5000/api/users/:id
// method : get

router.get('/users/:id',async (request,response)=>{
    let userId = request.params.id
    try{
        let users = await Employee.findById(userId);
        response.status(200).json(users);
    } catch (err){
        console.error(err);
        response.status(500).json({
            msg : 'Server error'
        });
    }
});
// create new  user
// URL : http://127.0.0.1:5000/api/users
// method : post

router.post('/users',async (request,response)=>{
    let newUser = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        mobile_number : request.body.mobile_number,
    };
    try{
         let user = new User(newUser);
         await user.save();                     // insert the record
        response.status(200).json({
            msg : 'new user created'
        });
    }catch (err){
         console.error(err);
         response.status(500).json({
            msg : 'server error'
         });
    }
});

// update an  user
// URL : http://127.0.0.1:5000/api/users/:id
// method : put

router.put('/users/:id',async (request,response)=>{
   let userId = request.params.id;
    let updateUser = {
        first_name : request.body.first_name,
        last_name : request.body.last_name,
        email : request.body.email,
        gender : request.body.gender,
        ip_address : request.body.mobile_number,
    };
    try {
        let user = await User.findById(userId);
        if(user){
            user = await User.findByIdAndUpdate(userId , {
                $set : updateUser
            } , {new : true});
            response.status(200).json({
                msg : 'User is Updated'
            });
        }
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});
/*  DELETE an existing User
    URL : http://127.0.0.1:5000/api/users/:id
    Method : DELETE
 */
router.delete('/users/:id', async (request,response) => {
    let userId = request.params.id;
    try {
        await User.findByIdAndDelete(userId);
        response.status(200).json({
            msg : 'User is Deleted'
        });
    }
    catch (err) {
        console.error(err);
        response.status(500).json({
            msg : 'Server Error'
        });
    }
});


module.exports = router;