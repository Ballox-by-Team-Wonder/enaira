import { useSelector } from "react-redux";
import { Sidebar } from "../../components/navigation/sidebar.component";
import { selectAuthUser } from "../../redux/auth/auth.selectors";

import Avatar from '@mui/material/Avatar';
import { Chart } from "../../components/chart/chart.component";
import { chartData } from "../../constants/chart-data.constant";

function Dashboard() {
    const { userData } = useSelector(selectAuthUser)
  
    const firstName = userData?.firstName || '__'
    const lastName = userData?.lastName || '__'
    
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container">
          {/* User info */}
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* Bg */}
              <div
                className="pt-16 rounded-top-md"
                style={{
                  background:
                    "url(../assets/images/background/profile-bg.jpg) no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <div className="d-flex align-items-end justify-content-between bg-white px-4 pt-2 pb-4 rounded-none rounded-bottom-md shadow-sm">
                <div className="d-flex align-items-center">
                  <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <Avatar 
                        sx={{ 
                            height: 70, 
                            width: 70,
                            fontSize: '30px',
                            paddingTop: '7px',
                            bgcolor: '#18113c'
                        }}
                    >
                        { userData?._id && `${firstName[0]}.${lastName[0]}` }
                    </Avatar>
                    {/* <img
                      src="../assets/images/avatar/avatar-1.jpg"
                      className="avatar-xl rounded-circle border border-4 border-white position-relative"
                      alt=""
                    /> */}
                    {/* <a
                      href="#"
                      className="position-absolute top-0 end-0"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title="Verified"
                    >
                      <img
                        src="https://codescandy.com/geeks-bootstrap-5/assets/images/svg/checked-mark.svg"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </a> */}
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">{ `${firstName} ${lastName}` }</h2>
                    {/* <p className="mb-0 d-block">@Jennywilson</p> */}
                  </div>
                </div>
                <div>
                  <a
                    href="add-course.html"
                    className="btn btn-primary btn-sm d-none d-md-block"
                  >
                    Create New Course
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              {/* User profile */}

              <Sidebar />

            </div>
            <div className="col-lg-9 col-md-8 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                  {/* Card */}
                  <div className="card mb-4">
                    <div className="p-4">
                      <span className="fs-6 text-uppercase fw-semi-bold">
                        Revenue
                      </span>
                      <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                        $467.34
                      </h2>
                      <span className="d-flex justify-content-between align-items-center">
                        <span>Earning this month</span>
                        <span className="badge bg-success ms-2">$203.23</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  {/* Card */}
                  <div className="card mb-4">
                    <div className="p-4">
                      <span className="fs-6 text-uppercase fw-semi-bold">
                        students Enrollments
                      </span>
                      <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                        12,000
                      </h2>
                      <span className="d-flex justify-content-between align-items-center">
                        <span>New this month</span>
                        <span className="badge bg-info ms-2">120+</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                  {/* Card */}
                  <div className="card mb-4">
                    <div className="p-4">
                      <span className="fs-6 text-uppercase fw-semi-bold">
                        Courses Rating
                      </span>
                      <h2 className="mt-4 fw-bold mb-1 d-flex align-items-center h1 lh-1">
                        4.80
                      </h2>
                      <span className="d-flex justify-content-between align-items-center">
                        <span>Rating this month</span>
                        <span className="badge bg-warning ms-2">10+</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card */}
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header">
                  <h3 className="h4 mb-0">Transaction History</h3>
                </div>
                {/* Card body */}
                <div className="card-body">
                    <div style={{ height: '400px'}}>
                        <Chart
                            data={chartData}
                            barData={[
                                { dataKey: 'credit', fill: "#86e695" },
                                { dataKey: 'debit', fill: '#f398ca' },
                            ]}
                        />
                    </div>


                  {/* <div id="orderColumn" className="apex-charts" /> */}
                </div>
              </div>
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header border-bottom-0">
                  <h3 className="h4 mb-0">Best Selling Courses</h3>
                </div>
                {/* Table */}
                <div className="table-responsive border-0">
                  <table className="table mb-0">
                    {/* Table head */}
                    <thead className="table-light">
                      <tr>
                        <th scope="col" className="border-0">
                          COURSES
                        </th>
                        <th scope="col" className="border-0">
                          SALES
                        </th>
                        <th scope="col" className="border-0">
                          AMOUNT
                        </th>
                        <th scope="col" className="border-0" />
                      </tr>
                    </thead>
                    {/* Table body */}
                    <tbody>
                      <tr>
                        <td className="align-middle border-top-0">
                          <a href="#">
                            <div className="d-lg-flex align-items-center">
                              <img
                                src="../assets/images/course/course-laravel.jpg"
                                alt=""
                                className="rounded img-4by3-lg"
                              />
                              <h5 className="mb-0 ms-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                Building Scalable APIs with GraphQL
                              </h5>
                            </div>
                          </a>
                        </td>
                        <td className="align-middle border-top-0">34</td>
                        <td className="align-middle border-top-0">$3,145.23</td>
                        <td className="text-muted align-middle border-top-0">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="courseDropdown1"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="courseDropdown1"
                            >
                              <span className="dropdown-header">Setting </span>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon" />
                                Remove
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#">
                            <div className="d-lg-flex align-items-center">
                              <img
                                src="../assets/images/course/course-sass.jpg"
                                alt=""
                                className="rounded img-4by3-lg"
                              />
                              <h5 className="mb-0 ms-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                HTML5 Web Front End Development
                              </h5>
                            </div>
                          </a>
                        </td>
                        <td className="align-middle">30</td>
                        <td className="align-middle">$2,611.82</td>
                        <td className="text-muted align-middle">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="courseDropdown2"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="courseDropdown2"
                            >
                              <span className="dropdown-header">Setting </span>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon" />
                                Remove
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#">
                            <div className="d-lg-flex align-items-center">
                              <img
                                src="../assets/images/course/course-vue.jpg"
                                alt=""
                                className="rounded img-4by3-lg"
                              />
                              <h5 className="mb-0 ms-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                Learn JavaScript Courses from Scratch
                              </h5>
                            </div>
                          </a>
                        </td>
                        <td className="align-middle">26</td>
                        <td className="align-middle">$2,372.19</td>
                        <td className="text-muted align-middle">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="courseDropdown3"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="courseDropdown3"
                            >
                              <span className="dropdown-header">Setting </span>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon" />
                                Remove
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="align-middle border-bottom-0">
                          <a href="#">
                            <div className="d-lg-flex align-items-center">
                              <img
                                src="../assets/images/course/course-react.jpg"
                                alt=""
                                className="rounded img-4by3-lg"
                              />
                              <h5 className="mb-0 ms-lg-3 mt-2 mt-lg-0 text-primary-hover">
                                Get Started: React Js Courses
                              </h5>
                            </div>
                          </a>
                        </td>
                        <td className="align-middle border-bottom-0">20</td>
                        <td className="align-middle border-bottom-0">
                          $1,145.23
                        </td>
                        <td className="text-muted align-middle border-bottom-0">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="courseDropdown4"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="courseDropdown4"
                            >
                              <span className="dropdown-header">Setting </span>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-edit dropdown-item-icon" />
                                Edit
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="fe fe-trash dropdown-item-icon" />
                                Remove
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
