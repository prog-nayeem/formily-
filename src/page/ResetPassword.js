import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import AlertComponent from "../components/AlertComponent";
import { auth } from "../components/firebase";
import Navbar from "../components/Navbar";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Invalid field",
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
      // const res = await sendPasswordResetEmail(auth, email);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Password reset email sent`,
      });
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
    <section>
      <Navbar />
      <div
        style={{ minHeight: "calc(100vh - 105px)" }}
        className="max-w-5xl mx-auto grid place-content-center"
      >
        <form
          className="max-w-md mx-auto min-w-[350px] -mt-32"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-3xl font-semibold mb-7">
            Reset Password
          </h2>
          <label className="label">New Password</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="*******"
          />
          <label className="label">Confirm Password</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="*******"
          />
          <button className="button w-full" type="submit">
            Submit
          </button>
        </form>
      </div>

      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default ResetPassword;
