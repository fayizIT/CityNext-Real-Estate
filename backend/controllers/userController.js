// import asyncHandler from "express-async-handler";
// import User from '../models/userModels.js';
// import generateToken from "../utils/generateToken.js";





// const authUser = asyncHandler(async (req, res) => {
//      const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (user && (await user.matchPasswords(password))) { // Use matchPasswords here
//         generateToken(res, user._id);
//         res.status(201).json({
//             _id: user._id,
//             name: user.name,
//             email: user.email,
//         });
//     } else {
//         res.status(401);
//         throw new Error('Invalid email or password');
//     }

// });

// const registerUser = asyncHandler(async (req, res) => {
//     const { name, email, password, mobileNumber } = req.body; // Use mobileNumber in the request body
  
//     const userExists = await User.findOne({ email });
  
//     if (userExists) {
//       res.status(400).json({ message: 'User Already Exists' });
//     } else {
//       const user = await User.create({
//         name,
//         email,
//         password,
//         mobile: mobileNumber, // Store the mobile number as 'mobile'
//       });
  
//       if (user) {
//         generateToken(res, user._id);
//         res.status(201).json({
//           _id: user._id,
//           name: user.name,
//           email: user.email,
//           mobile: user.mobile, // Include mobile in the response
//         });
//       } else {
//         res.status(400).json({ message: 'Invalid Data' });
//       }
//     }
//   });
  

// const logoutUser = asyncHandler(async (req, res) => {
//     res.cookie('jwt','',{
//         httpOnly:true,
//         expires: new Date(0),
//     })
//     res.status(200).json({ message: 'User Logout' });
// });

// const getUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
// });




// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;

//     if (req.body.password) {
//       user.password = req.body.password;
//     }else{
//       user.password =user.password
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//     });
//   } else {
//     res.status(404);
//     throw new Error('User not found');
//   }
// });















 
// export {
//     authUser,
//     registerUser,
//     logoutUser,
//     getUserProfile,
//     updateUserProfile, 

// };
