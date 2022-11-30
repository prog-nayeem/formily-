import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import { signOut } from "firebase/auth";
import { auth } from "../components/firebase";
import AlertComponent from "../components/AlertComponent";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const [alert, setOpenAlert] = useState({
    open: false,
    type: "",
    message: "",
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setOpenAlert({
          open: true,
          type: "success",
          message: "Logout successful",
        });
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        setOpenAlert({
          open: true,
          type: "error",
          message: error,
        });
      });
  };

  return (
    <>
      <div className="w-[250px] border-r sticky top-0 h-screen">
        <div className="h-[80px] px-6 flex items-center border-b">
          <Link to="/">
            <h2 className="text-[#2cd6b5] text-4xl cursor-pointer font-bold">
              Formify
            </h2>
          </Link>
        </div>
        <div
          style={{ minHeight: "calc(100vh - 80px" }}
          className="flex flex-col justify-between"
        >
          <div className="px-6 mt-5">
            <p className=" font-semibold text-gray-800 cursor-pointer">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive && "border-b-2 border-[#2cd6b5]"
                }
              >
                Templates
              </NavLink>
            </p>
          </div>
          <div className="border-t px-6 h-[80px] flex items-center">
            <div
              onClick={(event) => setAnchorEl(event.currentTarget)}
              className="flex items-center space-x-1 cursor-pointer"
            >
              <IconButton
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{ width: 32, height: 32, textTransform: "uppercase" }}
                >
                  {user?.firstName?.charAt(0)}
                </Avatar>
              </IconButton>
              <p className="font-semibold text-gray-800">{user?.firstName}</p>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => navigate("/change-password")}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={logOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <AlertComponent alert={alert} setOpenAlert={setOpenAlert} />
    </>
  );
};

export default Sidebar;
