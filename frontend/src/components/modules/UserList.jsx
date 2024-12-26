import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import PropTypes from "prop-types";
import { deleteUser, fetchUsers } from "../../utils/api";

const UserList = ({ onEdit }) => {
  // ============= State =============
  const [users, setUsers] = useState([]);

  // ============= Fetch Data =============
  const loadUsers = async () => {
    try {
      const { data } = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users");
    }
  };

  // ============= Delete Function =============
  const deleteHandler = async (id) => {
    try {
      await deleteUser(id);
      toast.success("User deleted");
      loadUsers();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete user");
    }
  };

  // ============= Effect =============
  useEffect(() => {
    loadUsers();
  }, []);

  // ============= Rendering =============
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user._id}
            className="p-2 border rounded flex justify-between items-center"
          >
            <div>
              <strong>{user.name}</strong> ({user.email})
            </div>
            <div>
              <button
                onClick={() => onEdit(user)}
                className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => deleteHandler(user._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default UserList;
