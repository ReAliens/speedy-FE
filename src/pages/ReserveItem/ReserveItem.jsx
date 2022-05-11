import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReservationForm from '../../components/forms/ReservationForm';
import { addReservation } from '../../redux/reserveds/reserveActions';

const ReserveItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.data);
  const submit = async (data) => {
    const started = new Date(data.started_at);
    const ended = new Date(data.ended_at);
    const now = new Date();

    if (started < now) {
      alert('started date is not correct');
    } else if (ended < started) {
      alert('ended date should be after started date');
    } else {
      dispatch(addReservation(data, user));
      // navigate('/home');
    }
  };

  return (
    <main>
      <section className="flex justify-center">
        <div className="font-medium bg-violet-50 mt-24 flex justify-center w-1/2">
          <ReservationForm submit={submit} />
        </div>
      </section>
    </main>
  );
};

export default ReserveItem;
