import { React, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);

  const changeAvatar = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className=" min-h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Signup page
        </h1>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              {/* username input field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* Email input field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              {/* password input field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <VisibilityIcon
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <VisibilityOffIcon
                      className="absolute right-2 top-2 cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                <div className="flex justify-center mt-3 items-center">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatarImage"
                      className="h-[50px] w-[50px] rounded-[50%]"
                    />
                  ) : (
                    <AccountCircleIcon className="text-gray-500 h-8 w-8 " />
                  )}
                  <label className="shadow py-1 px-5 ml-2 text-white bg-gray-600 cursor-pointer rounded-[8px]">
                    <input
                      type="file"
                      accept="image/jpg,image/png,image/jpeg"
                      onChange={changeAvatar}
                      className="sr-only"
                    />
                    upload file
                  </label>
                </div>
              </div>
              <div className=" flex justify-between">
                <div>
                  <input type="checkbox" />
                  <label className="ml-2">Remember me</label>
                </div>
                <div className=" text-blue-500 font-bold">
                  <Link>Forgot your password?</Link>
                </div>
              </div>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white w-full hover:bg-gray-300 hover:text-black rounded-[8px]"
              >
                Submit
              </button>
              <div className="flex mt-1">
                <h4>Already have an account?</h4>
                <Link to="/login" className="text-blue-500 ml-1">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
