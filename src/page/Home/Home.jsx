import React, { useEffect, useState } from 'react';
import AOS from "aos";
import { Link } from 'react-router';


const Home = () => {
      const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });
    fetch("/public/skils.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
    return (
        <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to SkillSwap</h1>
      <p>Explore skills and book sessions with top providers!</p>


<div className="p-4 space-y-12">
     <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" class="btn btn-circle">❮</a>
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" class="btn btn-circle">❮</a>
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" class="btn btn-circle">❮</a>
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" class="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" class="btn btn-circle">❮</a>
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

 <section>
        <h2 className="text-3xl font-bold text-center mb-6">Popular Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.skillId} className="card bg-base-100 shadow-xl" data-aos="fade-up">
              <figure><img src={skill.image} alt={skill.skillName} className="h-48 w-full object-cover" /></figure>
              <div className="card-body">
                <h3 className="card-title">{skill.skillName}</h3>
                <p>⭐ {skill.rating} | 💲{skill.price}</p>
                <Link to={`/skills/${skill.skillId}`} className="btn btn-primary btn-sm mt-2">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

</div>

    </div>
   
    );
};

export default Home;