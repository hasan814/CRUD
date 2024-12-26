import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../utils/api";
import { useState } from "react";

const UserPage = () => {
  // ================ State ===================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const userId = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).id;

  const navigate = useNavigate();

  // ================ Change Function ===================
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ================ Submit Function ===================
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await updateUser(userId, formData);
      toast.success("Profile updated");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    }
  };

  // ================ Logout Handler ===================
  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logout Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  // ================ Rendering ===================
  return (
    <>
      <Toaster />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <form
          onSubmit={submitHandler}
          className="p-4 bg-gray-100 rounded shadow"
        >
          <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder="Name"
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email"
            className="p-2 border rounded w-full mb-4"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </form>
        <button
          onClick={logoutHandler}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default UserPage;
