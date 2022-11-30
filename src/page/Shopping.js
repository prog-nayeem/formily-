import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../components/firebase";
import ShoppingComponent from "../components/ShoppingComponent";
import ShoppingModel from "../components/ShoppingModel";
import Sidebar from "../components/Sidebar";

const Shopping = () => {
  const [openShoppingModel, setOpenShoppingModel] = useState(false);
  const [shoppings, setShoppings] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const getShopping = async () => {
    const queryRef = query(
      collection(db, "shoppings"),
      where("user", "==", user?.uid)
    );

    const querySnapshot = await getDocs(queryRef);
    const getShopping = [];
    querySnapshot.forEach((doc) =>
      getShopping.push({
        shopping: doc.data(),
        id: doc.id,
      })
    );

    setShoppings(getShopping);
  };

  useEffect(() => {
    getShopping();
  }, []);

  return (
    <section className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-10 bg-slate-50">
        <div className="flex items-center space-x-4">
          <p className="font-semibold text-gray-800 cursor-pointer">
            <NavLink
              to="/dashboard"
              className={({ isActive }) => isActive && "text-[#2cd6b5]"}
            >
              Job Application
            </NavLink>
          </p>
          <p className="font-semibold text-gray-800 cursor-pointer">
            <NavLink
              to="/dashboard/shopping"
              className={({ isActive }) => isActive && "text-[#2cd6b5]"}
            >
              Shopping
            </NavLink>
          </p>
        </div>
        <div className="flex gap-8 mt-10 flex-wrap ">
          {shoppings?.map(({ id, shopping }) => (
            <ShoppingComponent key={id} id={id} shopping={shopping} />
          ))}
        </div>
        <div className="fixed bottom-10 right-8 z-40 ">
          <button
            onClick={() => setOpenShoppingModel(true)}
            className="button text-black hover:text-white mt-0 bg-transparent hover:bg-[#2cd6b5]"
          >
            Create New
          </button>
          <ShoppingModel
            openShoppingModel={openShoppingModel}
            setOpenShoppingModel={setOpenShoppingModel}
          />
        </div>
      </div>
    </section>
  );
};

export default Shopping;
