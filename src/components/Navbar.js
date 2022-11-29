import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="h-[80px] flex justify-between items-center px-12">
      <Link to="/">
        <h2 className="text-[#2cd6b5] text-4xl cursor-pointer font-bold">
          Formily
        </h2>
      </Link>
      {user ? (
        <Link to="/dashboard">
          <p className="text-sm cursor-pointer font-semibold hover:text-[#3cd6b5] text-gray-700">
            Dashboard
          </p>
        </Link>
      ) : (
        <div className="flex items-center space-x-5">
          <Link to="/login">
            <button className="button text-black hover:text-white mt-0 bg-transparent hover:bg-[#2cd6b5]">
              Log in
            </button>
          </Link>
          <Link to="/signup">
            <button className="button mt-0">Sign up</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
