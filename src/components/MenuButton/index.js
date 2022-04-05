import React, {useEffect} from "react";
import './index.css';
import {useNavigate} from "react-router-dom";

const MenuButton = ({name}) => {
    let navigator = useNavigate();

    useEffect(() => {
        document.getElementById(name)
            .onclick = () => navigator(name);
    }, []);

    return (
        <div className="header-menu-button">
            <a><h3 id={name}>{name}</h3></a>
        </div>
    );
};

export default MenuButton;
