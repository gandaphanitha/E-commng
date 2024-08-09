
// import React, { useState } from "react";
// import "../css/SignIn.css";

// const SignIn = ({ onClose }) => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (phoneNumber.trim() === "") {
//       alert("Please enter your phone number.");
//       return;
//     }
//     console.log("Logging in with phone number:", phoneNumber);
//     localStorage.setItem("userPhoneNumber", phoneNumber);
//     setPhoneNumber("");
//     onClose();
//   };

//   const handleRegister = () => {
//     if (
//       phoneNumber.trim() === "" ||
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === ""
//     ) {
//       alert("Please fill in all the fields.");
//       return;
//     }
//     console.log("Registering with:", { name, phoneNumber, email, password });
//     localStorage.setItem(
//       "userInfo",
//       JSON.stringify({ name, phoneNumber, email, password })
//     );
//     setName("");
//     setPhoneNumber("");
//     setEmail("");
//     setPassword("");
//     onClose();
//   };

//   return (
//     <div className="form-container">
//       {isRegister ? (
//         <div className="register-form">
//           <h2>Register</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleRegister}>Register</button>
//           <p onClick={() => setIsRegister(false)}>Already have an account? Sign In</p>
//         </div>
//       ) : (
//         <div className="login-form">
//           <h2>Login</h2>
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//           <p onClick={() => setIsRegister(true)}>Create an account</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../css/SignIn.css"; // Ensure the correct path for your CSS file

// const SignIn = ({ onClose }) => {
//   const [isRegister, setIsRegister] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); // Use navigate for redirection

//   const handleLogin = () => {
//     if (phoneNumber.trim() === "") {
//       alert("Please enter your phone number.");
//       return;
//     }
//     console.log("Logging in with phone number:", phoneNumber);
//     localStorage.setItem("userPhoneNumber", phoneNumber);
//     setPhoneNumber("");
//     onClose();
//     navigate("/"); // Redirect to the home page after login
//   };

//   const handleRegister = () => {
//     if (
//       phoneNumber.trim() === "" ||
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === ""
//     ) {
//       alert("Please fill in all the fields.");
//       return;
//     }
//     console.log("Registering with:", { name, phoneNumber, email, password });
//     localStorage.setItem(
//       "userInfo",
//       JSON.stringify({ name, phoneNumber, email, password })
//     );
//     setName("");
//     setPhoneNumber("");
//     setEmail("");
//     setPassword("");
//     onClose();
//     navigate("/"); // Redirect to the home page after registration
//   };

//   return (
//     <div className="form-container">
//       {isRegister ? (
//         <div className="register-form">
//           <h2>Register</h2>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button onClick={handleRegister}>Register</button>
//           <p onClick={() => setIsRegister(false)}>Already have an account? Sign In</p>
//         </div>
//       ) : (
//         <div className="login-form">
//           <h2>Login</h2>
//           <input
//             type="text"
//             placeholder="Phone Number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button onClick={handleLogin}>Login</button>
//           <p onClick={() => setIsRegister(true)}>Create an account</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SignIn.css"; // Ensure the correct path for your CSS file

const SignIn = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleLogin = () => {
    const storedUserInfo = localStorage.getItem("userInfo");
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

    if (phoneNumber.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }

    const user = Object.values(userInfo).find(
      (user) => user.phoneNumber === phoneNumber
    );

    if (user) {
      console.log("Logging in with phone number:", phoneNumber);
      localStorage.setItem("userPhoneNumber", phoneNumber);
      setPhoneNumber("");
      onClose();
      navigate("/"); // Redirect to the home page after login
    } else {
      alert("You don't have an account. Please create a new account.");
    }
  };

  const handleRegister = () => {
    if (
      phoneNumber.trim() === "" ||
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Store user information
    const storedUserInfo = localStorage.getItem("userInfo");
    const userInfo = storedUserInfo ? JSON.parse(storedUserInfo) : {};

    userInfo[phoneNumber] = { name, phoneNumber, email, password };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    console.log("Registering with:", { name, phoneNumber, email, password });

    setName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    onClose();
    navigate("/"); // Redirect to the home page after registration
  };

  return (
    <div className="form-container">
      {isRegister ? (
        <div className="register-form">
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister}>Register</button>
          <p onClick={() => setIsRegister(false)}>Already have an account? Sign In</p>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p onClick={() => setIsRegister(true)}>Create an account</p>
        </div>
      )}
    </div>
  );
};

export default SignIn;
