import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AlertComponent from "../components/AlertComponent";
import Navbar from "../components/Navbar";
import { doc, getDoc } from "firebase/firestore";
import Footer from "../components/Footer";

const Login = () => {
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
    if (!email || !password) {
      setOpenAlert({
        open: true,
        type: "error",
        message: "Invalid fields",
      });
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setOpenAlert({
        open: true,
        type: "success",
        message: `Log in sucessfull. Wellcome ${res.user.email}`,
      });
      // navigate("/dashboard");
      setEmail("");
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
            Sign In
          </h2>
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Link to="/forgot">
            <p className="text-end cursor-pointer text-gray-500 text-sm">
              Forgot password?
            </p>
          </Link>
          <button type="submit" className="button w-full">
            Sign in
          </button>
        </form>
      </div>
      <Footer />
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </section>
  );
};

export default Login;
