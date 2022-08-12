import { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


import { Button } from '../../components/button/button.component';

import { useSelect } from '../../hooks/use-select-kyc.hook'
import { Select } from '../../components/select/select-kyc.component';
import { useKyc } from '../../hooks/use-http.hook';
import { HTTP_STATUS } from '../../constants/http-status.constant';


function Kyc() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    channel_code: "APISNG",
    bvn: '',
  })

  const [selectValue, handleSelectChange] = useSelect()

  const [isKycSuccess, setIsKycSuccess] = useState(null)

  const { bvnLoading, verifyBvn } = useKyc()
  

  const handleChange = (e) => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    verifyBvn(formData, (err, data) => {
      if (data) {
        setIsKycSuccess(true)
        setTimeout(() => navigate('/dashboard'), 3000)
      } else if (err) {
        setIsKycSuccess(false)
      }
    })
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
                  
                  <h1 className="mb-1 mt-4 fw-bold">Kyc</h1>
                  
                </div>

                <p style={{ color: 'green' }}>{ !!isKycSuccess && 'verification successful, you will be redirected shortly' }</p>

                <p style={{ color: 'red' }}>{ isKycSuccess === false && 'we were unable to verify your identity with the details provided' }</p>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <label className="form-label" style={{ marginBottom: '-10px' }}>
                      KYC type
                    </label>
                    <Select 
                      // label="Kyc type"
                      value={selectValue}
                      handleChange={handleSelectChange}
                    />

                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="bvn" className="form-label">
                      BVN
                    </label>
                    <input
                      value={formData.bvn}
                      onChange={handleChange}
                      type="text"
                      id="bvn"
                      className="form-control"
                      name="bvn"
                      placeholder="BVN here"
                      required
                    />
                  </div>
                  
                  
                  <div>
                    {/* Button */}
                    <div className="d-grid">
                      <Button 
                        type="submit"
                        status={bvnLoading && HTTP_STATUS.PENDING}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>                  
                </form>
                <Link to="/dashboard">
                  <span>Skip for now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kyc
