import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
  throw new Error("SignUp must be used within an AuthProvider");
}
      const { signup, googleLogin, updateUser } = auth;
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

    //  Password validation
    if (!/[A-Z]/.test(password)) return toast.error("Must contain an uppercase letter!");
    if (!/[a-z]/.test(password)) return toast.error("Must contain a lowercase letter!");
    if (password.length < 6) return toast.error("Password must be at least 6 characters!");

    signup(email, password)
      .then(() => {
        updateUser(name, photo);
        toast.success("Signup successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Google Signup successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

    return (
         <div className="min-h-screen flex justify-center items-center bg-base-200">
    
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Signup</h2>

        <form onSubmit={handleSignup} className="space-y-3">
          <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
          <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
          <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
          
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

          <button className="btn btn-primary w-full" type="submit">
         SignUp
          </button>
        </form>

        <div className="divider">OR</div>

        <button onClick={handleGoogle} className="btn w-full flex items-center justify-center gap-2">
          <FcGoogle size={20} /> Continue with Google
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
    );
};

export default SignUp;