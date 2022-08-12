import { Sidebar } from "../../components/navigation/sidebar.component";
import { Select } from "../../components/select/select.component";
import { UserInfo } from "../../components/user-info/user-info.component";
import { useSelect } from "../../hooks/use-select.hook";
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/auth/auth.slice'
import { selectAuthUser } from "../../redux/auth/auth.selectors";
import { Button } from "../../components/button/button.component";

const institutionOptions = [
    { name: 'Bank', value: 'bank' },
    { name: 'Church', value: 'church' },
    { name: 'NIN', value: 'nin' },
    { name: 'Embassy', value: 'embassy' },
    { name: 'Others', value: 'others' },
]

function Profile() {
    const [institution, handleInstitutionChange] = useSelect(institutionOptions[0])

    const [formData, setFormData] = useState({
        homeTown: '',
        lga: '',
        state: '',
        religion: '',
    })

    const { authStatus, userData } = useSelector(selectAuthUser)

    const dispatch = useDispatch()

    const _updateUser = (data) => dispatch(updateUser(data))

    useEffect(() => {
        if (userData?.lga) {
            setFormData({
                homeTown: userData.homeTown,
                lga: userData.lga,
                state: userData.state,
                religion: userData.religion,
            })
        }
    }, [userData])

    const handleChange = (e) => {
        setFormData(prevState => {
          return { ...prevState, [e.target.name]: e.target.value }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = { ...formData, institution }

        _updateUser(data)
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
                  <h3 className="mb-0">Edit Profile</h3>
                  <p className="mb-0">
                    {/* You have full control to manage your own account setting. */}
                  </p>
                </div>
                {/* Card body */}
                <div className="card-body">
                  
                  {/* <hr className="my-5" /> */}
                  <div>
                    {/* <h4 className="mb-0">Select affidavit type</h4> */}
                    <p className="mb-4">
                      {/* You are required to input the wrong details you wish to correct. */}
                    </p>

                    

                    {/* Form */}
                    <form className="row" onSubmit={handleSubmit}>

                      


                      {/* First name */}
                      <div className="mb-3 col-12 col-md-6">
                        <label className="form-label" htmlFor="lga">
                          Local Government Area
                        </label>
                        <input
                          value={formData.lga}
                          onChange={handleChange}
                          type="text"
                          id="lga"
                          name="lga"
                          className="form-control"
                          placeholder="local government area"
                          required
                        />
                      </div>

                      <div className="mb-3 col-12 col-md-6">
                        <label className="form-label" htmlFor="homeTown">
                            Home Town
                        </label>
                        <input
                          value={formData.homeTown}
                          onChange={handleChange}
                          type="text"
                          id="homeTown"
                          name="homeTown"
                          className="form-control"
                          placeholder="home town"
                          required
                        />
                      </div>

                      <div className="mb-3 col-12 col-md-6">
                        <label className="form-label" htmlFor="state">
                            State of origin
                        </label>
                        <input
                          value={formData.state}
                          onChange={handleChange}
                          type="text"
                          id="state"
                          name="state"
                          className="form-control"
                          placeholder="state of origin"
                          required
                        />
                      </div>

                      <div className="mb-3 col-12 col-md-6">
                        <label className="form-label" htmlFor="religion">
                            Religion
                        </label>
                        <input
                          value={formData.religion}
                          onChange={handleChange}
                          type="text"
                          id="religion"
                          name="religion"
                          className="form-control"
                          placeholder="religion"
                          required
                        />
                      </div>
                      

                      <div className="mb-3 col-12 col-md-6">
                        <label className="form-label" htmlFor="">
                            Institution related to changes made
                        </label>
                        <Select 
                            value={institution}
                            handleChange={handleInstitutionChange}
                            list={institutionOptions}
                        />
                      </div>
                                            
                      <div className="col-12">
                        {/* Button */}
                        <Button 
                            type="submit"
                            status={authStatus}
                        >
                            Submit
                        </Button>
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

export default Profile;
