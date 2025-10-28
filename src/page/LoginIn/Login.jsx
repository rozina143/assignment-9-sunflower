import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff, } from 'react-icons/io5';


const Login = () => {
       const auth = useContext(AuthContext);
  const login = auth?.login;
  const googleLogin = auth?.googleLogin;
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    login(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Login successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };
    return (
         <div className="min-h-screen flex justify-center items-center bg-base-200">
     
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
          
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <IoEyeOff size={20} /> : <IoEye/>}
            </span>
          </div>

          <Link to="/forgot" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </Link>

          <button className="btn btn-primary w-full" type="submit">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogle} className="btn w-full flex items-center justify-center gap-2">
          <FcGoogle size={20} /> Login with Google
        </button>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    );
};

export default Login;