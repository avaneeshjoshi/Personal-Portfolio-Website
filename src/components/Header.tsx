const Header = () => {
  return (
    <header className="header">
      <div className="dp-outer-container">
        {/* The Skeuomorphic Container */}
        <div className="dp-container">
          <div className="dp-circle" /> {/* This creates the 3D depth and shadows */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEun6I8KI8uyA/profile-displayphoto-crop_800_800/B56ZwMCSUzIQAI-/0/1769728452412?e=1786579200&v=beta&t=fgl3oqBVgONBxyYVVpwPXorBKaLiVpnI4Eejxqla03I"
            alt="Avaneesh Joshi"
            className="image" // Image fits exactly inside the 3px border
          />
        </div>

        {/* The Text Section */}
        <div className="header-row">
          <h1 style={{ fontSize: '22px', marginBottom: '2px' }}>
            <b>Avaneesh Joshi</b>
          </h1>

        <div className="bio">
          <p>
            Junior at{" "}
            <a href="https://www.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="link">
              UC Berkeley
            </a>{" "}
            working on applied ML systems, incident response, and evaluation-driven automation.
          </p>
          <p>
            ASIC Design, AI & Automation Engineer Intern @{" "}
            <a href="https://www.intel.com/" target="_blank" rel="noopener noreferrer" className="link">
              Intel
            </a>
            . Prev @{" "}
            <a href="https://www.webai.com/" target="_blank" rel="noopener noreferrer" className="link">
              WebAI
            </a>
            ,{" "}
            <a href="https://data-to-decision.com/" target="_blank" rel="noopener noreferrer" className="link">
              Dasion
            </a>
            ,{" "}
            <a href="https://www.nyris.io/" target="_blank" rel="noopener noreferrer" className="link">
              Nyris GmbH
            </a>
            ,{" "}
            <a href="https://www.revola.ai/" target="_blank" rel="noopener noreferrer" className="link">
              Revola AI
            </a>
            .
          </p>
          <p>
            I occasionally write on{" "}
            <a href="https://x.com/avxneeshjoshi" target="_blank" rel="noopener noreferrer" className="link">
              X
            </a>
            . Reach me at{" "}
            <a href="mailto:avaneesh@useecho.work" className="link">
            avaneesh [at] useecho.work
          </a>.
          </p>
        </div>

        {/* Social buttons */}
        <div className="social">
          <a href="https://linkedin.com/in/avaneesh-joshi" target="_blank" rel="noopener noreferrer" className="btn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/avxneeshjoshi" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://github.com/avaneeshjoshi" target="_blank" rel="noopener noreferrer" className="btn" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:avaneesh@useecho.work" className="btn" aria-label="Email">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
