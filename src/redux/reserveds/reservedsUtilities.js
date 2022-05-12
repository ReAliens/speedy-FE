const removeReservation = (reservations, selectedReservation) => {
    const remainReservation = reservations.filter((reservation) => reservation.id !== selectedReservation);
    return remainReservation;
  };
  
  export default removeReservation;
  