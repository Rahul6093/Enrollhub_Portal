import { useState } from "react";

export const EditCourseModal = ({ course, onClose, onSave, services }) => {
  const [formData, setFormData] = useState({ ...course });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTags = (e) => {
    setFormData((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    }));
  };

  const handleSubmit = () => {
    // Preserve original id and name to ensure uniqueness
    onSave({ ...formData, id: course.id, name: course.name });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white text-black rounded-lg p-6 w-[500px] space-y-4 shadow-xl">
        <h2 className="text-xl font-bold">Edit Course</h2>

        <input
          className="w-full p-2 border rounded"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />

        <select
          className="w-full p-2 border rounded"
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select Service</option>
          {services.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          className="w-full p-2 border rounded"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <textarea
          className="w-full p-2 border rounded"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          className="w-full p-2 border rounded"
          value={formData.tags.join(", ")}
          onChange={handleTags}
          placeholder="Tags (comma separated)"
        />

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
