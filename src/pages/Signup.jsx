import { useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { isValidEmail, isValidPhone } from "../utils/validators";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();
  useEffect(() => {
  if (localStorage.getItem("isLoggedIn")) {
    navigate("/profile");
  }
}, [navigate]);


  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSignup = () => {
    const { name, phone, email, password } = form;

    if (!name || !phone || !email || !password) {
      alert("Please fill all required fields");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email");
      return;
    }

    const existingUser = localStorage.getItem("user");
    if (existingUser) {
      alert("User already registered. Please login.");
      navigate("/login");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful!");
    navigate("/login");
  };

  return (

  <div className="signup">
    <h1 className="signup-title">Create your PopX account</h1>

    <div className="form-group">
      <label>Full Name*</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter full name"
      />
    </div>

    <div className="form-group">
      <label>Phone Number*</label>
      <input
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Enter phone number"
      />
    </div>

    <div className="form-group">
      <label>Email Address*</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Enter email address"
      />
    </div>

    <div className="form-group">
      <label>Password*</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
    </div>

    <div className="form-group">
      <label>Company Name</label>
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Enter company name"
      />
    </div>

    <button className="signup-btn" onClick={handleSignup}>
      Create Account
    </button>
    <p style={{ marginTop: "16px", fontSize: "14px" }}>
  Already registered?{" "}
  <span
    style={{ color: "#6c25ff", cursor: "pointer" }}
    onClick={() => navigate("/login")}
  >
    Login
  </span>
</p>

  </div>
);

}
