import './Home.css'; // CSS for styling the page

const Home = () => {
  return (
    
    <div class="frame">
    <div className="home-page"> {/* Add a wrapper class */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Aeshaben Thakkar</h1>
          <img src="/profile.png" alt="Aeshaben Thakkar" className="profile-photo" />
          <p>
            I am a dedicated software engineering student with a passion for developing innovative solutions and 
            enhancing user experiences. I thrive on challenges and enjoy collaborating with others to bring ideas to life.
          </p>
          <a href="/about">
            <button className="btn-primary">Learn More About Me</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
