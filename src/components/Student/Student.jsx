import { useState, useEffect } from "react";
import { getServiceList } from "../serviceList";
import { Outlet } from "react-router-dom";
import { Course } from './Course';
import { getBookings, subscribeBookings } from "./Booking";

const sections = [
  { id: "courses", name: "My Courses" },
  { id: "explore", name: "Explore New Services" },
  { id: "assignments", name: "Assignments & Materials" },
  { id: "progress", name: "Progress Tracker" },
  { id: "feedback", name: "Feedback & Ratings" },
  { id: "messages", name: "Messages" },
];

export const Student = () => {
  const [myAcceptedClasses, setMyAcceptedClasses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeSection, setActiveSection] = useState("courses");

  useEffect(() => {
    const updateMyClasses = () => {
      const accepted = getBookings().filter(
        (b) => b.status === "accepted" && b.studentName === "Rahul M S"
      );
      setMyAcceptedClasses(accepted);
    };
    updateMyClasses();
    const unsubscribe = subscribeBookings(updateMyClasses);
    return () => unsubscribe();
  }, []);

  const openCourseModal = (serviceName) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "explore":
        return (
          <>
            <h2 className="text-2xl font-bold mb-6 text-white">Explore New Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {getServiceList().map((service, index) => (
                <div key={index} className="bg-[#2C2F33] border border-gray-700 rounded-xl shadow-sm p-4 flex flex-col">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-300 flex-1">{service.description}</p>
                  <button
                    onClick={() => openCourseModal(service.name)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                  >
                    Enroll Now
                  </button>
                </div>
              ))}
            </div>
          </>
        );
      case "courses":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">My Classes</h2>
            {myAcceptedClasses.length === 0 ? (
              <p className="text-gray-300">No accepted classes yet.</p>
            ) : (
              <ul className="list-disc ml-6 space-y-2 text-white">
                {myAcceptedClasses.map((b) => (
                  <li key={b.id}>📘 {b.service} with {b.teacherName} at {b.slot}</li>
                ))}
              </ul>
            )}
          </>
        );
      case "assignments":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Assignments & Materials</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-300">
              <li>Download: Physics Notes - Chapter 3.pdf</li>
              <li>Upload: Algebra Homework 2</li>
              <li>Marks: Aptitude Test 1 - 18/20</li>
            </ul>
          </>
        );
      case "progress":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Progress Tracker</h2>
            <div className="mb-2 text-sm text-gray-300">Overall Completion</div>
            <div className="w-full bg-gray-600 h-3 rounded-full">
              <div className="bg-blue-500 h-3 w-[75%] rounded-full"></div>
            </div>
            <p className="text-right mt-1 text-blue-400 font-semibold text-sm">75% Complete</p>
            <p className="text-sm mt-4 text-gray-300">Attendance This Week: <strong>92%</strong></p>
          </>
        );
      case "feedback":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Feedback & Ratings</h2>
            <p className="text-gray-300 mb-2">You rated Yoga Wellness ⭐⭐⭐⭐</p>
            <p className="text-gray-300 mb-2">You rated Algebra Coaching ⭐⭐⭐⭐⭐</p>
            <p className="text-gray-400 text-sm">Leave feedback on recent sessions anytime.</p>
          </>
        );
      case "messages":
        return (
          <>
            <h2 className="text-2xl font-bold mb-4 text-white">Messages</h2>
            <p className="text-gray-300">📩 You have 2 unread messages.</p>
            <p className="text-sm text-gray-400 mt-1">"Your next session starts at 10:00 AM" - Coach</p>
          </>
        );
      default:
        return <p className="text-white">Select a section from the sidebar.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1E2022] text-white">
      {/* Header */}
      <header className="bg-[#121416] px-6 py-4 border-b border-gray-700 shadow-sm flex justify-between items-center h-[8vh]">
        <div className="flex items-center space-x-2 px-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422A12.083 12.083 0 0118 13.5c0 3.589-3.134 6.5-7 6.5s-7-2.911-7-6.5c0-.68.091-1.337.264-1.964L12 14z" />
          </svg>
          <span className="text-2xl font-bold text-white">Enrollhub</span>
        </div>
        <div className="flex items-center space-x-5 *:hover:cursor-pointer">
          <button className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-md">🔔</button>
          <button className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">R</button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 mt-[1px]">
        {/* Sidebar */}
        <aside className="w-64 bg-[#121416] text-white shadow-md p-6 hidden md:block border-r border-gray-700">
          <h1 className="text-lg font-bold mb-6">📘 Dashboard</h1>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`cursor-pointer px-3 py-2 rounded-md hover:text-white hover:bg-blue-500 transition ${
                  activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-300"
                }`}
              >
                {section.name}
              </li>
            ))}
          </ul>

          {/* Quick Stats */}
          <div className="mt-10 text-sm space-y-2 text-gray-300">
            <div className="font-semibold text-white">📊 Quick Stats</div>
            <p>Classes this Month: <strong>12</strong></p>
            <p>Assignments Pending: <strong>3</strong></p>
            <p>Attendance This Week: <strong>92%</strong></p>
            <p>Certificates Earned: <strong>2</strong></p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-4 px-2">
          <div className="bg-[#2C2F33] p-7 rounded-xl shadow-sm border border-gray-700 min-h-[89vh]">
            {renderContent()}
            <Outlet />
          </div>
        </main>
      </div>

      {modalOpen && (
        <Course serviceName={selectedService} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
};
