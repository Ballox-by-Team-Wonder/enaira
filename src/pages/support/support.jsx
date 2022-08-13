import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import { SimpleAccordion } from "../../components/accordion/accordion.component";

function Support() {
  return (
    <>
      <div className="pt-5 pb-5">
        <div className="container">
          {/* User info */}
          <UserInfo />

          {/* Content */}
          <div className="row mt-0 mt-md-4">
            <div className="col-lg-3 col-md-4 col-12">
              {/* User profile */}

              <Sidebar />
            </div>

            <div className="col-lg-9 col-md-8 col-12">
              <h1 class="mb-2 display-4 fw-bold">Customer Support Center</h1>
              <hr style={{ color: "gray", marginBottom: "50px" }} />

              <div className="col-lg-12 col-md-8 col-12">
                <p style={{ fontSize: "16px" }}>Please tell us what issues or error are you experiencing with our system, also feel free to request for further assistance</p>

                <form className="row" onSubmit={(e) => e.preventDefault()}>
                  {/* First name */}
                  {/* <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="incorrect">
                    Name
                  </label>
                  <input
                    //   value={formData.incorrect}
                    //   onChange={handleChange}
                    type="text"
                    id="incorrect"
                    name="incorrect"
                    className="form-control"
                    placeholder=""
                    required
                  />
                </div>

                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label" htmlFor="correct">
                    Email
                  </label>
                  <input
                    //   value={formData.correct}
                    //   onChange={handleChange}
                    type="text"
                    id="correct"
                    name="correct"
                    className="form-control"
                    placeholder=""
                    required
                  />
                </div> */}

                  <div className="mb-3 col-12 col-md-12">
                    {/* <label className="form-label" htmlFor="correct">
                    Request
                  </label> */}
                    <textarea
                      //   value={formData.correct}
                      //   onChange={handleChange}
                      id="correct"
                      name="correct"
                      className="form-control"
                      placeholder=""
                      rows="10"
                    />
                  </div>

                  <div className="col-12">
                    {/* Button */}
                    <button className="btn btn-primary" type="submit">
                      submit
                    </button>
                  </div>

                  {/* <hr style={{ color: "gray", marginBottom: "50px" }} /> */}
                </form>
              </div>

              <div className="col-lg-12 col-md-8 col-12 " style={{ marginTop: "50px" }}>
                <h2 class="mb-2 display-4">Frequently Asked Questions</h2>
                <p class="lead">Some common questions asked on iSwear</p>
                <SimpleAccordion
                  summary="Making Wallet Payments on iSwear ?"
                  description="first copy the wallet address generated on the payout page, head to your external eNaira wallet input the amount and the wallet address, then complete the payment  after a few mintutes proceed to your iSwear dashboard and confirm payments "
                  noPadding
                />
                <SimpleAccordion
                  summary="How does foreign exchange works on iSwear ?"
                  description="So by making payment into the generated Account in the payout page, the payment is then converted to eNaira by our Payment partner who sends confirmation for your order. Dont worry all of this is automated in minutes"
                  noPadding
                />
                <SimpleAccordion
                  summary="What are Loyality points ?"
                  description="
                Loyality points are points accumalated by making payments from an enaira wallet or by swapping your foreign currency to pay on iSwear"
                  noPadding
                />
                <SimpleAccordion summary="What counts as a request on iSwear ?" description="We are open to legal related requests that are not listed as a service on iSwear ." noPadding />
                <SimpleAccordion
                  summary="in cases of High Emergency, how can i reach the iSwear Team?"
                  description="
                please reach out to us by calling our hotline +2348110671481 or 
                by emailing us Support@iSwear.com"
                  noPadding
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
