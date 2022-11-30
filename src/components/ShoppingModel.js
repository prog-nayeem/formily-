import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import AlertComponent from "./AlertComponent";

const ShoppingModel = ({ openShoppingModel, setOpenShoppingModel }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [shopping, setShopping] = useState({
    email: "",
    name: "",
    streetAddress: "",
    state: "",
    city: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
    card: "",
    expireDate: "",
  });
  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setShopping({
      ...shopping,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setOpenShoppingModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = collection(db, "shoppings");
      await addDoc(docRef, {
        ...shopping,
        user: user?.uid,
        timestamp: serverTimestamp(),
      });
      setOpenAlert({
        open: true,
        type: "success",
        message: `Shopping upload successfully`,
      });
      window.location.reload();
      setOpenShoppingModel(false);
    } catch (error) {
      setOpenAlert({
        open: true,
        type: "error",
        message: error,
      });
    }
  };

  return (
    <>
      <Dialog
        style={{
          minWidth: "600px",
          paddingRight: "50px",
          paddingLeft: "50px",
        }}
        open={openShoppingModel}
        onClose={handleClose}
      >
        <DialogTitle sx={{ padding: "0px" }}>Shopping</DialogTitle>
        <form className="min-w-[250px]">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={shopping.email}
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />

          <label className="label">Full Name</label>
          <input
            className="input"
            type="text"
            value={shopping.name}
            name="name"
            onChange={handleChange}
            placeholder="Full Name"
          />

          <label className="label">Street Address</label>
          <input
            className="input"
            type="text"
            value={shopping.streetAddress}
            name="streetAddress"
            onChange={handleChange}
            placeholder="Street Address"
          />

          <label className="label">State</label>
          <input
            className="input"
            type="text"
            name="state"
            onChange={handleChange}
            value={shopping.state}
            placeholder="State"
          />
          <label className="label">City</label>
          <input
            className="input"
            type="text"
            name="city"
            onChange={handleChange}
            value={shopping.city}
            placeholder="City"
          />

          <label className="label">ZIP Code</label>
          <input
            className="input"
            type="text"
            value={shopping.zipCode}
            name="zipCode"
            onChange={handleChange}
            placeholder="ZIP Code"
          />

          <label className="label">Country</label>
          <input
            className="input"
            type="text"
            value={shopping.country}
            name="country"
            onChange={handleChange}
            placeholder="Country"
          />

          <label className="label">Phone Number</label>
          <input
            className="input"
            type="number"
            value={shopping.phoneNumber}
            name="phoneNumber"
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <label className="label">Card Number</label>
          <input
            className="input"
            type="number"
            value={shopping.card}
            name="card"
            onChange={handleChange}
            placeholder="Card number"
          />

          <label className="label">Expire Date</label>
          <input
            className="input"
            type="text"
            value={shopping.expireDate}
            name="expireDate"
            onChange={handleChange}
            placeholder="MM/YY/CVC"
          />

          <DialogActions sx={{ padding: "0px", marginTop: "20px" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </form>
      </Dialog>
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </>
  );
};

export default ShoppingModel;
