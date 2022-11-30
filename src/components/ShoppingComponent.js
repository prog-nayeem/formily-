import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { db } from "./firebase";
import { deleteDoc, doc } from "firebase/firestore";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ShoppingEditModel from "./ShoppingEditModel";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ShoppingComponent = ({ id, shopping }) => {
  const [openShoppingEditModel, setOpenShoppingEditModel] = useState(false);

  const deleteShopping = (id) => {
    deleteDoc(doc(db, "shoppings", id))
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white h-fit group relative p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-300 ease-in-out max-w-fit">
      <img src="/" alt="" />
      <div>
        <h2 className="font-semibold text-gray-900">Shopping</h2>
        <p className="text-gray-900 text-sm">{shopping?.name}</p>
        <p className="text-gray-700 text-sm">{shopping?.email}</p>
        <div className="flex items-center space-x-3 mb-3 mt-1"></div>
        <p className="text-gray-700 text-sm">
          <LocationOnOutlinedIcon sx={{ fontSize: "20px" }} />
          {shopping?.streetAddress}, {shopping?.city}, {shopping?.state},{" "}
          {shopping?.zipCode}, {shopping?.country}
        </p>
        <p className="text-gray-700 text-sm">
          <LocalPhoneIcon sx={{ fontSize: "20px" }} /> {shopping?.phoneNumber}
        </p>
        <p className="text-gray-700 text-sm">
          <CreditCardIcon sx={{ fontSize: "20px" }} /> {shopping?.card}
        </p>
        <p className="text-gray-700 text-sm">
          <CalendarMonthIcon sx={{ fontSize: "20px" }} /> {shopping?.expireDate}
        </p>
      </div>
      <div className="absolute top-4 right-4 flex items-center transition-all duration-700 ease-in-out space-x-1 opacity-0 group-hover:opacity-100">
        <EditIcon
          onClick={() => setOpenShoppingEditModel(true)}
          sx={{ fontSize: "20px", cursor: "pointer" }}
        />
        <DeleteOutlineIcon
          onClick={() => deleteShopping(id)}
          sx={{ fontSize: "20px", cursor: "pointer" }}
        />
      </div>
      <ShoppingEditModel
        openShoppingEditModel={openShoppingEditModel}
        setOpenShoppingEditModel={setOpenShoppingEditModel}
        id={id}
        value={shopping}
      />
    </div>
  );
};

export default ShoppingComponent;
