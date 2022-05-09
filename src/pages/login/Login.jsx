/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/auth/authActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selecor = useSelector((state) => state.auth);
  console.log(selecor, 'login');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    dispatch(loginAction(data));
    navigate('/');
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
