import { updateUser } from "../../utils/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

import PropTypes from "prop-types";

const EditUserForm = ({ user, onCancel, onSave }) => {
  // ============== State ==============
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });

  // ============== Change Function ==============
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ============== Submit Function ==============
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      await updateUser(user._id, formData);
      toast.success("User updated");
      onSave();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update user");
    }
  };

  // ============== Rendering ==============
  return (
    <form onSubmit={submitHandler} className="p-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold mb-4">Edit User</h2>
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
        className="p-2 border rounded w-full mb-2"
      />
      <div className="mb-4">
        <label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={formData.isAdmin}
            onChange={(e) =>
              setFormData({ ...formData, isAdmin: e.target.checked })
            }
          />
          Admin
        </label>
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
      >
        Save
      </button>
      <button
        type="button"
        onClick={onCancel}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </form>
  );
};

EditUserForm.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  }).isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditUserForm;
