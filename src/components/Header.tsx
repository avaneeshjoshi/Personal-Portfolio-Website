const Header = () => {
  return (
    <header className="header">
      <div className="dp-outer-container">
        {/* The Skeuomorphic Container */}
        <div className="dp-container">
          <div className="dp-circle" /> {/* This creates the 3D depth and shadows */}
          <img
            src="https://debarghyadas.com/img/dp3.webp"
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
            Partner at{" "}
            <a href="https://menlovc.com/team/deedy-das/" target="_blank" rel="noopener noreferrer" className="link">
              Menlo Ventures
            </a>{" "}
            in San Francisco investing in AI, SaaS and Infra.
          </p>
          <p>
            Previous: Founding team{" "}
            <a href="https://glean.com" target="_blank" rel="noopener noreferrer" className="link">
              Glean
            </a>
            ,{" "}
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="link">
              Google
            </a>{" "}
            Search,{" "}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="link">
              Facebook
            </a>
            .
          </p>
          <p>
            I write on{" "}
            <a href="https://debarghyadas.com/writes/" target="_blank" rel="noopener noreferrer" className="link">
              my blog
            </a>{" "}
            and{" "}
            <a href="https://twitter.com/deedydas" target="_blank" rel="noopener noreferrer" className="link">
              X
            </a>
            . Message me at{" "}
            <a href="https://superdm.com/deedy" target="_blank" rel="noopener noreferrer" className="link">
              superdm.com/deedy
            </a>
            .
          </p>
        </div>

        {/* Social buttons */}
        <div className="social">
          <a href="https://linkedin.com/in/debarghyadas" target="_blank" rel="noopener noreferrer" className="btn" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/deedydas" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://github.com/deedy" target="_blank" rel="noopener noreferrer" className="btn" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="mailto:dd367@cornell.edu" className="btn" aria-label="Email">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
