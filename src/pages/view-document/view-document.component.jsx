import { Sidebar } from "../../components/navigation/sidebar.component";
import { UserInfo } from "../../components/user-info/user-info.component";

import { AffidavitDoc } from "../../components/documents/affidavit-doc.component";
import './view-document.style.css'

function ViewDocument() {
    
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

                <div className="view-document">
                    <AffidavitDoc />
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewDocument;
