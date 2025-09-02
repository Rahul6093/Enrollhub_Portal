// Booking.jsx

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
let subscribers = [];

const notify = () => {
  localStorage.setItem("bookings", JSON.stringify(bookings));
  subscribers.forEach((cb) => cb(bookings));
};

export const addBooking = (booking) => {
  bookings.push(booking);
  console.log("Booking added:", booking);
  notify();
};

export const getBookings = () => bookings;

export const subscribeBookings = (cb) => {
  subscribers.push(cb);
  return () => {
    subscribers = subscribers.filter((sub) => sub !== cb);
  };
};

export const acceptBooking = (id) => {
  bookings = bookings.map(b =>
    b.id === id ? { ...b, status: "accepted" } : b
  );
  notify();
};
