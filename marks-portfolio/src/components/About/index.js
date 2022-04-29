import React from 'react';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        Welcome to my page! My name is Mark Fleming, a career Sales professional turned Web Developer living with my wife Coleen in Goshen Indiana.
          I started my journey into Web developing in order to change careers after I obtain my Full Stack Devoplment certificate from Bulter University's
          Coding Bootcamp in May 2022. My sales experience brings a compeititive and professional spirit to any team.
        </p>
      </div>
    </section>
  );
}

export default About;