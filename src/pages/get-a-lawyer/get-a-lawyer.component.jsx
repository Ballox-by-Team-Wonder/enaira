import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";

const lawyers = [
    { 
        name: 'Mmerichukwu Anosike', 
        rating: 4.2,
    },
    { 
        name: 'Glory Amadife', 
        rating: 4.5,
    },
    { 
        name: 'Jame Okoye', 
        rating: 4.6,
    },
    { 
        name: 'Michael Okonkwo', 
        rating: 4.2,
    },
]

function GetALawyer() {
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
              <h1>Choose a lawyer</h1>
              <hr style={{ color: "gray", marginBottom: "50px" }} />

              <div className="row">
                {lawyers.map((lawyer) => (
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="text-center">
                          <img src="https://ballox-by-team-wonder.github.io/iSwear-main/assets/branding/team%20(3).jpg" className="rounded-circle avatar-xl mb-3" alt="" />
                          <h4 className="mb-0">{lawyer.name}</h4>
                          {/* <p className="mb-0 fs-6 text-muted">
                                    Engineering Architect
                                </p> */}
                        </div>
                        <div className="d-flex justify-content-between border-bottom border-top py-2 mt-3">
                          <span>Rating</span>
                          <span className="text-warning">
                            {lawyer.rating} <i className="mdi mdi-star" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetALawyer;
