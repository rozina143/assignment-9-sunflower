import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext) || {};

    return (
<div className="navbar bg-amber-600 px-4 flex flex-wrap items-center justify-center">
      <div className=" md:flex-1 lg:flex-1" >
        <Link to="/" className="text-xl font-bold">SkillSwap</Link>
      </div>


      <div className="ml-6 flex items-center space-x-4  mr-7 ">
        <Link to="/">Home</Link>
        {user && <Link to="/profile" className='ml-4'>My Profile</Link>}
      </div>

      
      <div className="flex md:flex gap-6 items-center justify-center ">
        {user ? (
          <>
               
            <div className="tooltip tooltip-bottom " data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/boy.png"}
                className="w-10 h-10 rounded-full "
              />
            </div>
            <button onClick={logout} className="btn btn-sm btn-error">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm">Login</Link>
            <Link to="/signup" className="btn btn-sm btn-primary">SignUp</Link>
          </>
        )}
      </div>

  
    </div>
    );
};

export default Navbar;