import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext) || {};

    return (
   <div className="navbar bg-amber-600 px-4">
     
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">SkillSwap</Link>
      </div>


      <div className="sm:ml-7  mr-7 items-center">
        <Link to="/">Home</Link>
        {user && <Link to="/profile" className='ml-4'>My Profile</Link>}
      </div>

      
      <div className=" md:flex gap-6 items-center">
        {user ? (
          <>
               
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
              <img
                src={user.photoURL || "https://i.ibb.co/ZYW3VTp/boy.png"}
                className="w-10 h-10 rounded-full"
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