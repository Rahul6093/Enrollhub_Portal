import { useState, useEffect } from "react";

export const AddTeacherModal = ({ onClose, onSave, serviceList = [] }) => {
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
    active: true,
  });

  const [serviceOptions, setServiceOptions] = useState([]);

  useEffect(() => {
    const extracted = Array.from(new Set(serviceList.map((s) => s.name)));
    setServiceOptions(extracted);
  }, [serviceList]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "course") {
    const foundService = serviceList.find(service =>
      service.courses.some(course => course.title === value || course.name === value)
    );

    setForm(prev => ({
      ...prev,
      course: value,
      service: foundService ? foundService.name : "",
    }));
  } else {
    setForm(prev => ({ ...prev, [name]: value }));
  }
};



  const handleSkillInput = (e) => {
    setForm((prev) => ({ ...prev, skills: e.target.value.split(",").map((s) => s.trim()) }));
  };

  const handleScheduleInput = (e) => {
    setForm((prev) => ({ ...prev, schedule: e.target.value.split(",").map((s) => s.trim()) }));
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg *:text-black">
        <h2 className="text-xl font-bold mb-4 ">Add New Teacher</h2>

        <input name="sno" placeholder="S.no" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="name" placeholder="Name" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="city" placeholder="City" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="course" placeholder="Course" onChange={handleChange} className="mb-2 w-full p-2 border" />

        <select name="service" value={form.service} onChange={handleChange} className="mb-2 w-full p-2 border">
          <option value="">Select Service</option>
          {serviceOptions.map((service, index) => (
            <option key={index} value={service}>{service}</option>
          ))}
        </select>

        <input placeholder="Skills (comma-separated)" onChange={handleSkillInput} className="mb-2 w-full p-2 border" />
        <input name="rate" type="number" placeholder="Rate per hour" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input placeholder="Schedule (comma-separated)" onChange={handleScheduleInput} className="mb-2 w-full p-2 border" />
        <input name="qualifications" placeholder="Qualifications" onChange={handleChange} className="mb-2 w-full p-2 border" />
        <input name="ratings" type="number" step="0.1" placeholder="Ratings" onChange={handleChange} className="mb-2 w-full p-2 border" />

        <div className="flex justify-end gap-4 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
    </div>
  );
};
