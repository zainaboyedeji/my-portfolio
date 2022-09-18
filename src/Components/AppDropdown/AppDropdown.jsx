import arrowdown from "../../Image/down.png"

function AppDropdown({ id, title, paragraph, activeDropdown, setDropdown }) {

    const handleClick = () => {
        setDropdown(id);
    };

    return (
       <div className={activeDropdown === id ? "active" : ""}>
         <div className="d-flex">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <img src={arrowdown} alt="arrowdown" style={{ width: "1rem", height: "1rem" }} onClick={handleClick} />
        </div>
       </div>
    );
};
export default AppDropdown;