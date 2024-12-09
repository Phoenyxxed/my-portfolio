import React from "react";

// Navbar component
const Navbar = () => (
  <nav>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#interests">Interests</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#technologies">Technologies</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

// About Section
const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>Hello! I'm a passionate developer who loves creating intuitive and efficient web solutions.</p>
  </section>
);

// Interests Section
const Interests = () => (
  <section id="interests">
    <h2>My Interests</h2>
    <ul>
      <li>Coding</li>
      <li>Photography</li>
      <li>Traveling</li>
    </ul>
  </section>
);

// Projects Section
const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <ul>
      <li><strong>Project 1:</strong> A web app built with React and Node.js.</li>
      <li><strong>Project 2:</strong> An e-commerce website with Stripe integration.</li>
    </ul>
  </section>
);

// Technologies Section
const Technologies = () => (
  <section id="technologies">
    <h2>Technologies I Use</h2>
    <p>React, Node.js, Tailwind CSS, and more!</p>
  </section>
);

// Contact Form
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

// Main App component
const App = () => (
  <>
    <Navbar />
    <About />
    <Interests />
    <Projects />
    <Technologies />
    <ContactForm />
  </>
);

// Exporting the App component
export default App;
