import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate, useParams } from 'react-router';

const Details = () => {
    const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [skill, setSkill] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { from: `/skills/${id}` } });
      return;
    }

    fetch("/public/skils.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.skillId === parseInt(id));
        setSkill(found);
      });
  }, [id, user, navigate]);

  if (!skill) return <p className="text-center mt-10">Loading...</p>;

  
  

    return (
        <div className="max-w-3xl mx-auto p-6">
     
      <img src={skill.image} alt={skill.skillName} className="rounded-lg mx-auto h-80 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-2">{skill.skillName}</h1>
      <p>{skill.description}</p>
      <p><strong>Provider:</strong> {skill.providerName}</p>
      <p><strong>Email:</strong> {skill.providerEmail}</p>
      <p><strong>Category:</strong> {skill.category}</p>
      <p><strong>Price:</strong> ${skill.price}</p>
      <p><strong>Rating:</strong> ⭐{skill.rating}</p>
            
        </div>
    );
};

export default Details;