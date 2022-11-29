import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import { auth, db } from "../components/firebase";
import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Invalid fields",
      });
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Sign up sucessfull. Wellcome ${res.user.email}`,
      });

      const userData = {
        uid: res.user.uid,
        firstName,
        lastName,
        email,
      };
      setDoc(doc(db, "users", `${res.user.uid}`), userData);
      setFirstName("");
      setLastName("");
      setPassword("");
      setPassword("");
    } catch (error) {
      setOpenAlert({
        open: true,
        type: "error",
        message: error.message,
      });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", `${user.uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          let data = docSnap.data();
          data.accessToken = user.accessToken;
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          localStorage.setItem(
            "user",
            JSON.stringify({ accessToken: user.accessToken, email: user.email })
          );
        }
        navigate("/dashboard");
      }
    });
  }, [auth, db]);

  return (
    <section>
      <Navbar />
      <div
        style={{ minHeight: "calc(100vh - 105px)" }}
        className="max-w-5xl mx-auto"
      >
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <h2 className="text-center text-3xl font-semibold mb-7 mt-6">
            Sign Up
          </h2>
          <label className="label">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
            type="text"
            placeholder="John"
          />
          <label className="label">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
            type="text"
            placeholder="Doe"
          />
          <label className="label">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            placeholder="name@formily.com"
          />
          <label className="label">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            type="password"
            placeholder="******"
          />
          <button type="submit" className="button w-full">
            Sign up
          </button>
        </form>
      </div>
      <Footer />
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default SignUp;
