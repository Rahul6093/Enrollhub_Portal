import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_CREDENTIALS = {
  email: "admin@enrollhub.com",
  password: "admin123!",
};

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center h-[100vh]">
        <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-xl font-bold"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };

export const AuthModals = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [loginTab, setLoginTab] = useState("student");
  const [signUpTab, setSignUpTab] = useState("student");

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSignUpChange = (e) =>
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

  const isPasswordValid = (password) => {
    const lengthCheck = password.length >= 8;
    const numberCheck = /\d/.test(password);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return {
      lengthCheck,
      numberCheck,
      specialCharCheck,
      allValid: lengthCheck && numberCheck && specialCharCheck,
    };
  };

  const loginUser = () => {
    if (loginTab === "admin") {
      if (
        loginData.email === ADMIN_CREDENTIALS.email &&
        loginData.password === ADMIN_CREDENTIALS.password
      ) {
        navigate("/admin");
        setLoginOpen(false);
      } else {
        alert("Invalid admin credentials");
      }
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const match = users.find(
      (u) =>
        u.email === loginData.email &&
        u.password === loginData.password &&
        u.role === loginTab
    );

    if (match) {
      navigate(`/${loginTab}`);
      setLoginOpen(false);
    } else {
      alert("Invalid credentials");
    }
  };

  const signUpUser = () => {
    const { email, password, confirmPassword } = signUpData;
    const { allValid } = isPasswordValid(password);

    if (!email || !password || !confirmPassword)
      return alert("Please fill all fields");

    if (password !== confirmPassword)
      return alert("Passwords do not match");

    if (!allValid)
      return alert(
        "Password must be at least 8 characters long and include a number and special character"
      );

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExists = users.find((u) => u.email === email);
    if (alreadyExists) return alert("User already exists");

    const newUser = { email, password, role: signUpTab };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    navigate(`/${signUpTab}`);
    setSignUpOpen(false);
  };

  

  const { lengthCheck, numberCheck, specialCharCheck } = isPasswordValid(
    signUpData.password
  );

  return (
    <>
      {/* Trigger Buttons */}
      <div className="flex justify-between gap-5">
        <button
          onClick={() => setSignUpOpen(true)}
          className="ml-3 px-2 py-1 text-sm text-black bg-white border border-white rounded hover:bg-gray-600 hover:text-white transition"
        >
          <span className="text-nowrap">Sign Up</span>
        </button>

        <button
          onClick={() => setLoginOpen(true)}
          className="px-2 py-1 text-sm text-black bg-white border border-white rounded hover:bg-gray-600 hover:text-white transition"
        >
          Login
        </button>
      </div>

      {/* Login Modal */}
      <Modal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <div className="flex gap-2 mb-4">
          {["student", "teacher", "admin"].map((role) => (
            <button
              key={role}
              onClick={() => setLoginTab(role)}
              className={`px-3 py-1 rounded ${
                loginTab === role ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full rounded mb-3"
          onChange={handleLoginChange}
          value={loginData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-3"
          onChange={handleLoginChange}
          value={loginData.password}
        />

        <button
          onClick={loginUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Login
        </button>
      </Modal>

      {/* Sign Up Modal */}
      <Modal  isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Sign Up</h2>
        <div className="flex gap-2 mb-4">
          {["student", "teacher"].map((role) => (
            <button
              key={role}
              onClick={() => setSignUpTab(role)}
              className={`px-3 py-1 rounded ${
                signUpTab === role ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          ))}
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 w-full rounded mb-3"
          onChange={handleSignUpChange}
          value={signUpData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-2 w-full rounded mb-1"
          onChange={handleSignUpChange}
          value={signUpData.password}
        />

        {/* Live Password Rules */}
        <div className="text-xs text-gray-700 mb-2 pl-1 space-y-1">
          <p className={lengthCheck ? "text-green-600" : "text-red-600"}>
            • At least 8 characters
          </p>
          <p className={numberCheck ? "text-green-600" : "text-red-600"}>
            • Includes a number
          </p>
          <p className={specialCharCheck ? "text-green-600" : "text-red-600"}>
            • Includes a special character
          </p>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="border p-2 w-full rounded mb-3"
          onChange={handleSignUpChange}
          value={signUpData.confirmPassword}
        />

        <button
          onClick={signUpUser}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Sign Up
        </button>
      </Modal>
    </>
  );
};
