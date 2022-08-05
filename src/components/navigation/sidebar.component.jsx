export function Sidebar() {
    
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
              {/* Nav item */}
              <li className="nav-item active">
                <a className="nav-link" href="dashboard-instructor.html">
                  <i className="fe fe-home nav-icon" />
                  My Dashboard
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-courses.html">
                  <i className="fe fe-book nav-icon" />
                  My Courses
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-reviews.html">
                  <i className="fe fe-star nav-icon" />
                  Reviews
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-earning.html">
                  <i className="fe fe-pie-chart nav-icon" />
                  Earnings
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-order.html">
                  <i className="fe fe-shopping-bag nav-icon" />
                  Orders
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-students.html">
                  <i className="fe fe-users nav-icon" />
                  Students
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="instructor-payouts.html">
                  <i className="fe fe-dollar-sign nav-icon" />
                  Payouts
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item ">
                <a className="nav-link" href="instructor-quiz.html">
                  <i className="fe fe-help-circle nav-icon" />
                  Quiz
                </a>
              </li>
            </ul>
            {/* Navbar header */}
            <span className="navbar-header">Account Settings</span>
            <ul className="list-unstyled ms-n2 mb-0">
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="profile-edit.html">
                  <i className="fe fe-settings nav-icon" />
                  Edit Profile
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="security.html">
                  <i className="fe fe-user nav-icon" />
                  Security
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="social-profile.html">
                  <i className="fe fe-refresh-cw nav-icon" />
                  Social Profiles
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="notifications.html">
                  <i className="fe fe-bell nav-icon" />
                  Notifications
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="profile-privacy.html">
                  <i className="fe fe-lock nav-icon" />
                  Profile Privacy
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a className="nav-link" href="delete-profile.html">
                  <i className="fe fe-trash nav-icon" />
                  Delete Profile
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://codescandy.com/geeks-bootstrap-5/index.html"
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
