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
                      alt=""
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
                  
                  <div>
                    {/* Button */}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary ">
                        Sign in
                      </button>
                    </div>
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
