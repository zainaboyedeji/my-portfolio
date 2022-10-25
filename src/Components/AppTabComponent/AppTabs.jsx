import React, { useState } from "react";
import AppTabNavItem from "../AppTabNavItem/AppTabNavItem";
import AppTabContent from "../AppTabContents/AppTabContents";
import Skills from "../AppDropdown/Skills";
import Experience from "../AppDropdown/Experience";
import "./apptabs.scss"
import { t } from "i18next";

function AppTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="AppTabs">
      <ul className="nav d-flex w-100 justify-content-center">
        <AppTabNavItem title={t("my_skills")} id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
        <AppTabNavItem title={t("experience")} id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
      </ul>

      <div className="outlet mt-5">
        <AppTabContent id="tab1" activeTab={activeTab}>
          <Skills />
        </AppTabContent>
        <AppTabContent id="tab2" activeTab={activeTab}>
          <Experience/>
        </AppTabContent>
      </div>
    </div>
  );
};

export default AppTabs;