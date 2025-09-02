// components/Student/CourseModal.jsx
import { useState } from "react";
import { addBooking } from "./Booking";
import { v4 as uuidv4 } from "uuid";
import { teachersData } from "./teachersData";

export const Course = ({ serviceName, onClose }) => {
  const [booked, setBooked] = useState(null);
  const teachers = (teachersData[serviceName] || []).filter(t => t.active);

  const handleBooking = (teacher, slot) => {
    const booking = {
      id: uuidv4(),
      teacherId: teacher.id,
      teacherName: teacher.name,
      studentName: "Rahul M S", // Replace with dynamic student later
      service: serviceName,
      slot,
      status: "pending",
    };
    addBooking(booking);
    setBooked(booking);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-6xl p-6 rounded-xl shadow-xl overflow-y-auto max-h-[90vh] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-lg font-bold text-gray-600 hover:text-black">✖</button>
        <h1 className="text-2xl font-bold mb-4 capitalize">{serviceName.replace("_", " ")} – Book a Teacher</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="border p-4 rounded-lg shadow-md">
              <div className="mb-2">
                <h2 className="text-xl font-semibold text-blue-700">{teacher.name}</h2>
                <p className="text-sm text-gray-700">S.no: {teacher.sno}</p>
              </div>
              <p className="text-sm"><strong>City:</strong> {teacher.city}</p>
              <p className="text-sm"><strong>Skills:</strong> {teacher.skills.join(", ")}</p>
              <p className="text-sm"><strong>Course:</strong> {teacher.course}</p>
              <p className="text-sm"><strong>Service:</strong> {teacher.service}</p>
              <p className="text-sm"><strong>Qualifications:</strong> {teacher.qualifications}</p>
              <p className="text-sm"><strong>Ratings:</strong> ⭐ {teacher.ratings}</p>
              <p className="text-sm"><strong>Fee:</strong> ₹{teacher.rate}/hr</p>

              <div className="mt-3">
                <p className="font-semibold text-sm mb-1">Available Slots:</p>
                <div className="flex flex-wrap gap-2">
                  {teacher.schedule.map((slot, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleBooking(teacher, slot)}
                      className="px-3 py-1 bg-blue-100 hover:bg-blue-600 hover:text-white rounded text-sm"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {booked && (
          <p className="mt-4 text-green-600 font-semibold">
            ✅ You’ve sent a request to <strong>{booked.teacherName}</strong> for <strong>{booked.slot}</strong>.
          </p>
        )}
      </div>
    </div>
  );
};
