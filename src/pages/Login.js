import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate,useLocation } from 'react-router';
import {  useDispatch } from 'react-redux'
import { login} from '../Redux/Reducer'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

export default function Login() {
  const [admin,setAdmin]=useState()
  const state = useSelector((state) => state.admin.isLogin)

  const Dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.state);
  const redirectaddress = location.state?.from.pathname || '/paneladmin'
  useEffect(()=>{
    axios.get('http://localhost:3002/whoami')
    .then(res=>setAdmin(res.data))
    .catch(error=>console.log(error))
  },[])
  // console.log(admin);
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required('This field is required'),
      password: Yup.string()
        .required('This field is required'),
    }),
    onSubmit: values => {
      if(values.userName===admin.username && values.password===admin.password){
       
        Dispatch(login(true))
        navigate(redirectaddress , {replace:true})
      }
    }
  });
  return (
   
    <Box className='container'
      sx={{
        marginTop:"5rem",
        textAlign:"center",
        padding:"3rem 1rem",
        boxShadow:"1px 1px 5px 0px #d3d1d1",

      }}
    > 
      <Typography variant="h4" component="div" sx={{ mb:"1rem"}}>ورود به پنل مدیریت</Typography>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="userName">نام کاربری</label>
      <TextField id="userName"  variant="filled" name='userName' type="text"  onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{width:"100%",display:"block", mb:"1rem"}}
        value={formik.values.userName}/>
        {formik.touched.userName && formik.errors.userName ? (
        <div className='error'>{formik.errors.userName}</div>
      ) : null}
      <label htmlFor="password">رمز عبور</label>
      <TextField id="password" variant="filled" name='password' type="password"  onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{width:"100%",display:"block",  mb:"1rem"}}
        value={formik.values.password}/>
        {formik.touched.password && formik.errors.password ? (
        <div className='error'>{formik.errors.password}</div>
      ) : null}

      <Button  sx={{my:"1rem"}}variant="contained" type="submit">ورود</Button>
    </form>
    <Link to="/">بازگشت به سایت</Link>
    </Box>
  );
}













// import React from 'react';
// import { Formik } from 'formik';
// import { useNavigate } from "react-router-dom";
// const Login = () => (
//   <div className='containerform'>
//     <h1>Anywhere in your app!</h1>
//     <Formik 
//       initialValues={{ username: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.username) {
//           errors.username = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.username)
//         ) {
//           errors.username = 'Invalid username ';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           <useNavigate to="/paneladmin" replace />
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.username}
//           />
//  {errors.username && <div>{errors.username}</div>} 
//  <br/>
//  <br/>

//    <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <br/>
//  <br/>
//           <button  type="submit"  disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Login;
