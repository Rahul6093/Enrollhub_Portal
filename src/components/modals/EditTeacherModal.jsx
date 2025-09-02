import { useState, useEffect } from "react";

export const EditTeacherModal = ({ teacher, onClose, onSave, serviceList = [] }) => {
  const [form, setForm] = useState({
    ...teacher,
    service: teacher.service?.trim() || "",
  });

  const [serviceOptions, setServiceOptions] = useState([]);

  useEffect(() => {
    const extracted = Array.from(new Set(serviceList.map((s) => s.name?.trim())));
    setServiceOptions(extracted);
  }, [serviceList]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillInput = (e) => {
    setForm((prev) => ({
      ...prev,
      skills: e.target.value.split(",").map((s) => s.trim()),
    }));
  };

  const handleScheduleInput = (e) => {
    setForm((prev) => ({
      ...prev,
      schedule: e.target.value.split(",").map((s) => s.trim()),
    }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg *:text-black">
        <h2 className="text-xl font-bold mb-4 ">Edit Teacher</h2>

        <input name="sno" value={form.sno} onChange={handleChange} placeholder="S.no" className="mb-2 w-full p-2 border" />
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="mb-2 w-full p-2 border" />
        <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="mb-2 w-full p-2 border" />
        <input name="course" value={form.course} onChange={handleChange} placeholder="Course" className="mb-2 w-full p-2 border" />

        <select name="service" value={form.service} onChange={handleChange} className="mb-2 w-full p-2 border">
          <option value="">Select Service</option>
          {serviceOptions.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>

        <input
          value={form.skills.join(", ")}
          onChange={handleSkillInput}
          placeholder="Skills (comma-separated)"
          className="mb-2 w-full p-2 border"
        />
        <input name="rate" type="number" value={form.rate} onChange={handleChange} placeholder="Rate per hour" className="mb-2 w-full p-2 border" />
        <input value={form.schedule.join(", ")} onChange={handleScheduleInput} placeholder="Schedule (comma-separated)" className="mb-2 w-full p-2 border" />
        <input name="qualifications" value={form.qualifications} onChange={handleChange} placeholder="Qualifications" className="mb-2 w-full p-2 border" />
        <input name="ratings" type="number" step="0.1" value={form.ratings} onChange={handleChange} placeholder="Ratings" className="mb-2 w-full p-2 border" />

        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};
