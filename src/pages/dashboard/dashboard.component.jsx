import { Sidebar } from "../../components/navigation/sidebar.component";
import { Chart } from "../../components/chart/chart.component";
import { UserInfo } from "../../components/user-info/user-info.component";

import { chartData } from "../../constants/chart-data.constant";
import { SimpleAccordion } from "../../components/accordion/accordion.component";
import { Grid } from "@mui/material";

function Dashboard() {  
    
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
              <h1>Let's get you started</h1>
              <hr style={{ color: 'gray', marginBottom: '50px' }} />
              
              <Grid container spacing={3}>
                <SimpleAccordion 
                  summary="Request affidavit"
                  description="Request an online affidavit."
                  link="/affidavit"
                />
                <SimpleAccordion 
                  summary="Get a lawyer"
                  description=""
                  link="/get-a-lawyer"
                />
                <SimpleAccordion 
                  summary="Make a request"
                  description=""
                  link="/make-a-request"
                />

                <SimpleAccordion 
                  summary="Go to court"
                  description=""
                  link="#"
                />
              </Grid>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
