import { useState } from "react";

export const AddCourseModal = ({ onClose, onSave, services }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [service, setService] = useState("");
  const [image, setImage] = useState("");

  const handleSave = () => {
    if (!title || !name || !description || !image) return;
    const newCourse = {
      title,
      name,
      description,
      service,
      tags: tags.split(",").map(t => t.trim()),
      image
    };
    onSave(newCourse);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg text-black">
        <h2 className="text-xl font-semibold mb-4">Add New Course</h2>

        <input className="w-full mb-2 p-2 border" placeholder="Course Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="w-full mb-2 p-2 border" placeholder="Course Name (unique identifier)" value={name} onChange={(e) => setName(e.target.value)} />
        <input className="w-full mb-2 p-2 border" placeholder="Course Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input className="w-full mb-2 p-2 border" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)} />
        <select className="w-full mb-2 p-2 border" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
        <input className="w-full mb-4 p-2 border" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />

        <div className="flex justify-end gap-2">
          <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>Cancel</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSave}>Add Course</button>
        </div>
      </div>
    </div>
  );
};
