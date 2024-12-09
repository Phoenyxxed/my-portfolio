import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

// Navbar component
const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // To toggle the navbar visibility

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <nav className={isActive ? "active" : ""}>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// About Section
const About = () => (
  <section id="about">
    <div className="about-container">
      <img src="/images/Co1stDay.JPG" alt="Phoenyx Meira" className="about-photo" />
      <div className="about-text">
        <h2>About Me</h2>
        <p>Hello! My name is Phoenyx Meira. I am a 20 year-old Brazilian-American from New Haven, CT. 
        I am a junior at Southern Connecticut State University majoring in Computer Science 
        with a concentration in Cybersecurity and with minors in Math and Honor Transdiciplinary Concepts and Perspectives. 
        I grew up in Waterbury, CT and went to W.F. Kaynor Technical Highschool, where I specialized in Information Systems Technology
        (or IST for short). There I got certifications in the Microsoft suite and learned how to use the Adobe suite.
        I also learned Python and the basics of web development with HTML and CSS.</p>
      </div>
    </div>
  </section>
);
// Interests Section
const Interests = () => (
  <section id="interests">
    <h2>My Interests</h2>
    <ul>
      <li>Coding</li>
      <li>Drawing</li>
      <li>Reading</li>
      <li>Singing</li>
      <li>Binge-Watching Shows</li>
      <li>Sleeping :)</li>
    </ul>
  </section>
);

// Projects Section
const Projects = () => (
  <section id="projects">
    <h2>My Projects</h2>
    <ul>
      <li><strong>Project 1:</strong> A web app built with React, emailjs, vite, and vercel.</li>
      <li><strong>Project 2:</strong> A functioning website where you can play yahtzee.</li>
      <li><strong>Project 3:</strong> A visual novel game where I drew the designs and coded all of the choices in RenPy</li>
      <li><strong>Project 4:</strong> An object-oriented version of Rock, Paper, Scissors made in Java.</li>
    </ul>
    <p>All of these projects can be found and seen on my github page <a href="https://github.com/Phoenyxxed" target="_blank" rel="noopener noreferrer">@Phoenyxxed</a></p>
  </section>
);

// Technologies Section
const Technologies = () => (
  <section id="technologies">
    <h2>Technologies I Know How To Use</h2>
    <p>
    I know how to code in HTML, CSS, javascript, python and java! <br/>
    I know how to use Adobe Premiere and Photoshop. I also have certifications in Microsoft Word, Excel, and Powerpoint. <br/>
    I know how to make ethernet cables and how to build PC's which I do for fun and for friends when they ask! <br/>
    </p>
  </section>
);

// Contact Form
const ContactForm = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2v3l799',
        'template_1sou56n',
        form.current,
        'G_SLtcwUbV3meXbyR'
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={handleSubmit}>
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

export { ContactForm };
export { Navbar };
export default App;
