import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { selectAuthUser } from "../../redux/auth/auth.selectors"

export function UserInfo() {
    const { userData } = useSelector(selectAuthUser)
  
    const firstName = userData?.firstName || '__'
    const lastName = userData?.lastName || '__'

    return (
        <>
            <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              {/* Bg */}
              <div
                className="pt-16 rounded-top-md"
                style={{
                  background:
                    "url(../assets/images/background/profile-bg.jpg) no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <div className="d-flex align-items-end justify-content-between bg-white px-4 pt-2 pb-4 rounded-none rounded-bottom-md shadow-sm">
                <div className="d-flex align-items-center">
                  <div className="me-2 position-relative d-flex justify-content-end align-items-end mt-n5">
                    <Avatar 
                        sx={{ 
                            height: 70, 
                            width: 70,
                            fontSize: '30px',
                            paddingTop: '7px',
                            bgcolor: '#18113c'
                        }}
                    >
                        { userData?._id && `${firstName[0]}.${lastName[0]}` }
                    </Avatar>
                    {/* <img
                      src="../assets/images/avatar/avatar-1.jpg"
                      className="avatar-xl rounded-circle border border-4 border-white position-relative"
                      alt=""
                    /> */}
                    {/* <a
                      href="#"
                      className="position-absolute top-0 end-0"
                      data-bs-toggle="tooltip"
                      data-placement="top"
                      title="Verified"
                    >
                      <img
                        src="https://codescandy.com/geeks-bootstrap-5/assets/images/svg/checked-mark.svg"
                        alt=""
                        height={30}
                        width={30}
                      />
                    </a> */}
                  </div>
                  <div className="lh-1">
                    <h2 className="mb-0">{ `${firstName} ${lastName}` }</h2>
                    {/* <p className="mb-0 d-block">@Jennywilson</p> */}
                  </div>
                </div>
                <div>
                  <a
                    href="add-course.html"
                    className="btn btn-primary btn-sm d-none d-md-block"
                  >
                    Create New Course
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}