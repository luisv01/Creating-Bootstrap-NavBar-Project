function NavBar() {
  async function loadPage(page) {
    const res = await fetch(page);
    const content = await res.text();
    const element = document.getElementById('content');
    element.innerHTML = content;
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                id="signin_link"
                className="nav-link"
                aria-current="page"
                href="#signin"
                onClick={() => loadPage('signin.html')}
              >
                Sign In
              </a>
            </li>
            <li className="nav-item">
              <a
                id="mission_link"
                className="nav-link"
                href="#mission"
                onClick={() => loadPage('mission.html')}
              >
                Mission
              </a>
            </li>
            <li className="nav-item">
              <a
                id="about_link"
                className="nav-link"
                href="#about"
                onClick={() => loadPage('about.html')}
              >
                About
              </a>
            </li>
          </ul>
          <br/>
        </div>
      </div>
    </nav>
  );
}
