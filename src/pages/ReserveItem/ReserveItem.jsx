import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ReservationForm from '../../components/forms/ReservationForm';
import { addReservation } from '../../redux/reserveds/reserveActions';
import { ToastContainer } from 'react-toastify';

const ReserveItem = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);
  const submit = async (data) => {
    const started = new Date(data.started_at).getDate();
    const now = new Date().getDate();

    const ended = new Date(data.ended_at).getDate();

    if (started < now) {
      alert('started date is not correct');
    } else if (ended < started) {
      alert('ended date should be after started date');
    } else {
      dispatch(addReservation(data, user));
      reset();
    }
  };

  return (
    <main className="flex justify-center items-center w-full h-[95vh]">
      <ToastContainer autoClose={3000} />
      <section  className="flex w-[90%] md:px-28">
        <div className="bg-slate-100 border-2 border-green-900 w-full">
          <ReservationForm
            submit={submit}
            handleSubmit={handleSubmit}
            register={register}
            errors={errors}
          />
        </div>
      </section>
    </main>
  );
};

export default ReserveItem;
