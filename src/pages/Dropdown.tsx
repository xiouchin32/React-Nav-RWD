import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Dropdown = () => {
    const [bClick, setClick] = useState(false);
    const handleClick = () => setClick(!bClick);

    return (
        <>
            <ul onClick={handleClick} className={bClick ? "dropdown-menu click" : "dropdown-menu"}>
                {MenuItems.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Dropdown;
