import { updatePassword } from "firebase/auth";
import React, { useState } from "react";
import AlertComponent from "../components/AlertComponent";
import Sidebar from "../components/Sidebar";
import { auth } from "../components/firebase";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Invalid fields",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Password does not match",
      });
      return;
    }
    try {
      const user = auth.currentUser;
      const res = await updatePassword(user, newPassword);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Password change successfully`,
      });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setOpenAlert({
        open: true,
        type: "error",
        message: error.message,
      });
    }
  };

  return (
    <section className=" min-h-screen flex">
      <Sidebar />
      <div className="flex-1 grid place-content-center">
        <form
          className="max-w-md mx-auto min-w-[350px] -mt-32"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-3xl font-semibold mb-7">
            Change Password
          </h2>
          <label className="label">Current Password</label>
          <input
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="******"
          />
          <label className="label">New Password</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="******"
          />
          <label className="label">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="******"
          />
          <button type="submit" className="button w-full">
            Change Password
          </button>
        </form>
      </div>
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default ChangePassword;
