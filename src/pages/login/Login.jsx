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
    navigate('/');
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-orange-400">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col w-[80vw] md:w-[50vw] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="block text-gray-700 text-sm font-bold mb-2">Email</p>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
        />
        <p>{errors.email && 'this field need to be modified'}</p>
        <p className="block text-gray-700 text-sm font-bold mb-2">Password</p>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
