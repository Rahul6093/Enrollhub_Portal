import { useState } from "react";

export const EditServiceModal = ({ services, onClose, onSave }) => {
  const [localServices, setLocalServices] = useState([...services]);

  const handleChange = (index, value) => {
    const updated = [...localServices];
    updated[index] = { name: value };
    setLocalServices(updated);
  };

  const handleDelete = (index) => {
    const updated = localServices.filter((_, i) => i !== index);
    setLocalServices(updated);
  };

  const handleAdd = () => {
    setLocalServices(prev => [...prev, { name: "" }]);
  };

  const handleSave = () => {
  const cleaned = localServices
    .map(s => typeof s === "string" ? { name: s } : s)
    .filter(s => s.name?.trim() !== "");
  onSave(cleaned);
};


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl text-black">
        <h2 className="text-xl font-semibold mb-4">Edit Services</h2>
        <div className="space-y-2 max-h-[50vh] overflow-y-auto">
          {localServices.map((service, index) => (
            <div key={index} className="flex gap-2 items-center">
              <input
                className="w-full p-2 border rounded"
                value={service.name}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <button onClick={() => handleDelete(index)} className="text-red-600 px-2 py-1">🗑</button>
            </div>
          ))}
          <button className="text-blue-600" onClick={handleAdd}>+ Add Service</button>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};
