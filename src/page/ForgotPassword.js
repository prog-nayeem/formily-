import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import AlertComponent from "../components/AlertComponent";
import { auth } from "../components/firebase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Invalid field",
      });
      return;
    }

    try {
      const res = await sendPasswordResetEmail(auth, email);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Password reset email sent`,
      });
      setEmail("");
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
            Forgot Password
          </h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            placeholder="name@formily.com"
          />
          <button className="button w-full" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default ForgotPassword;
