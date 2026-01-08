import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import '../components/All.css'
const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
 

  const handleForgotPassword = async () => {
    if (!email) {
      Swal.fire("Error", "Email is required", "error");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/register/forgot-password", { email });

      Swal.fire({
        title: "Success",
        html: `Password reset link generated.<br/>
               <b>Preview URL (for testing):</b> <a href="${res.data.previewURL}" target="_blank">${res.data.previewURL}</a>`,
        icon: "success",
        confirmButtonText: "OK"
      });

      setEmail(""); 
    
    } catch (error: any) {
      Swal.fire(
{
          title: "Error",
       text: error.response?.data?.msg || "Something went wrong",
        confirmButtonColor:'var(--color-gray-950)'
}
      );
    }
  };

  return (
 <div className="bg-gray-900" style={{height:1000}}>
    <div className="flex flex-wrap justify-center">
     <div className="login" style={{marginTop:100}}>
      <h2 className="text-center" style={{marginTop:30, marginBottom:30}}>Forgot Password</h2>

    <div className="flex flex-wrap justify-center">
        <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      style={{marginLeft:0}}/>
    </div>
<br />
 <div className="flex flex-wrap justify-center" style={{marginBottom:50}}>
       <button onClick={handleForgotPassword}>
        Send Reset Link
      </button>
 </div>
    </div>
   </div>
 </div>
  );
};

export default ForgotPassword;
