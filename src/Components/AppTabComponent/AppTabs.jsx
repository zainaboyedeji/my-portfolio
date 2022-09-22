import React, { useState , useRef} from "react";
import AppTabNavItem from "../AppTabNavItem/AppTabNavItem";
import AppTabContent from "../AppTabContents/AppTabContents";
import AppDropdown from "../AppDropdown/AppDropdown";
 
function AppTabs  () {
const [openSlide, setopenSlide] = useState("");
const catMenu = useRef(null)
  const [activeDropdown, setActiveDropdown] = useState("dropdown1");
  const [activeTab, setActiveTab] = useState("tab1");
  const closeOpenMenus = ()=>{
    if(catMenu.current && openSlide){
      setopenSlide(false)
    }
}
 
  return (
    <div className="Tabs">
      <ul className="nav">
        <AppTabNavItem title="My Skills" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <AppTabNavItem title="Experience" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <AppTabNavItem title="Education" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <AppTabContent id="tab1" activeTab={activeTab}>
          <div  onClick={closeOpenMenus}>Frontend</div>
          <div ref={catMenu}>na here</div>

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