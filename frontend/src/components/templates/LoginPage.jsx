import { useNavigate } from "react-router-dom";
import { loginUser } from "../../utils/api";
import { toast, Toaster } from "react-hot-toast";

import AuthForm from "../modules/AuthForm";

const LoginPage = () => {
  // ============== Naviagte ===============
  const navigate = useNavigate();

  // ============== Login Function ===============
  const loginHandler = async (formData) => {
    try {
      const { data } = await loginUser(formData);
      localStorage.setItem("token", data.token);
      toast.success("Login successful");
      setTimeout(() => {
        navigate(data.isAdmin ? "/admin" : "/user");
      }, 1000);
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    }
  };

  // ============== Rendering ===============
  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <AuthForm onSubmit={loginHandler} isLogin />
        <button
          onClick={() => navigate("/register")}
          className="mt-4 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
        >
          Don&apos;t have an account? Register
        </button>
      </div>
    </>
  );
};

export default LoginPage;
