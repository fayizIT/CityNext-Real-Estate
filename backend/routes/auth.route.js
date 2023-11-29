import express from 'express';
const router = express.Router();
import { signup,signin,validateOtpToVerifyUser,resendOtp,signOut} from '../controllers/auth.controller.js';



//signup route
router.post('/signup',signup);

//sign in route
router.post('/login',signin);

//verify otp
router.post('/otp' , validateOtpToVerifyUser);

//resend otp
router.post('/resendOtp',resendOtp);


router.get('/signout', signOut)



export default router