import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { isValidEmail } from "../utils/validators";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
  if (localStorage.getItem("isLoggedIn")) {
    navigate("/profile");
  }
}, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  const emailTrimmed = email.trim();
  const passwordTrimmed = password.trim();

  if (!emailTrimmed || !passwordTrimmed) {
    alert("Please enter email and password");
    return;
  }

  if (!isValidEmail(emailTrimmed)) {
    alert("Invalid email format");
    return;
  }

  const savedUserRaw = localStorage.getItem("user");

  if (!savedUserRaw) {
    alert("No user found. Please sign up first.");
    return;
  }

  const savedUser = JSON.parse(savedUserRaw);

  if (
    emailTrimmed !== savedUser.email ||
    passwordTrimmed !== savedUser.password
  ) {
    alert("Invalid credentials");
    return;
  }
localStorage.setItem("isLoggedIn", "true");
  alert("Login successful!");
  navigate("/profile");
};


  return (

  <div className="login">
    <h1 className="login-title">Signin to your PopX account</h1>

    <div className="form-group">
      <label>Email Address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
    </div>

    <div className="form-group">
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
    </div>

    <button className="login-btn" onClick={handleLogin}>
      Login
    </button>
  </div>
);

}
