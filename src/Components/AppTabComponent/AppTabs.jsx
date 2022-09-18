import React, { useState } from "react";
import AppTabNavItem from "../AppTabNavItem/AppTabNavItem";
import AppTabContent from "../AppTabContents/AppTabContents";
import AppDropdown from "../AppDropdown/AppDropdown";
 
function AppTabs  () {
  const [activeDropdown, setActiveDropdown] = useState("dropdown1");
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <AppTabNavItem title="My Skills" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <AppTabNavItem title="Experience" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <AppTabNavItem title="Education" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <AppTabContent id="tab1" activeTab={activeTab}>
          <AppDropdown title="Front-End Mobile" paragraph="React Native" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
          <AppDropdown title="Front-End Web" paragraph="Javascript" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
          <AppDropdown title="Back-End" paragraph="Javascript/Node/Express" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
          <AppDropdown title="Database" paragraph="SQL" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
          <AppDropdown title="ML/DS" paragraph="Python" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
          <AppDropdown title="Version Control" paragraph="Git" id="dropdown1" activeDropdown={activeDropdown} setActiveDropdown={setActiveDropdown}/>
        </AppTabContent>
        <AppTabContent id="tab2" activeTab={activeTab}>
          <p>Tab 2 works!</p>
        </AppTabContent>
        <AppTabContent id="tab3" activeTab={activeTab}>
          <p>Tab 3 works!</p>
        </AppTabContent>
      </div>
    </div>
  );
};
 
export default AppTabs;