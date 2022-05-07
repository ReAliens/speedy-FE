/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    console.log(data);
    // await fetch('http://localhost:3000/login', {
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
    <div className="mt-24">
      <form onSubmit={handleSubmit(submit)}>
        <p>{errors.email && 'this field need to be modified'}</p>

        <p>email</p>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        />
        <p>password</p>
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
          })}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
