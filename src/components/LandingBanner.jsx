import { useState } from "react";
import { JoinAsTeacherModal } from "./modals/JoinAsTeacherModal";

export const LandingBanner = () => {
  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <div className="relative mt-10 h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banner.jpg')" }}
      />

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-black opacity-70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl font-['Petrona'] mb-8">Join EnrollHub as a Teacher</h1>
        <p className="mb-7 text-lg">
          Are you passionate about teaching? EnrollHub connects you with students who are eager to learn.
          Create your profile, showcase your skills, and start earning from the comfort of your home.
        </p>
        <p className="mb-8 text-lg">
          We welcome educators from all fields – academics, arts, technology, and more.
          Take the next step in your teaching journey today!
        </p>
        <button
          onClick={() => setShowJoinModal(true)}
          className="bg-yellow-300 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
        >
          🚀 Request to Join
        </button>
      </div>

      {/* Modal */}
      {showJoinModal && (
        <JoinAsTeacherModal onClose={() => setShowJoinModal(false)} />
      )}
    </div>
  );
};
