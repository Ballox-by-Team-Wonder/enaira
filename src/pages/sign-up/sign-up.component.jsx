import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { signupUser } from '../../redux/auth/auth.slice';
import { selectAuthUser } from '../../redux/auth/auth.selectors'

import { Button } from '../../components/button/button.component';


function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    accountType: '',
    password: '',
    confirmPassword: ''
  })


  const { authStatus, authError } = useSelector(selectAuthUser)


  const dispatch = useDispatch()

  const _signupUser = (data) => dispatch(signupUser(data))

  

  const handleChange = (e) => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    _signupUser(formData)
    .unwrap()
    .then(() => navigate('/kyc'))
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
                  <img
                    src="/assets/images/png/iswear.png"
                    alt=""
                    height="50"

                  />
                  <h1 className="mb-1 mt-4 fw-bold">Sign up</h1>
                  <span>
                    Already have an account?
                    <Link to="/sign-in" className="ms-1">
                      Sign in
                    </Link>
                  </span>
                </div>

                <p style={{ color: 'red' }}>{ authError?.message }</p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  {/* First Name */}
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text"
                      id="firstName"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      value={formData.lastName}
                      onChange={handleChange}
                      type="text"
                      id="lastName"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  {/* Email */}
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
                  {/* Account type */}
                  <div className="mb-3" onChange={handleChange}>
                    <label htmlFor="" className="form-label">
                      Account Type
                    </label>:&nbsp;&nbsp;
                    <input 
                      type="radio" 
                      value="client" 
                      name="accountType"
                      required
                    /> Client &nbsp;&nbsp;
                    <input 
                      type="radio" 
                      value="practitioner" 
                      name="accountType"
                      required
                    /> Practitioner
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
                  {/* Confirm Password */}
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      type="password"
                      id="confirmPassword"
                      className="form-control"
                      name="confirmPassword"
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
                        Sign Up
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

export default SignUp;
