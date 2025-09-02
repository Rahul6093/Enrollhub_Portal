export function CourseCard({ course, onToggle, onEdit }) {
  const getServiceName = s => typeof s === "object" ? s.name : s;

  return (
    <div className="p-4 border border-gray-600 rounded-lg bg-[#2B2E32]">
      <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
      <p className="text-sm mb-1"><span className="text-gray-400">Tags:</span> {course.tags.join(", ")}</p>
      <p className="text-sm mb-1"><span className="text-gray-400">Service:</span> {getServiceName(course.service)}</p>
      <p className="text-sm mb-1"><span className="text-gray-400">Description:</span> {course.description}</p>

      <div className="flex justify-between items-center mt-2">
        <label className="flex items-center space-x-1 text-sm">
          <input type="checkbox" checked={course.active} onChange={() => onToggle(course)} />
          <span>Active</span>
        </label>
        <button onClick={() => onEdit(course)} className="text-sm px-2 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-300">Edit</button>
      </div>
    </div>
  );
}
