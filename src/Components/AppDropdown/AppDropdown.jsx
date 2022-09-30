import { useState } from "react"
import arrowdown from "../../Image/down.png"

function AppDropdown({ id, title, paragraph, activeDropdown, setDropdown }) {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const dropdownInfo = [
        {
            id: "1",
            title: "tutle1",
            description: "descriotion 1"
        },
        {
            id: "2",
            title: "tutle2",
            description: "descriotion 2"
        },
    ]

    const handleClick = (id) => {
        setOpen(!open)
        setSelectedIndex(id)
    };

    const currentDescription = () => {
        const find = dropdownInfo.find((obj, index) => {
          return obj.id === selectedIndex
        });
        return find?.description
      }

    return (
        <div>
            {dropdownInfo.map((info) =>
                <div key={info.id}>
                    <div className="d-flex">
                        <h2>{info.title}</h2>
                        <p>{info.title}</p>
                        <img src={arrowdown} alt="arrowdown" style={{ width: "1rem", height: "1rem" }} onClick={() => handleClick(info.id)} />
                    </div>
                   
                </div>
            )}

             <div>
                        {currentDescription()}

                    </div>
        </div>
    );
};
export default AppDropdown;