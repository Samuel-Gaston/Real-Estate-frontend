import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import '../components/All.css';
const ResetPassword = () => {
  const { token } = useParams<{ token: string }>();
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (!password) {
      Swal.fire("Error", "Password is required", "error");
      return;
    }

    try {
      await axios.post(`http://localhost:5000/user/reset-password/${token}`, {
        newPassword: password
      });

      Swal.fire("Success", "Password reset successful", "success");
      setPassword(""); // Clear input
      navigate("/"); // Go back to login
    } catch (error: any) {
      Swal.fire(
        "Error",
        error.response?.data?.msg || "Invalid or expired link",
        "error"
      );
    }
  };

  return (
    <div className="bg-gray-900" style={{height:1000}}>
     <div className="flex flex-wrap justify-center">
       <div className="login bg-gray-900"  style={{marginTop:100}}>
        <h2 className="text-center" style={{marginTop:30, marginBottom:30}}>Reset Password</h2>

    <div className="flex flex-wrap justify-center">
        <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div className="flex flex-wrap justify-center"  style={{marginBottom:50}}>
        <button onClick={handleResetPassword}>
        Reset Password
      </button>
    </div>
       </div>
     </div>
    </div>
  );
};

export default ResetPassword;
