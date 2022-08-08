import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";

const lawyers = [
    { 
        name: 'John Doe', 
        rating: 4.2,
    },
    { 
        name: 'Jane Doe', 
        rating: 4.5,
    },
    { 
        name: 'John Doe', 
        rating: 4.5,
    },
    { 
        name: 'John Doe', 
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
                { lawyers.map(lawyer => (
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="text-center">
                                <img
                                    src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                                    className="rounded-circle avatar-xl mb-3"
                                    alt=""
                                />
                                <h4 className="mb-0">{lawyer.name}</h4>
                                {/* <p className="mb-0 fs-6 text-muted">
                                    Engineering Architect
                                </p> */}
                                </div>
                                <div className="d-flex justify-content-between border-bottom border-top py-2 mt-3">
                                <span>Rating</span>
                                <span className="text-warning">
                                    { lawyer.rating } <i className="mdi mdi-star" />
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
