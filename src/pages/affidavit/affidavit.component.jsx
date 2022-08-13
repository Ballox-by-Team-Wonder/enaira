import { useLocation, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/navigation/sidebar.component";
import { Select } from "../../components/select/select.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import { useSelect } from "../../hooks/use-select.hook";
import { useState } from 'react'
import { Verification } from "../../components/verification/verification.component";

const affidavitOptions = [
    { name: 'Correction of Name', value: 'name' },
    { name: 'Correction of Date of Birth', value: 'Date Of Birth' },
]

function Affidavit() {
    const navigate = useNavigate()

    

    const [affidavitType, handleAffidavitChange] = useSelect(affidavitOptions[0])

    const [formData, setFormData] = useState({ incorrect: '', correct: '' })


    const handleChange = (e) => {
        setFormData(prevState => {
          return { ...prevState, [e.target.name]: e.target.value }
        })
      }


    const handleSubmit = (e) => {
        e.preventDefault()

        navigate(`/payout?affidavit=${affidavitType}&incorrect=${formData.incorrect}&correct=${formData.correct}&amount=1500`)
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
              {/* User profile */}

              <Sidebar />
            </div>

            <div className="col-lg-9 col-md-8 col-12">
              {/* Card */}
              <div className="card">
                {/* Card header */}
                <div className="card-header">
                  <h3 className="mb-2 display-5 fw-bold">Request an affidavit</h3>
                  <p className="mb-0">{/* You have full control to manage your own account setting. */}</p>
                </div>
                {/* Card body */}
                <div className="card-body">
                  {/* <div className="d-lg-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center mb-4 mb-lg-0">
                      <img
                        src="../assets/images/avatar/avatar-3.jpg"
                        id="img-uploaded"
                        className="avatar-xl rounded-circle"
                        alt=""
                      />
                      <div className="ms-3">
                        <h4 className="mb-0">Your avatar</h4>
                        <p className="mb-0">
                          PNG or JPG no bigger than 800px wide and tall.
                        </p>
                      </div>
                    </div>
                    <div>
                      <a href="#" className="btn btn-outline-white btn-sm">
                        Update
                      </a>
                      <a href="#" className="btn btn-outline-danger btn-sm">
                        Delete
                      </a>
                    </div>
                  </div> */}
                  {/* <hr className="my-5" /> */}
                  <div>
                    <h4 className="mb-0">Select affidavit type</h4>
                    <p className="mb-4">{/* You are required to input the wrong details you wish to correct. */}</p>

                    <label className="form-label" htmlFor="">
                      Affidavit Type
                    </label>
                    <Select value={affidavitType} handleChange={handleAffidavitChange} list={affidavitOptions} />

                    {/* Form */}
                    <form className="row" onSubmit={handleSubmit}>
                      {/* First name */}
                      <div className="mb-3 col-12 col-md-12">
                        <label className="form-label" htmlFor="incorrect">
                          Incorrect {affidavitType}
                        </label>
                        <input
                          value={formData.incorrect}
                          onChange={handleChange}
                          type="text"
                          id="incorrect"
                          name="incorrect"
                          className="form-control"
                          placeholder={`Incorrect ${affidavitType}`}
                          required
                        />
                      </div>

                      <div className="mb-3 col-12 col-md-12">
                        <label className="form-label" htmlFor="correct">
                          Correct {affidavitType}
                        </label>
                        <input value={formData.correct} onChange={handleChange} type="text" id="correct" name="correct" className="form-control" placeholder={`correct ${affidavitType}`} required />
                      </div>

                      <Verification />

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
          </div>
        </div>
      </div>
    </>
  );
}

export default Affidavit;
