  <div>   
      <nav className="navbar">
        <h1 className="logo">MyPortfolio</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="hero" className="hero">
        <h1>Hello, I'm <span className="highlight">Rohan</span></h1>
        <p>Frontend Developer | React Enthusiast</p>
        <a href="#projects" className="btn">View My Work</a>
      </section>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a React JS developer who loves building modern and responsive websites.
        </p>
      </section>
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-container">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio built with React JS to showcase projects, skills, and contact information. Features a responsive layout, smooth scrolling, and a modern design.</p>
          </div>
          <div className="project-card">
            <h3>Todo App</h3>
            <p>A task management application that allows users to create, update, and delete tasks. Built with React and localStorage for persistent data storage.</p>
          </div>
          <div className="project-card">
            <h3>Weather App</h3>
            <p>A weather forecasting app that fetches real-time weather data from a public API. Users can search by city and view temperature, humidity, and weather conditions.</p>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <form 
          name="contact-form"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          <input type="hidden" name="form-name" value="contact-form" />
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />
            name=Rohan Advincula
            placeholder=Rohan@gmail.com
          <button type="submit" className="btn"></button>
        </form>
      </section>
      <footer className="footer">
        <p>© 2025 Your Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}



