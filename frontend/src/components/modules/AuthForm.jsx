import { useState } from "react";

import PropTypes from "prop-types";

const AuthForm = ({ onSubmit, isLogin }) => {
  // ============= State ==============
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ============= Change Function ==============
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // ============= Submit Function ==============
  const submitHandler = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  // ============= Rendering ==============
  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col gap-4 max-w-sm mx-auto p-4 bg-gray-100 shadow rounded"
    >
      {!isLogin && (
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          placeholder="Name"
          className="p-2 border rounded"
        />
      )}
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={changeHandler}
        placeholder="Email"
        className="p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
        placeholder="Password"
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
};

export default AuthForm;
