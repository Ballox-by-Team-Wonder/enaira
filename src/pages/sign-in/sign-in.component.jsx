function SignIn() {

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
                  <h1 className="mb-1 fw-bold">Sign in</h1>
                  <span>
                    Don’t have an account?{" "}
                    <a href="sign-up.html" className="ms-1">
                      Sign up
                    </a>
                  </span>
                </div>
                {/* Form */}
                <form>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Username or email
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
                  <div className="d-lg-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="rememberme"
                      />
                      <label className="form-check-label " htmlFor="rememberme">
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="forget-password.html">Forgot your password?</a>
                    </div>
                  </div>
                  <div>
                    {/* Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary ">
                        Sign in
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

export default SignIn
