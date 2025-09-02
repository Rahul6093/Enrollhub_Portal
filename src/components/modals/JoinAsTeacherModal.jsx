import { useState } from "react";
import { serviceList } from "../serviceList"; // ✅ Use this instead of passing as prop

export const JoinAsTeacherModal = ({ onClose }) => {
  const [form, setForm] = useState({
    id: Date.now().toString(),
    sno: "",
    name: "",
    city: "",
    course: "",
    service: "",
    skills: [],
    rate: 0,
    schedule: [],
    qualifications: "",
    ratings: 0,
    active: false,
  });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSkillInput = e =>
    setForm(prev => ({
      ...prev,
      skills: e.target.value.split(",").map(s => s.trim()),
    }));

  const handleScheduleInput = e =>
    setForm(prev => ({
      ...prev,
      schedule: e.target.value.split(",").map(s => s.trim()),
    }));

  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("teacherRequests") || "[]");
    localStorage.setItem("teacherRequests", JSON.stringify([...existing, form]));
    onClose();
    alert("Your request has been sent. You'll be contacted if approved!");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg *:text-black">
        <h2 className="text-xl font-bold mb-4">Request to Join EnrollHub</h2>
        <input name="sno" placeholder="S.no" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="name" placeholder="Name" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="city" placeholder="City" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="course" placeholder="Course" onChange={handleChange} className="mb-2 w-full p-2 border" />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="mb-2 w-full p-2 border"
        >
          <option value="">Select a Service</option>
          {serviceList.map((s, i) => (
            <option key={i} value={s.name}>
              {s.name}
            </option>
          ))}
        </select>

        <input placeholder="Skills (comma-separated)" onChange={handleSkillInput} className="mb-2 w-full p-2 border" />
        <input name="rate" type="number" placeholder="Rate per hour" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input placeholder="Schedule (comma-separated)" onChange={handleScheduleInput} className="mb-2 w-full p-2 border" />
        <input name="qualifications" placeholder="Qualifications" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="ratings" type="number" step="0.1" placeholder="Ratings" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Submit Request</button>
        </div>
      </div>
    </div>
  );
};
