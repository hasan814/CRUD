import { registerUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";

import AuthForm from "../modules/AuthForm";

const RegisterPage = () => {
  // ================ Navigate ==================
  const navigate = useNavigate();

  // ================ Regsiter Function ==================
  const handleRegister = async (formData) => {
    try {
      const response = await registerUser(formData);
      console.log(response);
      if (response.status === 201) toast.success("Registration successful");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    }
  };

  // ================ Rendering ==================
  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AuthForm onSubmit={handleRegister} isLogin={false} />
        <button
          onClick={() => navigate("/login")}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Already have an account? Login
        </button>
      </div>
    </>
  );
};

export default RegisterPage;
