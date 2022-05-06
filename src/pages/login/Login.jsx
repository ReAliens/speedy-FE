/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    console.log(data);
    fetch('http://localhost:3000/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: data,
      }),
    })
      .then((res) => {
        if (res.ok) {
          console.log(res.headers.get('Authorization'));
          localStorage.setItem('token', res.headers.get('Authorization'));
          return res.json();
        }
        return res.text().then((text) => Promise.reject(text));
      })
      .then((json) => console.dir(json))
      .catch((err) => console.error(err));
  };
  return (
    <div className="mt-24">
      <form onSubmit={handleSubmit(submit)}>
        {/* <p>Username</p>
        <input
          className="border-4"
          {...register('username', { required: true })}
        />
        {errors.username && <span>This field is required</span>} */}
        <p>Email</p>
        <input
          className="border-4"
          type="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        <p>Password</p>
        <input
          type="password"
          className="border-4"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
