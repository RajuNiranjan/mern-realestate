import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const Signin = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loding, setLoding] = useState(false);

  const { loding, error } = useSelector((state) => state.user);

  const navgate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // setLoding(true);
      dispatch(signInStart());
      const res = await fetch("/api/auth/Signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // setLoding(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoding(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navgate("/");
      console.log(data);
    } catch (error) {
      // setLoding(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loding}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loding ? "Loding..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/signup">
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
};

export default Signin;
