import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/auth/auth.slice';
import { selectAuthUser } from '../../redux/auth/auth.selectors'

import { Button } from '../../components/button/button.component';


function SignIn() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })


  const { authStatus, authError } = useSelector(selectAuthUser)


  const dispatch = useDispatch()

  const _loginUser = (data) => dispatch(loginUser(data))

  

  const handleChange = (e) => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    _loginUser(formData)
    .unwrap()
    .then(() => navigate('/dashboard'))
  }

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
                    <Link to="/sign-up" className="ms-1">
                      Sign up
                    </Link>
                  </span>
                </div>

                <p style={{ color: 'red' }}>{ authError?.message }</p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.password}
                      onChange={handleChange}
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
                      <Button 
                        type="submit"
                        status={authStatus}
                      >
                        Sign In
                      </Button>
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
