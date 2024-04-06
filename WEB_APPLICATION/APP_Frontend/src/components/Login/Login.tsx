import React from 'react'

import { NavLink } from "react-router-dom"

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  function Login() {
    return (
        <div className="w-full h-full grid place-content-center my-10">

       <Card color="transparent" shadow={false} placeholder={""}>
        <Typography variant="h4" color="blue-gray" placeholder={""}>
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal" placeholder={""}>
          Welcome Back! Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={""}>
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={""}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3" placeholder={""}>
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={""}
            />
          </div>
          
          <Button className="mt-6 bg-indigo-600" fullWidth placeholder="">
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal" placeholder={""}>
            Donot have an account?{" "}
            <NavLink to={"/signup"} className="font-bold text-indigo-600">SignUp</NavLink>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }



  export default Login