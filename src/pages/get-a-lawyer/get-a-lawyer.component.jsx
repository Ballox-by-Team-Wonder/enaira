import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";

const lawyers = [
  {
    name: "Atty. Mmerichukwu Anosike",
    dis: "A business lawyer with 10 years of experience and 50 successful cases ",
    img: "https://ballox-by-team-wonder.github.io/iSwear-main/assets/branding/team%20(3).jpg",
    rating: 4.2,
  },
  {
    name: "Esq. Glory Amadife",
    dis: "A Criminal case lawyer with 15 years of experience and 100 successful cases",
    img: "https://ballox-by-team-wonder.github.io/iSwear-main/assets/branding/team%20(4).jpg",
    rating: 4.5,
  },
  {
    name: "Esq. Jame Okoye",
    dis: "A business lawyer with 10 years of experience and 65 successful cases",
    img: "https://ballox-by-team-wonder.github.io/iSwear-main/assets/branding/team%20(1).jpg",
    rating: 4.1,
  },
  {
    name: "Atty. Michael Okonkwo",
    dis: "A Cooperate lawyer with 5 years of experience and 25 successful cases",
    img: "https://ballox-by-team-wonder.github.io/iSwear-main/assets/branding/team%20(2).jpg",
    rating: 4.2,
  },
];

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
              <h1 class="mb-2 display-5 fw-bold">Choose a lawyer</h1>
              <hr style={{ color: "gray", marginBottom: "50px" }} />

              <div className="row">
                {lawyers.map((lawyer) => (
                  <div className="col-lg-3 col-md-6 col-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="text-center">
                          <img src={lawyer.img} className="rounded-circle avatar-xl mb-3" alt="" />
                          <h4 className="mb-0">{lawyer.name}</h4>
                          <p className="mb-0 fs-6 text-muted">{lawyer.dis}</p>
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
