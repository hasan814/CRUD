import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import EditUserForm from "../modules/EditUserForm";
import UserList from "../modules/UserList";

const AdminPage = () => {
  // ================= State ====================
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  // ================= Logout Handler ====================
  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("LogOut Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  // ================= Rendering ====================
  return (
    <>
      <Toaster />
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        {editingUser ? (
          <EditUserForm
            user={editingUser}
            onCancel={() => setEditingUser(null)}
            onSave={() => setEditingUser(null)}
          />
        ) : (
          <UserList onEdit={(user) => setEditingUser(user)} />
        )}
      </div>
    </>
  );
};

export default AdminPage;
