import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";

function MakeARequest() {
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
              <h1>Customer Support Center</h1>
              <hr style={{ color: "gray", marginBottom: "50px" }} />

              <p style={{ fontSize: '16px' }}>Please tell us what issues or error are you experiencing with our system, also feel free to request for further assistance</p>

              <form className="row" onSubmit={e => e.preventDefault()}>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakeARequest;
