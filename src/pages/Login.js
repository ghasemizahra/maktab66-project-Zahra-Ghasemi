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
const ACCESS_TOKEN="token";
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.state);
  const redirectaddress = location.state?.from.pathname || '/paneladmin'
  // useEffect(()=>{
  //   axios.get('http://localhost:3002/whoami')
  //   .then(res=>setAdmin(res.data))
  //   .catch(error=>console.log(error))
  // },[])
  // console.log(admin);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('This field is required'),
      password: Yup.string()
        .required('This field is required'),
    }),
    onSubmit: values => {
              axios
              .post('http://localhost:3002/auth/login',values)
        .then((res) => {
          if (res.status == 200) {
            Dispatch( login(true))
           localStorage.setItem(ACCESS_TOKEN,res.data.token)
            navigate(redirectaddress)
          }
        })
        .catch(() => {
          alert("با این نام کاربری کاربری ثبت نشده");
        });
     
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
      <label htmlFor="username">نام کاربری</label>
      <TextField id="username"  variant="filled" name='username' type="text"  onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        sx={{width:"100%",display:"block", mb:"1rem"}}
        value={formik.values.username}/>
        {formik.touched.username && formik.errors.username ? (
        <div className='error'>{formik.errors.username}</div>
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










