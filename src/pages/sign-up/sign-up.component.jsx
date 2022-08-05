function SignUp() {
  return (
    <>
      <div className="container d-flex flex-column mt-5">
        <div className="row align-items-center justify-content-center g-0 min-vh-100">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            {/* Card */}
            <div className="card shadow">
              {/* Card body */}
              <div className="card-body p-6">
                <div className="mb-4">
                  <a href="https://codescandy.com/geeks-bootstrap-5/index.html">
                    <img
                      src="https://codescandy.com/geeks-bootstrap-5/assets/images/brand/logo/logo-icon.svg"
                      className="mb-4"
                      alt
                    />
                  </a>
                  <h1 className="mb-1 fw-bold">Sign up</h1>
                  <span>
                    Already have an account?
                    <a href="sign-in.html" className="ms-1">
                      Sign in
                    </a>
                  </span>
                </div>
                {/* Form */}
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      name="username"
                      placeholder="User Name"
                      required
                    />
                  </div>
                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Email address here"
                      required
                    />
                  </div>
                  {/* Password */}
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="**************"
                      required
                    />
                  </div>
                  {/* Checkbox */}
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="agreeCheck"
                      />
                      <label className="form-check-label" htmlFor="agreeCheck">
                        <span>
                          I agree to the{" "}
                          <a href="terms-condition-page.html">
                            Terms of Service{" "}
                          </a>
                          and
                          <a href="terms-condition-page.html">
                            Privacy Policy.
                          </a>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    {/* Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Create Free Account
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
                  <div className="mt-4 text-center">
                    {/*Facebook*/}
                    <a
                      href="#"
                      className="btn-social btn-social-outline btn-facebook"
                    >
                      <i className="mdi mdi-facebook fs-4" />
                    </a>
                    {/*Twitter*/}
                    <a
                      href="#"
                      className="btn-social btn-social-outline btn-twitter"
                    >
                      <i className="mdi mdi-twitter fs-4" />
                    </a>
                    {/*LinkedIn*/}
                    <a
                      href="#"
                      className="btn-social btn-social-outline btn-linkedin"
                    >
                      <i className="mdi mdi-linkedin" />
                    </a>
                    {/*GitHub*/}
                    <a
                      href="#"
                      className="btn-social btn-social-outline btn-github"
                    >
                      <i className="mdi mdi-github" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
