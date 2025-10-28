import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

  if (!user) {
    return <p>Please login to see your profile.</p>;
  }
    return (
         <div className="p-6 max-w-md mx-auto bg-amber-950 shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <img
        src={user.photoURL || 'https://via.placeholder.com/150'}
        alt={user.displayName}
        className="w-32 h-32 rounded-full mb-4"
      />
      <p><strong>Name:</strong> {user.displayName || 'N/A'}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
    );
};

export default Profile;