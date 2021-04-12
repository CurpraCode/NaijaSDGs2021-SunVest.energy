import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Notify } from "../components/assets/notify.svg";
import { ReactComponent as Mail } from "../components/assets/mail.svg";
import {ReactComponent as Sit} from "../components/assets/sitting 8.svg";
import {ReactComponent as Card} from "../components/assets/card.svg";
import {ReactComponent as Card2} from "../components/assets/card2.svg";
import {ReactComponent as Card3} from "../components/assets/card3.svg";


function Dashboard() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid " id="navbard">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div class="d-flex align-items-start">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  DashBoard
                </button>
                <Link className="navbar-brand" to="/market">
                  <button class="nav-link" type="button">
                    MarketPlace
                  </button>
                </Link>
                <Link className="navbar-brand" to="/">
                  <button class="nav-link" type="button">
                   Logout
                  </button>
                </Link>
              </div>
           
            </div>
          </div>
        </div>
      </nav>
      <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="wel">
                    <input type="text" placeholder="search" />
                    <Notify />
                    <Mail />
                  </div>
                  <div className="welll">
                    <div>
                      <p>Welcome Temilade</p>
                      <p>Good morning, hope Your feeling good</p>
                    </div>
                    <Sit/>
                  </div>
                  <div>
                    <p className="p">My Investment</p>
                    <div className="card-sep">
                      <Card/>
                      <Card2/>
                      <Card3/>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  ...
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  ...
                </div>
              </div>
    </div>
  );
}

export default Dashboard;
