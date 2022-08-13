import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SimpleAccordion } from "../../components/accordion/accordion.component";
import { BasicModal } from "../../components/modal/modal.component";
import { Sidebar } from "../../components/navigation/sidebar.component";
import Printer from "../../components/printer/printer.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import { HTTP_STATUS } from "../../constants/http-status.constant";
import { useCreateInvoice, usePaymentGateway, usePayWithTxnPin, useVirtualPayment } from "../../hooks/use-http.hook";
import { useModal } from "../../hooks/use-modal.hook";
import { selectAuthUser } from "../../redux/auth/auth.selectors";
import { incrementUserPoints } from "../../redux/auth/auth.slice";


const transactionHistory = [
  { id: "1234456677", purpose: "Affidavit", method: "eNaira", status: "Paid", amount: "#1,500", date: "Jan 15, 2020" },
  { id: "2234456567", purpose: "Lawyer fees", method: "eNaira", status: "Paid", amount: "#50,000", date: "Dec 15, 2021" },
  { id: "3234456677", purpose: "Affidavit", method: "eNaira", status: "Paid", amount: "#2,000", date: "Feb 18, 2022" },
];


function Payout() {
  const navigate = useNavigate()
  const location = useLocation()
  const urlQueryParams = new URLSearchParams(location.search)

  const affidavit = urlQueryParams.get('affidavit')
  const incorrect = urlQueryParams.get('incorrect')
  const correct = urlQueryParams.get('correct')
  const amount = urlQueryParams.get('amount')

  const { authStatus, userData } = useSelector(selectAuthUser)

  const [formData, setFormData] = useState({ paymentMethod: '' })

  const [modalState, handleModalOpen, handleModalClose] = useModal()
  const [responseModalState, handleResponseModalOpen, handleResponseModalClose] = useModal()

  const [isInvoiceLoading, createInvoice] = useCreateInvoice()
  const [isPayWithTxnPinLoading, payWithTxnPin] = usePayWithTxnPin()
  const [isPaymentGatewayLoading, payWithPaymentGateway] = usePaymentGateway()
  const [isVirtualPaymentLoading, virtualPayment] = useVirtualPayment()


  const [responseData, setResponseData] = useState({ error: false, message: '' })

  const dispatch = useDispatch()
  const _incrementUserPoints = () => dispatch(incrementUserPoints())


  const handleChange = (e) => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }


  const handlePayWithPin = () => {
    const invoice = {
      amount: amount,
      narration: "iSwear Payment",
      reference: `NXG${Math.floor(1000000000000 + Math.random() * 9000000000000)}`,
      product_code: "001",
      channel_code: "APISNG"
    }

    const payWithPinData = (invoiceID) => ({
      "channel_code": "APISNG",
      "phone_number": "08056064768",
      "amount": amount,
      "reference": `NXG${Math.floor(1000000000000 + Math.random() * 9000000000000)}`,
      "transaction_pin": "1234",
      "invoice_id": invoiceID,
      "product_code": "001"
    })

    createInvoice(invoice, (err, data) => {
      if (err) {
        handleModalClose()
        handleResponseModalOpen()

        setResponseData({ 
          error: true, 
          message: 'Sorry, an error occured and your request could not be processed.' 
        })
      } else if (data) {
        payWithTxnPin(payWithPinData(data.response_data.guid), (txnErr, txnData) => {
          if (txnErr) {
            handleModalClose()
            handleResponseModalOpen()

            setResponseData({
              error: true, 
              message: 'Sorry, an error occured and your request could not be processed.' 
            })
          } else if (txnData) {
            handleModalClose()
            handleResponseModalOpen()

            _incrementUserPoints()

            setResponseData({ 
              error: false,
              message: `Congratulations!, you have successfully completed the payment for this transaction.`
            })
          }
        })
      }
    })
  }

  const handlePayWithGateway = () => {
    const data = {
      "customer_id": "07032755966",
      "merchant_id": "1234567",
      "request_id": "ACCE994bbe57eeecbbe978",
      "channel_code": "QOINPAY"
    }
    payWithPaymentGateway(data, (err, data) => {
      if (err) {
        handleModalClose()
        handleResponseModalOpen()

        setResponseData({
          error: true, 
          message: 'Sorry, an error occured and your request could not be processed.' 
        })
      } else if (data) {
        handleModalClose()
        handleResponseModalOpen()

        _incrementUserPoints()

        setResponseData({ 
          error: false,
          message: `Congratulations!, you have successfully completed the payment for this transaction.`
        })
      }
    })
  }

  const handleVirtualPayment = () => {
    const data = {
      "debit_merchant_id": "ACCESSHOMES",
      "debit_customer_id": "07032755966",
      "credit_account": "0760261888",
      "credit_bank_code": "044",
      "debit_virtual_account": "1444484348",
      "transaction_amount": 200,
      "transaction_narration": "Testing",
      "transaction_reference": "BRZ12337GDUJEDU8378W5",
      "channel_code": "APISNG"
    }

    virtualPayment(data, (err, data) => {
      if (err) {
        handleModalClose()
        handleResponseModalOpen()

        setResponseData({
          error: true, 
          message: 'Sorry, an error occured and your request could not be processed.' 
        })
      } else if (data) {
        handleModalClose()
        handleResponseModalOpen()

        _incrementUserPoints()

        setResponseData({ 
          error: false,
          message: `Congratulations!, you have successfully completed the payment for this transaction.`
        })
      }
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
              { amount &&
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

                      { userData?.points 
                        ? <p>A discount based on { userData?.points } loyalty points has been applied for this payment transaction.</p>
                        : <p>You do not have any loyalty points therefore there is no discount for this transaction.</p> 
                      }
                      
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
                              readOnly
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
                                #{amount}
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
              }
              {/* Card */}
              <div className="card mb-4">
                {/* Card header */}
                <div className="card-header border-bottom-0">
                  <h3 className="h4 mb-3">Payment History</h3>
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 pe-md-0 mb-2 mb-lg-0">
                      {/* Custom select */}
                      {/* <select className="selectpicker" data-width="100%">
                        <option value>30 days</option>
                        <option value="Last 7 days">2 Months</option>
                        <option value="High Rated">6 Months</option>
                      </select> */}
                    </div>
                    <div className="col-lg-3 col-md-6 pe-md-0 mb-2 mb-2 mb-lg-0">
                      {/* Custom select */}
                      {/* <select className="selectpicker" data-width="100%">
                        <option value>Oct 2020</option>
                        <option value="Jan 2021">Jan 2021</option>
                        <option value="May 2021">May 2021</option>
                      </select> */}
                    </div>
                    <div className="col-lg-4 col-md-6 mb-2 mb-2 mb-lg-0">
                      {/* Custom select */}
                      {/* <select className="selectpicker" data-width="100%">
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
                      </select> */}
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
                        <th className="border-0">iSwear Code</th>
                        <th className="border-0">Purpose</th>
                        <th className="border-0">Method</th>
                        <th className="border-0">Status</th>
                        <th className="border-0">Amount</th>
                        <th className="border-0">Date</th>
                        <th className="border-0" />
                      </tr>
                    </thead>
                    <tbody>
                      
                      { transactionHistory.map((txn, i) => (
                        <tr>
                          <td className="align-middle">#{txn.id}</td>
                          <td className="align-middle">{txn.purpose}</td>
                          <td className="align-middle">{txn.method}</td>
                          <td className="align-middle">
                            <span className="badge bg-success">{txn.status}</span>
                          </td>
                          <td className="align-middle">{txn.amount}</td>
                          <td className="align-middle">{txn.date}</td>
                          <td className="align-middle">
                            <span className="dropdown dropstart">
                              <button
                                className="btn-icon btn btn-ghost btn-sm rounded-circle"
                                id="paymentDropdown8"
                                data-bs-toggle="dropdown"
                                data-bs-offset="-20,20"
                                aria-expanded="false"
                              >
                                <i className="fe fe-more-vertical" />
                              </button>
                              <span
                                className="dropdown-menu"
                                aria-labelledby="paymentDropdown8"
                              >
                                <span className="dropdown-header">More</span>
                                <button 
                                  className="dropdown-item"
                                  onClick={() => navigate('/view-document')}
                                >
                                  View
                                </button>
                                <Printer />
                                {/* <button className="dropdown-item">
                                  Download
                                </button> */}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}

                      
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
          buttonText="Confirm Payment"
          noPadding
          status={(isPayWithTxnPinLoading || isInvoiceLoading) && HTTP_STATUS.PENDING}
          handleClick={handlePayWithPin}
        />

        <SimpleAccordion 
          summary="Pay from bank account"
          description="Enaira is automatically purchased from your bank account and transferred to us with this option."
          buttonText="Confirm Payment"
          noPadding
          status={isPaymentGatewayLoading && HTTP_STATUS.PENDING}
          handleClick={handlePayWithGateway}
        />

        <SimpleAccordion 
          summary="Swap USD to enaira to pay"
          buttonText="Confirm Payment"
          noPadding
          status={isVirtualPaymentLoading && HTTP_STATUS.PENDING}
          handleClick={handleVirtualPayment}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Rate:</span> <span>1 USD to 445 enaira</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Swift Code:</span> <span>ABNGNGLA</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Account No:</span> <span>122334590</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Account Name:</span> <span>iSwear</span>
          </div>
          
        </SimpleAccordion>

        <SimpleAccordion 
          summary="Swap other currencies to enaira to pay"
          buttonText="Confirm Payment"
          noPadding
          status={isVirtualPaymentLoading && HTTP_STATUS.PENDING}
          handleClick={handleVirtualPayment}
        >
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Check Rate:</span> 
            <span><a href="https://wise.com/gb/currency-converter/" target="_blank" rel="noreferrer">foreign exchange rate</a></span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Swift Code:</span> <span>ABNGNGLA</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Account No:</span> <span>122334590</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="fw-bold">Account Name:</span> <span>iSwear</span>
          </div>
          
        </SimpleAccordion>
      </BasicModal>

      <BasicModal
        open={responseModalState}
        handleClose={handleResponseModalClose}
      >
        <div className="text-center">
          <h2 
            style={{
              textAlign: 'center',
              color: responseData.error ? '#e6441c' : '#4ac918'
            }}
          >
            { responseData.error ? 'Error!' : 'Success!' }
          </h2>
          <p>{ responseData.message }</p>
        </div>
      </BasicModal>
    </>
  );
}

export default Payout;
