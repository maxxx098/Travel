import React, { useState, useEffect } from 'react';
import './nav.css';
import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillFacebook, AiFillDingtalkCircle } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoExit } from "react-icons/io5";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Logo from '../../assets/img/header_logo.png';

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [dropdownActive, setDropdownActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);
    };

    const closeDropdown = () => {
        setDropdownActive(false);
    };

    const handleDropdownItemClick = () => {
        closeDropdown();
        closeMenu(); 
    };

    return (
        <>
            <header className={scrolled ? 'scrolled' : ''}>
                <div className="logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <ul className={`navbar ${menuActive ? "active" : ""}`}>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "nav_links_active" : "nav_links")}
                            to="/"
                            onClick={closeMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li
                        className="dropdown"
                        onMouseEnter={() => window.innerWidth > 768 && setDropdownActive(true)}
                        onMouseLeave={() => window.innerWidth > 768 && setDropdownActive(false)}
                    >
                        <div className="dropdown-header" onClick={toggleDropdown}>
                            <NavLink
                                className="nav_drop"
                            >
                                Pages
                            </NavLink>
                            {dropdownActive ? (
                                <FiChevronUp className="dropdown-arrow" />
                            ) : (
                                <FiChevronDown className="dropdown-arrow" />
                            )}
                        </div>
                        <ul className={`dropdown-menu ${dropdownActive ? "show" : ""}`}>
                            <li>
                                <NavLink
                                    to="/about_us"
                                    className="dropdown-item"
                                    onClick={handleDropdownItemClick}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about_us/mission"
                                    className="dropdown-item"
                                    onClick={handleDropdownItemClick}
                                >
                                    Services
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "nav_links_active" : "nav_links")}
                            to="/destinations"
                            onClick={closeMenu}
                        >
                            Places to See
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? "nav_links_active" : "nav_links")}
                            to="/packages"
                            onClick={closeMenu}
                        >
                            Packages
                        </NavLink>
                    </li>
                </ul>
                <div className="h-right">
                    <a href="" className="header_right_fix">Contact Us</a>
                    <a href="" className="header_right"><AiFillGithub /></a>
                    <a href="" className="header_right"><AiFillFacebook /></a>
                    <a href="" className="header_right"><AiFillDingtalkCircle /></a>
                    <div className="menu_icon" onClick={toggleMenu}>
                        {menuActive ? <IoExit size={25} /> : <HiOutlineMenuAlt1 size={25} />}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Nav;




