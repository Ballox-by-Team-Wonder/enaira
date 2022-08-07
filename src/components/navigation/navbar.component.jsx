import { Link, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { selectAuthUser } from "../../redux/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/auth.slice";

export function Navbar() {
  const navigate = useNavigate()

  const { userData } = useSelector(selectAuthUser)
  
  const firstName = userData?.firstName
  const lastName = userData?.lastName

  const dispatch = useDispatch()

  const _logout = () => dispatch(logout())


  const handleLogout = () => {
    _logout()
    navigate('/sign-in')
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-default">
        <div className="container-fluid px-0">
          <Link
            className="navbar-brand"
            to="/dashboard"
          >
            <img
              src="/assets/images/png/iswear.png"
              alt=""
              height="35"
            />
            <span 
              style={{ 
                fontWeight: "bold", 
                marginLeft: '15px',
                fontSize: '22px'
              }}
            >
              iSwear
            </span>
          </Link>
          {/* Mobile view nav wrap */}
          <ul className="navbar-nav navbar-right-wrap ms-auto d-lg-none d-flex nav-top-wrap">
            <li className="dropdown stopevent">
              {/* <a
                className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <i className="fe fe-bell"> </i>
              </a> */}
              <div className="dropdown-menu dropdown-menu-end shadow">
                <div>
                  <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">Notifications</span>
                    <a href="# " className="text-muted">
                      <span className="align-middle">
                        <i className="fe fe-settings me-1" />
                      </span>
                    </a>
                  </div>
                  <ul
                    className="list-group list-group-flush "
                    style={{ height: 300 }}
                    data-simplebar
                  >
                    <li className="list-group-item bg-light">
                      <div className="row">
                        <div className="col">
                          <a href="#" className="text-body">
                            <div className="d-flex">
                              <img
                                src="../assets/images/avatar/avatar-1.jpg"
                                alt=""
                                className="avatar-md rounded-circle"
                              />
                              <div className="ms-3">
                                <h5 className="fw-bold mb-1">
                                  Kristin Watson:
                                </h5>
                                <p className="mb-3 text-body">
                                  Krisitn Watsan like your comment on course
                                  Javascript Introduction!
                                </p>
                                <span className="fs-6 text-muted">
                                  <span>
                                    <span className="fe fe-thumbs-up text-success me-1" />
                                    2 hours ago,
                                  </span>
                                  <span className="ms-1">2:19 PM</span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-auto text-center me-2">
                          <a
                            href="#"
                            className="badge-dot bg-info"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mark as read"
                          ></a>
                          <div>
                            <a
                              href="#"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Remove"
                            >
                              <i className="fe fe-x text-muted" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">
                          <a href="#" className="text-body">
                            <div className="d-flex">
                              <img
                                src="../assets/images/avatar/avatar-2.jpg"
                                alt=""
                                className="avatar-md rounded-circle"
                              />
                              <div className="ms-3">
                                <h5 className="fw-bold mb-1">
                                  Brooklyn Simmons
                                </h5>
                                <p className="mb-3 text-body">
                                  Just launched a new Courses React for
                                  Beginner.
                                </p>
                                <span className="fs-6 text-muted">
                                  <span>
                                    <span className="fe fe-thumbs-up text-success me-1" />
                                    Oct 9,
                                  </span>
                                  <span className="ms-1">1:20 PM</span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-auto text-center me-2">
                          <a
                            href="#"
                            className="badge-dot bg-secondary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mark as unread"
                          ></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">
                          <a href="#" className="text-body">
                            <div className="d-flex">
                              <img
                                src="../assets/images/avatar/avatar-3.jpg"
                                alt=""
                                className="avatar-md rounded-circle"
                              />
                              <div className="ms-3">
                                <h5 className="fw-bold mb-1">Jenny Wilson</h5>
                                <p className="mb-3 text-body">
                                  Krisitn Watsan like your comment on course
                                  Javascript Introduction!
                                </p>
                                <span className="fs-6 text-muted">
                                  <span>
                                    <span className="fe fe-thumbs-up text-info me-1" />
                                    Oct 9,
                                  </span>
                                  <span className="ms-1">1:56 PM</span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-auto text-center me-2">
                          <a
                            href="#"
                            className="badge-dot bg-secondary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mark as unread"
                          ></a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">
                          <a href="#" className="text-body">
                            <div className="d-flex">
                              <img
                                src="../assets/images/avatar/avatar-4.jpg"
                                alt=""
                                className="avatar-md rounded-circle"
                              />
                              <div className="ms-3">
                                <h5 className="fw-bold mb-1">Sina Ray</h5>
                                <p className="mb-3 text-body">
                                  You earn new certificate for complete the
                                  Javascript Beginner course.
                                </p>
                                <span className="fs-6 text-muted">
                                  <span>
                                    <span className="fe fe-award text-warning me-1" />
                                    Oct 9,
                                  </span>
                                  <span className="ms-1">1:56 PM</span>
                                </span>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="col-auto text-center me-2">
                          <a
                            href="#"
                            className="badge-dot bg-secondary"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Mark as unread"
                          ></a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="border-top px-3 pt-3 pb-0">
                    <a
                      href="dashboard/notification-history.html"
                      className="text-link fw-semi-bold"
                    >
                      See all Notifications
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="dropdown ms-2">
              <a
                className="rounded-circle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-md">
                  <Avatar sx={{ bgcolor: deepPurple[500], paddingTop: '5px' }}>
                    { userData?._id && `${firstName[0]}${lastName[0]}`}
                  </Avatar>
                  {/* <img
                    alt="avatar"
                    src="../assets/images/avatar/avatar-1.jpg"
                    className="rounded-circle"
                  /> */}
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow">
                {/* <div className="dropdown-item">
                  <div className="d-flex">
                    <div className="avatar avatar-md avatar-indicators avatar-online">
                      <img
                        alt="avatar"
                        src="../assets/images/avatar/avatar-1.jpg"
                        className="rounded-circle"
                      />
                    </div>
                    <div className="ms-3 lh-1">
                      <h5 className="mb-1">Annette Black</h5>
                      <p className="mb-0 text-muted">annette@geeksui.com</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider" />
                <ul className="list-unstyled">
                  <li className="dropdown-submenu">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      <i className="fe fe-circle me-2" />
                      Status
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-success me-2" />
                          Online
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-secondary me-2" />
                          Offline
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-warning me-2" />
                          Away
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="badge-dot bg-danger me-2" />
                          Busy
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="profile-edit.html">
                      <i className="fe fe-user me-2" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="student-subscriptions.html"
                    >
                      <i className="fe fe-star me-2" />
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fe fe-settings me-2" />
                      Settings
                    </a>
                  </li>
                </ul> */}

                {/* <div className="dropdown-divider" /> */}

                <ul className="list-unstyled">
                  <li onClick={handleLogout}>
                    <a
                      className="dropdown-item"
                      href="#"
                    >
                      <i className="fe fe-power me-2" />
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/* Button */}
          {/* <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-default"
            aria-controls="navbar-default"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar mt-0" />
            <span className="icon-bar middle-bar" />
            <span className="icon-bar bottom-bar" />
          </button> */}
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbar-default">
            {/* <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarBrowse"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-bs-display="static"
                >
                  Browse
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarBrowse"
                >
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Web Development
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Bootstrap
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          React
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          GraphQl
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Gatsby
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Grunt
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Svelte
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Meteor
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          HTML5
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Angular
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Design
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Graphic Design
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Illustrator
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          UX / UI Design
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Figma Design
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Adobe XD
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Sketch
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Icon Design
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Photoshop
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Mobile App
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      IT Software
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Music
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Life Style
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="course-category.html" className="dropdown-item">
                      Photography
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarLanding"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Landings
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarLanding">
                  <li>
                    <h4 className="dropdown-header">Landings</h4>
                  </li>
                  <li>
                    <a
                      href="landings/home-academy.html"
                      className="dropdown-item d-flex justify-content-between"
                    >
                      Home Academy{" "}
                      <span className="badge bg-primary ms-1"> New </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="landings/landing-courses.html"
                      className="dropdown-item"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="landings/course-lead.html"
                      className="dropdown-item"
                    >
                      Lead Course
                    </a>
                  </li>
                  <li>
                    <a
                      href="landings/request-access.html"
                      className="dropdown-item"
                    >
                      Request Access
                    </a>
                  </li>
                  <li>
                    <a
                      href="landings/landing-sass.html"
                      className="dropdown-item"
                    >
                      SaaS
                    </a>
                  </li>
                  <li>
                    <a
                      href="landings/landing-job.html"
                      className="dropdown-item d-flex justify-content-between"
                    >
                      Job Listing
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarPages"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarPages"
                >
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="course-single.html">
                          Course Single
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-single-v2.html"
                        >
                          Course Single v2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="course-resume.html">
                          Course Resume
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-category.html"
                        >
                          Course Category
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-checkout.html"
                        >
                          Course Checkout
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="course-filter-list.html"
                        >
                          Course List/Grid
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="add-course.html">
                          Add New Course
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Paths
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="course-path.html" className="dropdown-item">
                          Browse Path
                        </a>
                      </li>
                      <li>
                        <a
                          href="course-path-single.html"
                          className="dropdown-item"
                        >
                          Path Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="blog.html">
                          Listing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-single.html">
                          Article
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-category.html">
                          Category
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="blog-sidebar.html">
                          Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Career
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="career.html">
                          Overview
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="career-list.html">
                          Listing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="career-single.html">
                          Opening
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Portfolio
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="portfolio.html">
                          List
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="portfolio-single.html"
                        >
                          Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Job
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="landings/landing-job.html"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="jobs/job-listing.html"
                        >
                          List
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="jobs/job-grid.html">
                          Grid
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="jobs/job-single.html"
                        >
                          Single
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="jobs/company-list.html"
                        >
                          Company List
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="jobs/company-about.html"
                        >
                          Company Single
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Specialty
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="coming-soon.html">
                          Coming Soon
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="404-error.html">
                          Error 404
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="maintenance-mode.html"
                        >
                          Maintenance Mode
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="terms-condition-page.html"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="mx-3" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Help Center
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="help-center.html">
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="help-center-faq.html"
                        >
                          FAQ's
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="help-center-guide.html"
                        >
                          Guide
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="help-center-guide-single.html"
                        >
                          Guide Single
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="help-center-support.html"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="dropdown-item" href="pricing.html">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="compare-plan.html">
                      Compare Plan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarAccount"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Accounts
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-arrow"
                  aria-labelledby="navbarAccount"
                >
                  <li>
                    <h4 className="dropdown-header">Accounts</h4>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Instructor
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-wrap">
                        <h5 className="dropdown-header text-dark">
                          Instructor
                        </h5>
                        <p className="dropdown-text mb-0">
                          Instructor dashboard for manage courses and earning.
                        </p>
                      </li>
                      <li>
                        <hr className="mx-3" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-instructor.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-profile.html"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-courses.html"
                        >
                          My Courses
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-order.html"
                        >
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-reviews.html"
                        >
                          Reviews
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-students.html"
                        >
                          Students
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-payouts.html"
                        >
                          Payouts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="instructor-earning.html"
                        >
                          Earning
                        </a>
                      </li>
                      <li className="dropdown-submenu dropend">
                        <a
                          className="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          Quiz
                          <span className="badge bg-primary ms-1"> New </span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="instructor-quiz.html"
                            >
                              Quiz
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="instructor-quiz-details.html"
                            >
                              Single
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="instructor-quiz-result.html"
                            >
                              Result
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Students
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-wrap">
                        <h5 className="dropdown-header text-dark">Students</h5>
                        <p className="dropdown-text mb-0">
                          Students dashboard to manage your courses and
                          subscriptions.
                        </p>
                      </li>
                      <li>
                        <hr className="mx-3" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-student.html"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="student-subscriptions.html"
                        >
                          Subscriptions
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="payment-method.html">
                          Payments
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="billing-info.html">
                          Billing Info
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="invoice.html">
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="invoice-details.html"
                        >
                          Invoice Details
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-student.html"
                        >
                          Bookmarked
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="dashboard-student.html"
                        >
                          My Path
                        </a>
                      </li>
                      <li className="dropdown-submenu dropend">
                        <a
                          className="dropdown-item dropdown-list-group-item dropdown-toggle"
                          href="#"
                        >
                          Quiz
                          <span className="badge bg-primary ms-1"> New </span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="student-quiz.html"
                            >
                              Quiz
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="student-quiz-attempt.html"
                            >
                              Attempt
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="student-quiz-start.html"
                            >
                              Start
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="student-quiz-result.html"
                            >
                              Result
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-submenu dropend">
                    <a
                      className="dropdown-item dropdown-list-group-item dropdown-toggle"
                      href="#"
                    >
                      Admin
                    </a>
                    <ul className="dropdown-menu">
                      <li className="text-wrap">
                        <h5 className="dropdown-header text-dark">
                          Master Admin
                        </h5>
                        <p className="dropdown-text mb-0">
                          Master admin dashboard to manage courses, user, site
                          setting , and work with amazing apps.
                        </p>
                      </li>
                      <li>
                        <hr className="mx-3" />
                      </li>
                      <li className="px-3 d-grid">
                        <a
                          href="dashboard/admin-dashboard.html"
                          className="btn btn-sm btn-primary"
                        >
                          Go to Dashboard
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <hr className="mx-3" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="sign-in.html">
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="sign-up.html">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="forget-password.html">
                      Forgot Password
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="profile-edit.html">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="security.html">
                      Security
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="social-profile.html">
                      Social Profiles
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="notifications.html">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="profile-privacy.html">
                      Privacy Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="delete-profile.html">
                      Delete Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="linked-accounts.html">
                      Linked Accounts
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fe fe-more-horizontal fs-3" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-md"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="list-group">
                    <a
                      className="list-group-item list-group-item-action border-0"
                      href="https://codescandy.com/geeks-bootstrap-5/docs/index.html"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fe fe-file-text fs-3 text-primary" />
                        <div className="ms-3">
                          <h5 className="mb-0">Documentations</h5>
                          <p className="mb-0 fs-6">
                            Browse the all documentation
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      className="list-group-item list-group-item-action border-0"
                      href="https://codescandy.com/geeks-bootstrap-5/docs/changelog.html"
                    >
                      <div className="d-flex align-items-center">
                        <i className="fe fe-layers fs-3 text-primary" />
                        <div className="ms-3">
                          <h5 className="mb-0">
                            Changelog{" "}
                            <span className="text-primary ms-1">v2.6.0</span>
                          </h5>
                          <p className="mb-0 fs-6">See what's new</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </ul> */}

            {/* <form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
              <span className="position-absolute ps-3 search-icon">
                <i className="fe fe-search" />
              </span>
              <input
                type="search"
                className="form-control ps-6"
                placeholder="Search Courses"
              />
            </form> */}

            <ul className="navbar-nav navbar-right-wrap ms-auto d-none d-lg-block">
              {/* <li className="dropdown d-inline-block stopevent">
                <a
                  className="btn btn-light btn-icon rounded-circle text-muted indicator indicator-primary"
                  href="#"
                  role="button"
                  id="dropdownNotificationSecond"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fe fe-bell"> </i>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-end dropdown-menu-lg"
                  aria-labelledby="dropdownNotificationSecond"
                >
                  <div>
                    <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                      <span className="h5 mb-0">Notifications</span>
                      <a href="# " className="text-muted">
                        <span className="align-middle">
                          <i className="fe fe-settings me-1" />
                        </span>
                      </a>
                    </div>
                    <ul
                      className="list-group list-group-flush  "
                      style={{ height: 300 }}
                      data-simplebar
                    >
                      <li className="list-group-item bg-light">
                        <div className="row">
                          <div className="col">
                            <a className="text-body" href="#">
                              <div className="d-flex">
                                <img
                                  src="/assets/images/avatar/avatar-1.jpg"
                                  alt=""
                                  className="avatar-md rounded-circle"
                                />
                                <div className="ms-3">
                                  <h5 className="fw-bold mb-1">
                                    Kristin Watson:
                                  </h5>
                                  <p className="mb-3 text-body">
                                    Krisitn Watsan like your comment on course
                                    Javascript Introduction!
                                  </p>
                                  <span className="fs-6 text-muted">
                                    <span>
                                      <span className="fe fe-thumbs-up text-success me-1" />
                                      2 hours ago,
                                    </span>
                                    <span className="ms-1">2:19 PM</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-auto text-center me-2">
                            <a
                              href="#"
                              className="badge-dot bg-info"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark as read"
                            ></a>
                            <div>
                              <a
                                href="#"
                                className="bg-transparent"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Remove"
                              >
                                <i className="fe fe-x text-muted" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <a className="text-body" href="#">
                              <div className="d-flex">
                                <img
                                  src="../assets/images/avatar/avatar-2.jpg"
                                  alt=""
                                  className="avatar-md rounded-circle"
                                />
                                <div className="ms-3">
                                  <h5 className="fw-bold mb-1">
                                    Brooklyn Simmons
                                  </h5>
                                  <p className="mb-3 text-body">
                                    Just launched a new Courses React for
                                    Beginner.
                                  </p>
                                  <span className="fs-6 text-muted">
                                    <span>
                                      <span className="fe fe-thumbs-up text-success me-1" />
                                      Oct 9,
                                    </span>
                                    <span className="ms-1">1:20 PM</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-auto text-center me-2">
                            <a
                              href="#"
                              className="badge-dot bg-secondary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark as unread"
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <a className="text-body" href="#">
                              <div className="d-flex">
                                <img
                                  src="../assets/images/avatar/avatar-3.jpg"
                                  alt=""
                                  className="avatar-md rounded-circle"
                                />
                                <div className="ms-3">
                                  <h5 className="fw-bold mb-1">Jenny Wilson</h5>
                                  <p className="mb-3 text-body">
                                    Krisitn Watsan like your comment on course
                                    Javascript Introduction!
                                  </p>
                                  <span className="fs-6 text-muted">
                                    <span>
                                      <span className="fe fe-thumbs-up text-info me-1" />
                                      Oct 9,
                                    </span>
                                    <span className="ms-1">1:56 PM</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-auto text-center me-2">
                            <a
                              href="#"
                              className="badge-dot bg-secondary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark as unread"
                            ></a>
                          </div>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <a className="text-body" href="#">
                              <div className="d-flex">
                                <img
                                  src="../assets/images/avatar/avatar-4.jpg"
                                  alt=""
                                  className="avatar-md rounded-circle"
                                />
                                <div className="ms-3">
                                  <h5 className="fw-bold mb-1">Sina Ray</h5>
                                  <p className="mb-3 text-body">
                                    You earn new certificate for complete the
                                    Javascript Beginner course.
                                  </p>
                                  <span className="fs-6 text-muted">
                                    <span>
                                      <span className="fe fe-award text-warning me-1" />
                                      Oct 9,
                                    </span>
                                    <span className="ms-1">1:56 PM</span>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="col-auto text-center me-2">
                            <a
                              href="#"
                              className="badge-dot bg-secondary"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              title="Mark as unread"
                            ></a>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="border-top px-3 pt-3 pb-0">
                      <a
                        href="dashboard/notification-history.html"
                        className="text-link fw-semi-bold"
                      >
                        See all Notifications
                      </a>
                    </div>
                  </div>
                </div>
              </li> */}
              <li className="dropdown ms-2 d-inline-block">
                <a
                  className="rounded-circle"
                  href="#"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-md avatar-indicators">
                    <Avatar sx={{ bgcolor: deepPurple[500], paddingTop: '5px' }}>
                      { userData?._id && `${firstName[0]}${lastName[0]}`}
                    </Avatar>
                    {/* <img
                      alt="avatar"
                      src="../assets/images/avatar/avatar-1.jpg"
                      className="rounded-circle"
                    /> */}
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* <div className="dropdown-item">
                    <div className="d-flex">
                      <div className="avatar avatar-md avatar-indicators avatar-online">
                        <img
                          alt="avatar"
                          src="../assets/images/avatar/avatar-1.jpg"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="ms-3 lh-1">
                        <h5 className="mb-1">Annette Black</h5>
                        <p className="mb-0 text-muted">annette@geeksui.com</p>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="dropdown-divider" /> */}

                  {/* <ul className="list-unstyled">
                    <li className="dropdown-submenu dropstart-lg">
                      <a
                        className="dropdown-item dropdown-list-group-item dropdown-toggle"
                        href="#"
                      >
                        <i className="fe fe-circle me-2" />
                        Status
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-success me-2" />
                            Online
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-secondary me-2" />
                            Offline
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-warning me-2" />
                            Away
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <span className="badge-dot bg-danger me-2" />
                            Busy
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className="dropdown-item" href="profile-edit.html">
                        <i className="fe fe-user me-2" />
                        Profile
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="student-subscriptions.html"
                      >
                        <i className="fe fe-star me-2" />
                        Subscription
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fe fe-settings me-2" />
                        Settings
                      </a>
                    </li>
                    <li>
                      <Link to="/sign-in" className="dropdown-item">
                        <i className="fe fe-settings me-2" />
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link to="/sign-up" className="dropdown-item">
                        <i className="fe fe-settings me-2" />
                        Sign up
                      </Link>
                    </li>
                  </ul> */}
                  {/* <div className="dropdown-divider" /> */}
                  <ul className="list-unstyled">
                    <li onClick={handleLogout}>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        <i className="fe fe-power me-2" />
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
