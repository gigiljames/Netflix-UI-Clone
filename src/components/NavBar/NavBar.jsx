import "./NavBar.css";

function NavBar() {
  function handleMouseOver() {}

  return (
    <>
      <div className="navbar">
        <div className="left">
          <img
            id="main-logo"
            src="../../../public/Netflix_2015_logo.svg.png"
            alt=""
          />
          <ul className="navbar-list">
            <li>
              <a href="">
                <b>Home</b>
              </a>
            </li>
            <li>
              <a href="">TV Shows</a>
            </li>
            <li>
              <a href="">Movies</a>
            </li>
            <li>
              <a href="">New & Popular</a>
            </li>
            <li>
              <a href="">My List</a>
            </li>
            <li>
              <a href="">Browse by Languages</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul className="navbar-list list-2">
            <li>
              <span class="material-icons">search</span>
            </li>
            <li>Children</li>
            <li>
              <span class="material-icons">notifications</span>
            </li>
            <li id="profile" onMouseOver={handleMouseOver}>
              <img
                id="profile-logo"
                src="../../../public/netflix-profile-pictures-1000-x-1000-vnl1thqrh02x7ra2.jpg"
                alt=""
              />
              <span className="material-icons">arrow_drop_down</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
