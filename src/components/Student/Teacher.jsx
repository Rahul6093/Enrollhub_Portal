import { useState, useEffect } from "react";
import { getBookings, acceptBooking, subscribeBookings } from "./Booking";

const navItems = [
  { id: "classes", label: "My Classes" },
  { id: "students", label: "Enrolled Students" },
  { id: "schedule", label: "Schedule" },
  { id: "materials", label: "Upload Materials" },
  { id: "ratings", label: "My Ratings" },
  { id: "messages", label: "Messages" },
  { id: "profile", label: "Profile" },
];

export const Teacher = () => {
  const [activeSection, setActiveSection] = useState("classes");
  const [bookings, setBookings] = useState([]);

  const teacherName = "Ananya Sharma";

  useEffect(() => {
    const update = () => {
      const latest = getBookings();
      console.log("Teacher sees bookings:", latest);
      setBookings(latest);
    };
    update();
    const unsub = subscribeBookings(update);
    return () => unsub();
  }, []);

  const handleAccept = (id) => {
    acceptBooking(id);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "classes": {
        const myClasses = bookings.filter(
          (b) => b.teacherName === teacherName && b.status === "accepted"
        );
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">My Classes</h2>
            {myClasses.length === 0 ? (
              <p className="text-gray-400">No classes accepted yet.</p>
            ) : (
              <ul className="list-disc ml-6 space-y-2 text-gray-300">
                {myClasses.map((cls) => (
                  <li key={cls.id}>
                    ✅ {cls.studentName} - {cls.service} at {cls.slot}
                  </li>
                ))}
              </ul>
            )}
          </>
        );
      }

      case "students": {
        const pending = bookings.filter(
          (b) => b.teacherName === teacherName && b.status === "pending"
        );
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Enrolled Students (Pending)
            </h2>
            {pending.length === 0 ? (
              <p className="text-gray-400">No new enrollment requests.</p>
            ) : (
              <ul className="space-y-3">
                {pending.map((req) => (
                  <li
                    key={req.id}
                    className="bg-slate-800 shadow p-4 rounded flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold text-white">{req.studentName}</p>
                      <p className="text-sm text-gray-400">
                        {req.service} — {req.slot}
                      </p>
                    </div>
                    <button
                      onClick={() => handleAccept(req.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Accept
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </>
        );
      }

      default:
        return (
          <p className="text-gray-300">
            {navItems.find((i) => i.id === activeSection)?.label} section coming soon.
          </p>
        );
    }
  };

return (
  <div className="min-h-screen flex flex-col bg-[#1e1e1e] text-white">
    {/* Header */}
    <header className="bg-[#1e1e1e] px-6 py-4 border-b border-gray-700 shadow-sm flex justify-between items-center h-[8vh]">
      <div className="flex items-center space-x-2 px-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0118 13.5c0 3.589-3.134 6.5-7 6.5s-7-2.911-7-6.5c0-.68.091-1.337.264-1.964L12 14z" />
        </svg>
        <span className="text-2xl font-bold text-white">Enrollhub</span>
      </div>
      <div className="flex items-center space-x-5 *:hover:cursor-pointer">
        <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-md text-white">🔔</button>
        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-semibold">A</button>
      </div>
    </header>

    {/* Main Layout */}
    <div className="flex flex-1 mt-[1px]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2c2c2c] text-white shadow-md p-6 hidden md:block border-r border-gray-700">
        <h1 className="text-lg font-bold mb-6">📘 Teacher Panel</h1>
        <ul className="space-y-3">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`cursor-pointer px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 ${
                activeSection === item.id ? "bg-gray-600 text-white" : "text-gray-300"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-4 px-2">
        <div className="bg-[#2c2c2c] p-7 rounded-xl shadow-sm border border-gray-700 min-h-[89vh]">
          {renderContent()}
        </div>
      </main>
    </div>
  </div>
);

};
