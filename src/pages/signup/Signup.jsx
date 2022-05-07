/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import signup from '../../redux/Reducers/auth/authActions';

const Signup = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    dispatch(signup(data));
    // await fetch('http://localhost:3000/signup', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     user: data,
    //   }),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       localStorage.setItem('token', res.headers.get('Authorization'));
    //       return res.json();
    //     }
    //     throw new Error(res);
    //   })
    //   .then((json) => json)
    //   .catch((err) => err);
  };

  return (
    <div className="w-full h-full p-50 flex justify-center items-center">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col w-[50vw]">
        <span>Username</span>
        <input
          type="text"
          {...register('username', {
            required: true,
            maxLength: 15,
            minLength: 3,
          })}
          className="border-2 outline-dashed"
        />
        <p>{errors.username && 'this field need to be modefied'}</p>
        <span className="mt-5">Email</span>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          className="border-2 outline-dashed"
        />
        <p>{errors.email && 'this field need to be modefied'}</p>
        <span className="mt-5">Password</span>
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          className="border-2 outline-dashed"
        />
        <p>{errors.password && 'this field need to be modefied'}</p>
        <span className="mt-5">Password Confirmation</span>
        <input
          type="password"
          {...register('password_confirmation', {
            required: true,
            minLength: 8,
          })}
          className="border-2 outline-dashed"
        />
        <p>
          {errors.password_confirmation && 'this field need to be modefied'}
        </p>
        <input type="submit" className="border-2 mt-10" />
      </form>
    </div>
  );
};

export default Signup;
