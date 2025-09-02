export const TeacherCard = ({ teacher, onToggleActive, onEdit }) => {
  return (
    <div className="bg-[#2C2F33] text-white border border-gray-700 p-4 rounded-lg shadow-md">
      {/* Name + Edit + Active in one line */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{teacher.name}</h3>
        <div className="flex items-center gap-3 text-sm">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={teacher.active}
              onChange={onToggleActive}
              className="form-checkbox h-4 w-4 text-green-400 bg-gray-800 border-gray-600"
            />
            <span className={teacher.active ? "text-green-400" : "text-red-400"}>
              Active
            </span>
          </label>
          <button onClick={onEdit} className="text-yellow-300 hover:underline">
            ✏️ Edit
          </button>
        </div>
      </div>

      {/* Rest of the info */}
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Skills:</span> {teacher.skills.join(", ")}</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">City:</span> {teacher.city}</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Service:</span> {teacher.service}</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Course:</span> {teacher.course}</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Qualifications:</span> {teacher.qualifications}</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Hourly Rate:</span> ₹{teacher.rate}/hr</p>
      <p className="text-sm mb-1"><span className="text-[#C9D6DF]">Ratings:</span> ⭐ {teacher.ratings}</p>
      <p className="text-sm">
        <span className="text-[#C9D6DF]">Available Slots:</span>{" "}
        {Array.isArray(teacher.schedule) ? teacher.schedule.join(", ") : teacher.schedule}
      </p>
    </div>
  );
};
