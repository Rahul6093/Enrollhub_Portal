import { useState } from "react";

export const AddServiceModal = ({ onClose, onSave }) => {
  const [serviceName, setServiceName] = useState("");

  const handleSave = () => {
    if (serviceName.trim()) {
      onSave(serviceName.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-lg shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add New Service</h2>
        <input
          className="w-full p-2 border mb-4"
          placeholder="Enter service name (e.g., Yoga, Tuition)"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button className="px-4 py-2 bg-gray-400 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={handleSave}>Add</button>
        </div>
      </div>
    </div>
  );
};
