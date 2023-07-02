import React from 'react';
import './Navbar.css';
import Logo from './Logo.png';


function Navbar({query,setquery,HandleSearchmansi}) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="" width="100" height="" class="d-inline-block align-text-top" />
            THE MORNING NEWS
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>

            </ul>
            <div class="d-flex">
              <input 
                className="form-control me-2"
                onChange={e => setquery(e.target.value)}
                type="search"
                placeholder="Search the TOPIC Here"
                value={query}
              >
              </input>
              <button className="btn btn-primary" onClick={HandleSearchmansi}>Search</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


{/* <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <div>
        <img src={Logo} width="180" height="120" class="d-inline-block align-text-top" />
      </div>
      <h3>
      </h3>
    </a>
  </div>
</nav> */}