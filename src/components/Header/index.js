import React from "react";
import "./index.css";
import MenuButton from "../MenuButton";

const Header = () => {
    return (
        <div className="header page">
            <div className="header-title">
                <h2>Garden Lab</h2>
            </div>
            <MenuButton name="Blog"/>
            <MenuButton name="About"/>
            <MenuButton name="Home"/>
        </div>
    )
}

export default Header;
