const Header = () => {
  return (
    <header className="header">
      <div className="dp-outer-container">
        {/* The Skeuomorphic Container */}
        <div className="dp-container">
          <div className="dp-circle" /> {/* This creates the 3D depth and shadows */}
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHnK7jGXwRgjQ/profile-displayphoto-crop_800_800/B56ZtQFCMCJoAI-/0/1766575056011?e=1768435200&v=beta&t=0ztkwVyWUhexJgKezirnDDJScXgMuViAhhqqo0rJUWI"
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
            Sophomore at{" "}
            <a href="https://www.linkedin.com/in/avaneesh-joshi/" target="_blank" rel="noopener noreferrer" className="link">
              UC Berkeley
            </a>{" "}
            specializing in full-stack applications and AI/ML systems.
          </p>
          <p>
            Previous: MLE @{" "}
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
            <a href="mailto:avaneeshjoshi@berkeley.edu" className="link">
            avaneeshjoshi [at] berkeley.edu
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
          <a href="mailto:avaneeshjoshi@berkeley.edu" className="btn" aria-label="Email">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
