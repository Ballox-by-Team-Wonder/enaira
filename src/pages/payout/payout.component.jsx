import { useState } from "react";
import { useLocation } from "react-router-dom";
import { SimpleAccordion } from "../../components/accordion/accordion.component";
import { BasicModal } from "../../components/modal/modal.component";
import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import { useModal } from "../../hooks/use-modal.hook";

function Payout() {
  const location = useLocation()
  const urlQueryParams = new URLSearchParams(location.search)

  const affidavit = urlQueryParams.get('affidavit')
  const incorrect = urlQueryParams.get('incorrect')
  const correct = urlQueryParams.get('correct')

  const [formData, setFormData] = useState({ paymentMethod: '' })

  const [modalState, handleModalOpen, handleModalClose] = useModal()

  const handleChange = (e) => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }


  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container">
          {/* User info */}
          <UserInfo />
          
          {/* Content */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              {/* Navbar */}
              <Sidebar />
            </div>

            <div className="col-lg-9 col-md-8 col-12">
              {/* Card */}
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header">
                  <h3 className="mb-0">Payout Method</h3>
                  <p className="mb-0">
                    View all transactions performed on your account.
                  </p>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* <div
                    className="alert bg-light-warning text-dark-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <strong>payout@geeks.com</strong>
                    <p className="mb-0">
                      Your selected payout method was confirmed on Next Payout
                      on 15 July, 2020
                    </p>
                    
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div> */}

                  <div className="row mt-6">
                    
                    <div className="col-xl-8 col-lg-8 col-md-12 col-12" onChange={handleChange}>
                      {/* Check box */}
                      {/* <div className="border p-4 rounded-3 mb-3">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            className="form-check-input"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customRadio1"
                          >
                            <img
                              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/paypal-small.svg"
                              alt=""
                            />
                          </label>
                          <p>
                            Your paypal account has been authorized for payouts.
                          </p>
                          <a href="#" className="btn btn-outline-primary">
                            Remove Account
                          </a>
                        </div>
                      </div> */}
                      {/* Check box */}
                      <div className="border p-4 rounded-3 mb-3">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="paymentMethod"
                            className="form-check-input"
                            value="enaira"
                            checked
                          />
                          <label
                            className="form-check-label ps-1 h4"
                            htmlFor="customRadio3"
                          >
                            eNaira
                          </label><br />
                          <span 
                            style={{ 
                              marginLeft: '20px',
                              fontWeight: 'bold'
                            }}>
                              #1500
                          </span>
                        </div>
                      </div>
                      {/* Check box */}
                      {/* <div className="border p-4 rounded-3 mb-3">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="paymentMethod"
                            className="form-check-input"
                            value="payoneer"
                            disabled
                          />
                          <label
                            className="form-check-label ps-1"
                            htmlFor="customRadio2"
                          >
                            <img
                              src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/payoneer.svg"
                              alt
                            />
                          </label>
                        </div>
                      </div> */}

                      <button className="btn btn-primary" onClick={handleModalOpen}>
                        Make payment
                      </button>
                      
                    </div>

                    {/* <div className="col-xl-4 col-lg-4 col-md-12 col-12 mb-3 mb-lg-0">
                      <div className="text-center">
                        
                        <div id="payoutChart" className="apex-charts" />
                        <h4 className="mb-1">Your Earning this month</h4>
                        <h5 className="mb-0 display-4 fw-bold">$3,210</h5>
                        <p className="px-4">
                          Update your payout method in settings
                        </p>
                        <a href="#" className="btn btn-primary">
                          Payment
                        </a>
                      </div>
                    </div> */}

                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header border-bottom-0">
                  <h3 className="h4 mb-3">Payment History</h3>
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0">
                      {/* Custom select */}
                      <select className="selectpicker" data-width="100%">
                        <option value>30 days</option>
                        <option value="Last 7 days">2 Months</option>
                        <option value="High Rated">6 Months</option>
                      </select>
                    </div>
                    <div className="col-lg-3 col-md-6 pe-md-0 mb-2 mb-2 mb-lg-0">
                      {/* Custom select */}
                      <select className="selectpicker" data-width="100%">
                        <option value>Oct 2020</option>
                        <option value="Jan 2021">Jan 2021</option>
                        <option value="May 2021">May 2021</option>
                      </select>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2 mb-2 mb-lg-0">
                      {/* Custom select */}
                      <select className="selectpicker" data-width="100%">
                        <option value>Transaction Type</option>
                        <option value="cash transactions">
                          Cash Transactions
                        </option>
                        <option value="non-cash transactions">
                          Non Cash Transactions
                        </option>
                        <option value="credit transactions">
                          Credit Transactions
                        </option>
                      </select>
                    </div>
                    {/* <div className="col-lg-2 col-md-6 text-lg-end">
                      
                      <a href="#" className="btn btn-outline-white" download>
                        <i className="fe fe-download" />
                      </a>
                    </div> */}
                  </div>
                </div>
                {/* Table */}
                <div className="table-responsive border-0">
                  <table className="table mb-0 text-nowrap">
                    <thead className="table-light">
                      <tr>
                        {/* <th className="border-0 font-size-inherit">
                          <div className="form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="checkAll"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="checkAll"
                            />
                          </div>
                        </th> */}
                        <th className="border-0">ID</th>
                        <th className="border-0">Purpose</th>
                        <th className="border-0">Method</th>
                        <th className="border-0">Status</th>
                        <th className="border-0">Amount</th>
                        <th className="border-0">Date</th>
                        <th className="border-0" />
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr>
                        <td className="align-middle">#953</td>
                        <td className="align-middle">Affidavit</td>
                        <td className="align-middle">eNaira</td>
                        <td className="align-middle">
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td className="align-middle">#1,500</td>
                        <td className="align-middle">Jan 15, 2020</td>
                        <td className="align-middle">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown8"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown8"
                            >
                              <span className="dropdown-header">More</span>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-edit dropdown-item-icon" /> */}
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-trash dropdown-item-icon" /> */}
                                Download
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="align-middle">#978</td>
                        <td className="align-middle">Lawyer fees</td>
                        <td className="align-middle">eNaira</td>
                        <td className="align-middle">
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td className="align-middle">#50,000</td>
                        <td className="align-middle">Dec 15, 2021</td>
                        <td className="align-middle">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown8"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown8"
                            >
                              <span className="dropdown-header">More</span>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-edit dropdown-item-icon" /> */}
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-trash dropdown-item-icon" /> */}
                                Download
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="align-middle">#980</td>
                        <td className="align-middle">Affidavit</td>
                        <td className="align-middle">eNaira</td>
                        <td className="align-middle">
                          <span className="badge bg-success">Paid</span>
                        </td>
                        <td className="align-middle">#2,000</td>
                        <td className="align-middle">Feb 18, 2022</td>
                        <td className="align-middle">
                          <span className="dropdown dropstart">
                            <a
                              className="btn-icon btn btn-ghost btn-sm rounded-circle"
                              href="#"
                              role="button"
                              id="paymentDropdown8"
                              data-bs-toggle="dropdown"
                              data-bs-offset="-20,20"
                              aria-expanded="false"
                            >
                              <i className="fe fe-more-vertical" />
                            </a>
                            <span
                              className="dropdown-menu"
                              aria-labelledby="paymentDropdown8"
                            >
                              <span className="dropdown-header">More</span>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-edit dropdown-item-icon" /> */}
                                View
                              </a>
                              <a className="dropdown-item" href="#">
                                {/* <i className="fe fe-trash dropdown-item-icon" /> */}
                                Download
                              </a>
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <div className="pt-4 pb-4">
                    <nav>
                      <ul className="pagination justify-content-center mb-0">
                        <li className="page-item disabled">
                          <a
                            className="page-link mx-1 rounded"
                            href="#"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            <i className="mdi mdi-chevron-left" />
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link mx-1 rounded" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link mx-1 rounded" href="#">
                            <i className="mdi mdi-chevron-right" />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BasicModal
        open={modalState}
        handleClose={handleModalClose}
      >
        <h2>Complete Payment</h2>
        <hr />

        <SimpleAccordion 
          summary="Pay from enaira wallet"
          description="Payment is made automatically from your enaira wallet to us."
          // description2={
          //   <div style={{ wordWrap: 'break-word'}}>
          //     <span>7XJBN5B44ULMA5RF7HKZMX3OLXEROWF4LX5ZG2VK76B4J7SYCLPTETNFAU</span>

          //   </div>
          // }
          buttonText="Pay"
          noPadding
        />

        <SimpleAccordion 
          summary="Pay from bank account"
          description="Enaira is automatically purchased from your bank account and transferred to us with this option."
          buttonText="Pay"
          noPadding
        />
      </BasicModal>
    </>
  );
}

export default Payout;
