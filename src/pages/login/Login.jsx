import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/auth/authActions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    dispatch(loginAction(data));
    navigate('/home');
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-orange-400">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col w-[50vw]">
        <p>Email</p>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        />
        <p>{errors.email && 'this field need to be modified'}</p>
        <p>Password</p>
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
          })}
        />
        <p>{errors.password && 'this field need to be modified'}</p>
        <button
          type="submit"
          className="border-2 border-green-500 rounded-3xl hover:text-green-500 hover:bg-white hover:font-bold py-2 px-10 bg-green-500  text-white mt-5"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
