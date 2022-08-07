import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/auth.slice";


export function Sidebar() {
  const navigate = useNavigate()
  const { pathname } = useLocation();

  const dispatch = useDispatch()

  const _logout = () => dispatch(logout())


  const handleLogout = () => {
    _logout()
    navigate('/sign-in')
  }

  const handleNavItemClassName = (name) => {
    return pathname.includes(name)
      ? 'nav-item active'
      : 'nav-item'
  }
    
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light shadow-sm mb-4 mb-lg-0 sidenav">
        {/* Menu */}
        <a
          className="d-xl-none d-lg-none d-md-none text-inherit fw-bold"
          href="#"
        >
          Menu
        </a>
        {/* Button */}
        <button
          className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidenav"
          aria-controls="sidenav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fe fe-menu" />
        </button>
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="sidenav">
          <div className="navbar-nav flex-column">
            <span className="navbar-header">Dashboard</span>
            <ul className="list-unstyled ms-n2 mb-4">
              
              <li className={handleNavItemClassName('dashboard')}>
                <Link className="nav-link" to="/dashboard">
                  <i className="fe fe-home nav-icon" />
                  My Dashboard
                </Link>
              </li>

              <li className={handleNavItemClassName('affidavit')}>
                <Link className="nav-link" to="/affidavit">
                  <i className="fe fe-book nav-icon" />
                  Affidavit
                </Link>
              </li>

              <li className={handleNavItemClassName('payout')}>
                <Link className="nav-link" to="/payout">
                  <i className="fe fe-dollar-sign nav-icon" />
                  Payouts
                </Link>
              </li>
              
              
              
              {/* <li className="nav-item">
                <a className="nav-link" href="instructor-reviews.html">
                  <i className="fe fe-star nav-icon" />
                  Reviews
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="instructor-earning.html">
                  <i className="fe fe-pie-chart nav-icon" />
                  Earnings
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="instructor-order.html">
                  <i className="fe fe-shopping-bag nav-icon" />
                  Orders
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="instructor-students.html">
                  <i className="fe fe-users nav-icon" />
                  Students
                </a>
              </li> */}
              
             
              
              {/* <li className="nav-item ">
                <a className="nav-link" href="instructor-quiz.html">
                  <i className="fe fe-help-circle nav-icon" />
                  Quiz
                </a>
              </li> */}
            </ul>

            {/* Navbar header */}
            {/* <span className="navbar-header">Account Settings</span> */}

            <ul className="list-unstyled ms-n2 mb-0">
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="profile-edit.html">
                  <i className="fe fe-settings nav-icon" />
                  Edit Profile
                </a>
              </li> */}
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="security.html">
                  <i className="fe fe-user nav-icon" />
                  Security
                </a>
              </li> */}
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="social-profile.html">
                  <i className="fe fe-refresh-cw nav-icon" />
                  Social Profiles
                </a>
              </li> */}
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="notifications.html">
                  <i className="fe fe-bell nav-icon" />
                  Notifications
                </a>
              </li> */}
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="profile-privacy.html">
                  <i className="fe fe-lock nav-icon" />
                  Profile Privacy
                </a>
              </li> */}
              {/* Nav item */}
              {/* <li className="nav-item">
                <a className="nav-link" href="delete-profile.html">
                  <i className="fe fe-trash nav-icon" />
                  Delete Profile
                </a>
              </li> */}
              {/* Nav item */}

              <hr />

              <li className="nav-item" onClick={handleLogout}>
                <a
                  className="nav-link"
                  href="#"
                >
                  <i className="fe fe-power nav-icon" />
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
