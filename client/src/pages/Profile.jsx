import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 cursor-pointer object-cover self-center"
        />
        <input
          id="username"
          type="text"
          placeholder="username"
          className="rounded-lg border p-3 max-w-xl"
        />
        <input
          id="email"
          type="email"
          placeholder="email"
          className="rounded-lg border p-3 max-w-xl"
        />
        <input
          id="password"
          type="password"
          placeholder="password"
          className="rounded-lg border p-3 max-w-xl"
        />
        <button className="bg-slate-700 text-white uppercase rounded-lg p-3 hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 capitalize cursor-pointer">
          delete account
        </span>
        <span className="text-red-700 capitalize cursor-pointer">
          sign out account
        </span>
      </div>
    </div>
  );
};

export default Profile;
