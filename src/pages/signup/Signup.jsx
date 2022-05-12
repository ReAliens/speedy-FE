import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../../redux/auth/authActions';
import { ToastContainer } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const token = localStorage.getItem('token');
  const submit = (data) => {
    dispatch(signupAction(data));
    if (token) {
      navigate('/login');
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-orange-400">
      <ToastContainer autoClose={3000} />
      <h1 className='text-6xl mb-4 text-white'>Sign Up</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col w-[80vw] md:w-[50vw] bg-white shadow-md rounded px-4 pt-6 pb-8 mb-4"
      >
        <span className="mt-5 mb-2">Email</span>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p>{errors.email && 'this field need to be modefied'}</p>
        <span className="mt-5 block text-gray-700 text-sm font-bold mb-2">
          Password
        </span>
        <input
          type="password"
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        />
        <p>{errors.password && 'this field need to be modefied'}</p>
        <button
          type="submit"
          className="border-2 border-green-500 rounded-3xl hover:text-green-500 hover:bg-white hover:font-bold py-2 px-10 bg-green-500  text-white mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
