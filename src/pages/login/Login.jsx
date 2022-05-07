/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import loginAction from '../../redux/auth/loginAction';

const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    dispatch(loginAction(data));
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
