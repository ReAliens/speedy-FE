import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../../redux/auth/authActions';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    dispatch(signupAction(data));
    navigate('/home');
  };

  return (
    <div className="w-full h-full p-50 flex justify-center items-center bg-orange-400">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col w-[50vw]">
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
