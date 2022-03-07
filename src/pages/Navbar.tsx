import { faBars, faCaretDown, faFirstAid, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [bClick, setClick] = useState(false);
    const [bDropdown, setDropdown] = useState(false);
    const [size, setSize] = useState(0);

    const handleClick = () => setClick(!bClick);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        setDropdown(!(window.innerWidth < 960));
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (size < 960 && bClick) {
            setClick(false);
        }
    }, [size]);

    return (
        <div id="Navbar">
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    NavBar
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {bClick ? (
                        <i className="arrow">
                            <FontAwesomeIcon icon={faTimes} />
                        </i>
                    ) : (
                        <i className="arrow">
                            <FontAwesomeIcon icon={faBars} />
                        </i>
                    )}
                </div>
                <ul className={bClick ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                            <i>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </i>
                        </Link>
                        {bDropdown && <Dropdown />}
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    );
};

export default Navbar;
