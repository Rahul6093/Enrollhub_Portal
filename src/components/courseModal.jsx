// CourseModal.jsx
import { courseDetails } from './courseDetails';

export const CourseModal = ({ course, onClose }) => {
  if (!course) return null;

  const details = courseDetails[course.name] || {};

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4 mt-10">
      <div className="bg-white rounded-3xl overflow-hidden w-full max-w-screen-xl shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-2xl font-bold text-white hover:text-red-500 z-10"
        >
          ×
        </button>

        {course.image && (
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover"
          />
        )}

        <div className="p-6 space-y-4">
          <h2 className="text-3xl font-bold">{course.title}</h2>
          <p className="text-gray-600 italic text-sm">{course.service}</p>

          {details.description && (
            <p className="text-gray-700 text-md leading-relaxed">{details.description}</p>
          )}

          <div className="flex flex-wrap gap-2 pt-2 *:text-xs *:border *:border-black *:rounded-full *:py-1 *:px-3 *:bg-gray-100">
            {course.tags?.map((tag, idx) => (
              <div key={idx}>{tag}</div>
            ))}
          </div>

          {details.whoShouldJoin && (
            <p>
              <strong>Who should join:</strong> {details.whoShouldJoin}
            </p>
          )}

          {details.mode && (
            <p>
              <strong>Mode of Delivery:</strong> {details.mode}
            </p>
          )}

          {details.takeaways?.length > 0 && (
            <div>
              <strong>Takeaways:</strong>
              <ul className="list-disc pl-5 text-sm text-gray-800 mt-1">
                {details.takeaways.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {details.extra && (
            <p>
              <strong>Additional Info:</strong> {details.extra}
            </p>
          )}

          {/* 🔽 Common Section for All Courses */}
          <div className="pt-6 border-t mt-6 space-y-3 text-sm text-gray-700">
            <h3 className="text-lg font-semibold">Why Learn With Us?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>🧠 Expert-curated content with practical relevance</li>
              <li>👨‍🏫 Verified and passionate mentors/trainers</li>
              <li>📆 Flexible timings, short & long-term batches</li>
              <li>📞 Ongoing support via chat/call after enrollment</li>
              <li>🧪 Free trial class and feedback session available</li>
              <li>📈 Track progress through assessments and feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
