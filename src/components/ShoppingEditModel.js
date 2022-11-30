import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import AlertComponent from "./AlertComponent";

const ShoppingEditModel = ({
  openShoppingEditModel,
  setOpenShoppingEditModel,
  value,
  id,
}) => {
  const [shopping, setShopping] = useState({
    email: value?.email || "",
    name: value?.name || "",
    streetAddress: value?.streetAddress || "",
    state: value?.state || "",
    city: value?.city || "",
    zipCode: value?.zipCode || "",
    country: value?.country || "",
    phoneNumber: value?.phoneNumber || "",
    card: value?.card || "",
    expireDate: value?.expireDate || "",
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
    setOpenShoppingEditModel(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, "shoppings", id);

      await updateDoc(docRef, shopping);

      setOpenAlert({
        open: true,
        type: "success",
        message: `Update successfully`,
      });
      window.location.reload();
      setOpenShoppingEditModel(false);
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
        open={openShoppingEditModel}
        onClose={handleClose}
      >
        <DialogTitle sx={{ padding: "0px" }}>Edit Shopping</DialogTitle>
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

export default ShoppingEditModel;
