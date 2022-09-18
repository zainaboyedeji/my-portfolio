function AppTabNavItem ({ id, title, activeTab, setActiveTab })  {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     { title }
   </li>
 );
};
export default AppTabNavItem;