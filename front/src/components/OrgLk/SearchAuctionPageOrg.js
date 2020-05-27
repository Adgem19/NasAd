import React from "react";
import SearchAuction from "../CabOrganization/SearchAuction";
import "../../css/firstOrgSearch.css";
export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Поиск аукционов</h3>
        <p>22 Мая Пятница</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome!</h3>
          <p>Здесь Вы можете найти аукцион</p>
        </div>
      </div>

      <div className="info-block-org">
        <div className="first-org-search">
          <SearchAuction />
          <div className="search-img">
            <img src="/imgBloggerLk/undraw_file_searching_duff.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
