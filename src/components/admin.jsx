import { useState, useEffect } from "react";
import { teachersData as initialTeachers } from "./Student/teachersData";
import { serviceList, getServiceList } from "./serviceList";
import { AddTeacherModal } from "./modals/AddTeacherModal";
import { EditTeacherModal } from "./modals/EditTeacherModal";
import { AddCourseModal } from "./modals/AddCourseModal";
import { EditServiceModal } from "./modals/EditServiceModal.jsx";
import { CourseCard } from "./CourseCard";
import { EditCourseModal } from "./modals/editCourseModal.jsx";


const navItems = [
  { id: "teachers", label: "👩‍🏫 Teachers" },
  { id: "courses", label: "📚 Courses" },
  // { id: "payments", label: "💳 Payments" },
  // { id: "ratings", label: "⭐ Ratings" }
];

export const Admin = () => {
  const [teachersData, setTeachersData] = useState(() => JSON.parse(localStorage.getItem("teachersData")) || initialTeachers);
  const [courseList, setCourseList] = useState(() => JSON.parse(localStorage.getItem("courseList")) || getServiceList());
  const [serviceListState, setServiceListState] = useState(() => JSON.parse(localStorage.getItem("serviceBlocks")) || serviceList);
  const [teacherRequests, setTeacherRequests] = useState(() => JSON.parse(localStorage.getItem("teacherRequests")) || []);

  const [activeSection, setActiveSection] = useState("teachers");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const [activeTeacherTab, setActiveTeacherTab] = useState("approved");
  const [activeCourseTab, setActiveCourseTab] = useState("active");
  const [filterService, setFilterService] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => localStorage.setItem("teachersData", JSON.stringify(teachersData)), [teachersData]);
  useEffect(() => localStorage.setItem("courseList", JSON.stringify(courseList)), [courseList]);
  useEffect(() => localStorage.setItem("serviceBlocks", JSON.stringify(serviceListState)), [serviceListState]);
  useEffect(() => localStorage.setItem("teacherRequests", JSON.stringify(teacherRequests)), [teacherRequests]);

  const allTeachers = Object.entries(teachersData).flatMap(([s, list]) => list.map(t => ({ ...t, service: s })));
  const filteredTeachers = allTeachers.filter(t =>
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.skills.join(" ").toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pagedTeachers = filteredTeachers
    .filter(t => activeTeacherTab === "approved" ? t.active : !t.active)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const teacherPages = Math.ceil(
    filteredTeachers.filter(t => activeTeacherTab === "approved" ? t.active : !t.active).length / itemsPerPage
  );

  const filteredCourses = courseList
    .filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(c => filterService ? c.service === filterService : true);

  const pagedCourses = filteredCourses
    .filter(c => activeCourseTab === "active" ? c.active : !c.active)
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const coursePages = Math.ceil(
    filteredCourses.filter(c => activeCourseTab === "active" ? c.active : !c.active).length / itemsPerPage
  );

  const toggleTeacher = t => {
    setTeachersData(prev => ({
      ...prev,
      [t.service]: prev[t.service].map(x => x.id === t.id ? { ...x, active: !x.active } : x)
    }));
  };

  const toggleCourse = c => {
    setCourseList(prev => prev.map(x => x.id === c.id ? { ...x, active: !x.active } : x));
  };

  const handleAddTeacher = nt => {
    setTeachersData(prev => ({ ...prev, [nt.service]: [...(prev[nt.service] || []), nt] }));
    setShowAddTeacher(false);
  };

  const handleEditTeacher = ut => {
    setTeachersData(prev => ({
      ...prev,
      [ut.service]: prev[ut.service].map(x => x.id === ut.id ? ut : x)
    }));
    setEditingTeacher(null);
  };

  const handleAddCourse = nc => {
    setCourseList(prev => [...prev, { ...nc, id: Date.now().toString(), active: true }]);
    setShowAddCourse(false);
  };

  const handleEditCourse = uc => {
    setCourseList(prev => prev.map(x => x.id === uc.id ? uc : x));
    setEditingCourse(null);
  };

  const handleEditService = updated => {
    setServiceListState(updated);
    setEditingService(null);
  };

  const handleAcceptRequest = req => {
    setTeachersData(prev => ({
      ...prev,
      [req.service]: [...(prev[req.service] || []), { ...req, active: true }]
    }));
    setTeacherRequests(prev => prev.filter(r => r.id !== req.id));
  };

  const handleRejectRequest = req => {
    setTeacherRequests(prev => prev.filter(r => r.id !== req.id));
  };

  return (
    <div className="flex min-h-screen bg-[#1E2022] text-white">
      <aside className="w-64 h-screen bg-[#121416] p-6 fixed top-0 left-0">
        <h2 className="text-xl font-bold mb-6 text-[#F0F5F9]">EnrollHub – Admin</h2>
        {navItems.map(n => (
          <button key={n.id} onClick={() => { setActiveSection(n.id); setSearchTerm(""); setCurrentPage(1); setFilterService(""); }}
            className={`block w-full text-left px-3 py-2 rounded-md ${activeSection === n.id ? "bg-[#F0F5F9] text-black font-bold" : "hover:bg-[#52616B]"}`}>
            {n.label}
          </button>
        ))}
      </aside>

      <main className="flex-1 ml-64 p-6 overflow-auto">
        <div className="bg-[#2C2F33] p-6 rounded-xl shadow min-h-[85vh]">
          {activeSection === "teachers" && (
            <>
              <div className="flex justify-between mb-4">
                <div className="flex gap-4">
                  <button onClick={() => { setActiveTeacherTab("approved"); setCurrentPage(1); }}
                    className={`px-4 py-2 rounded ${activeTeacherTab === "approved" ? "bg-green-700" : "bg-gray-700"}`}>✅ Approved</button>
                  <button onClick={() => { setActiveTeacherTab("removed"); setCurrentPage(1); }}
                    className={`px-4 py-2 rounded ${activeTeacherTab === "removed" ? "bg-red-700" : "bg-gray-700"}`}>❌ Removed</button>
                  <button onClick={() => { setActiveTeacherTab("requests"); setCurrentPage(1); }}
                    className={`px-4 py-2 rounded ${activeTeacherTab === "requests" ? "bg-yellow-600" : "bg-gray-700"}`}>📥 Requests</button>
                </div>
                <div className="flex gap-2">
                  <input type="text" placeholder="Search teachers..."
                    value={searchTerm} onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 rounded w-64 text-black border border-gray-500" />
                  <button onClick={() => setShowAddTeacher(true)} className="bg-yellow-400 text-black px-4 py-2 rounded">+ Add</button>
                </div>
              </div>

              {activeTeacherTab !== "requests" ? (
                <div className="overflow-x-auto">
                  <table className="min-w-[1000px] w-full table-auto border border-gray-600 text-sm">
                    <thead className="bg-gray-700 text-white whitespace-nowrap">
                      <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Service</th>
                        <th className="px-4 py-2 border">City</th>
                        <th className="px-4 py-2 border">Course</th>
                        <th className="px-4 py-2 border">Skills</th>
                        <th className="px-4 py-2 border">Rate</th>
                        <th className="px-4 py-2 border">Schedule</th>
                        <th className="px-4 py-2 border">Qualifications</th>
                        <th className="px-4 py-2 border">Ratings</th>
                        <th className="px-4 py-2 border">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white text-black whitespace-nowrap">
                      {pagedTeachers.map(t => (
                        <tr key={t.id}>
                          <td className="px-4 py-2 border">{t.name}</td>
                          <td className="px-4 py-2 border">{t.service}</td>
                          <td className="px-4 py-2 border">{t.city}</td>
                          <td className="px-4 py-2 border">{t.course}</td>
                          <td className="px-4 py-2 border">{t.skills.join(", ")}</td>
                          <td className="px-4 py-2 border">₹{t.rate}</td>
                          <td className="px-4 py-2 border">{t.schedule.join(", ")}</td>
                          <td className="px-4 py-2 border">{t.qualifications}</td>
                          <td className="px-4 py-2 border">{t.ratings}</td>
                          <td className="px-4 py-2 border space-x-2">
                            <button onClick={() => toggleTeacher(t)} className={`px-3 py-1 rounded text-white ${t.active ? "bg-red-600" : "bg-green-600"}`}>
                              {t.active ? "Remove" : "Approve"}
                            </button>
                            <button onClick={() => setEditingTeacher(t)} className="px-3 py-1 bg-blue-600 text-white rounded">Edit</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="mt-6 flex justify-center gap-2">
                    {[...Array(teacherPages)].map((_, i) =>
                      <button key={i} onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 rounded ${i + 1 === currentPage ? "bg-yellow-400 text-black" : "bg-white text-black"}`}>{i + 1}</button>
                    )}
                  </div>
                </div>
              ) : (
                <table className="w-full table-auto border border-gray-600 text-sm">
                  <thead className="bg-gray-700 text-white whitespace-nowrap">
                    <tr>
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Service</th>
                      <th className="px-4 py-2 border">City</th>
                      <th className="px-4 py-2 border">Course</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-black whitespace-nowrap">
                    {teacherRequests.map(req => (
                      <tr key={req.id}>
                        <td className="px-4 py-2 border">{req.name}</td>
                        <td className="px-4 py-2 border">{req.service}</td>
                        <td className="px-4 py-2 border">{req.city}</td>
                        <td className="px-4 py-2 border">{req.course}</td>
                        <td className="px-4 py-2 border space-x-2">
                          <button onClick={() => handleAcceptRequest(req)} className="px-3 py-1 bg-green-600 text-white rounded">Accept</button>
                          <button onClick={() => handleRejectRequest(req)} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          )}

          {/* ========== Courses Section ========== */}
          {activeSection === "courses" && (
            <>
              <div className="flex justify-between mb-4">
                <div className="flex gap-4">
                  <button onClick={() => { setActiveCourseTab("active"); setCurrentPage(1); }}
                    className={`px-4 py-2 rounded ${activeCourseTab === "active" ? "bg-green-700" : "bg-gray-700"}`}>✅ Active</button>
                  <button onClick={() => { setActiveCourseTab("removed"); setCurrentPage(1); }}
                    className={`px-4 py-2 rounded ${activeCourseTab === "removed" ? "bg-red-700" : "bg-gray-700"}`}>❌ Removed</button>
                </div>
                <div className="flex gap-2">
                  <select value={filterService} onChange={e => { setFilterService(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 rounded text-black border border-gray-500">
                    <option value="">All Services</option>
                    {serviceListState.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                  <input type="text" placeholder="Search courses..."
                    value={searchTerm} onChange={e => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    className="px-3 py-2 rounded w-64 text-black border border-gray-500" />
                  <button onClick={() => setShowAddCourse(true)} className="bg-yellow-400 text-black px-4 py-2 rounded">+ Add Course</button>
                  <button onClick={() => setEditingService(serviceListState)} className="bg-blue-500 text-white px-4 py-2 rounded">✏️ Add/Edit Services</button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pagedCourses.map(c =>
                  <CourseCard key={c.id} course={c} onToggle={() => toggleCourse(c)} onEdit={() => setEditingCourse(c)} />
                )}
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {[...Array(coursePages)].map((_, i) =>
                  <button key={i} onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1 rounded ${i + 1 === currentPage ? "bg-yellow-400 text-black" : "bg-white text-black"}`}>{i + 1}</button>
                )}
              </div>
            </>
          )}

          {activeSection === "payments" && <h2 className="text-2xl mb-4">Payments</h2>}
          {activeSection === "ratings" && <h2 className="text-2xl mb-4">Ratings</h2>}

          {showAddTeacher && (
            <AddTeacherModal onClose={() => setShowAddTeacher(false)} onSave={handleAddTeacher} serviceList={serviceListState} />
          )}
          {editingTeacher && (
            <EditTeacherModal teacher={editingTeacher} onClose={() => setEditingTeacher(null)} onSave={handleEditTeacher} serviceList={serviceListState} />
          )}
          {showAddCourse && (
            <AddCourseModal key={serviceListState.length} services={serviceListState.map(s => s.name)} onClose={() => setShowAddCourse(false)} onSave={handleAddCourse} />
          )}
          {editingCourse && (
            <EditCourseModal key={serviceListState.length} services={serviceListState.map(s => s.name)} course={editingCourse} onClose={() => setEditingCourse(null)} onSave={handleEditCourse} />
          )}
          {editingService && (
            <EditServiceModal services={serviceListState} onClose={() => setEditingService(null)} onSave={handleEditService} />
          )}
        </div>
      </main>
    </div>
  );
};
