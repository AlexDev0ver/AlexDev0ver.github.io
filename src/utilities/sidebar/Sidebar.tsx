import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as CSS from 'csstype';

interface props {
    component: string
}

const Sidebar: React.FC<props> = ({component = ""}) => {

    const [sidebarToggle, changeSidebarToggle] = useState(false);
    const [hoverBack, hoveredBack] = useState(false);
    const [hoverAbout, hoveredAbout] = useState(false);
    const [hoverPortfolio, hoveredPortfolio] = useState(false);
    const [hoverHobbies, hoveredHobbies] = useState(false);

    const sidebarStyle : CSS.Properties = {
        backgroundColor:"#000000",
        opacity:"0.6",
        position:"absolute",
        top:"0",
        left:"0",
        width:`${sidebarToggle ? "200px" : "50px"}`,
        height:"100vh",
        transition:"0.6s"
    }

    const buttonStyle : CSS.Properties = {
        backgroundColor:"#000",
        opacity:"0.6",
        border:"none",
        outline:"none"
    }


    return (
        <div id="sidebar" className="d-none d-sm-flex flex-column justify-content-evenly align-items-center"
             style={sidebarStyle}>
             <button
                className="position-absolute top-0 left-0 w-100 btn btn-dark text-center"
                style={buttonStyle}
                onClick={(e) => {e.currentTarget.blur(); changeSidebarToggle(!sidebarToggle)}}>&#9776;</button>
            <Link className={`${!sidebarToggle ? "d-none" : ""} w-100 text-center text-light fw-bolder`}
                  to="/"
                  style={{textDecoration:"none", borderBottom:`${hoverBack ? "2px solid #fff" : "none"}`, marginBottom:`${hoverBack ? "-2px" : "0"}`}}
                  onMouseEnter={() => hoveredBack(true)}
                  onMouseLeave={() => hoveredBack(false)}>Back</Link>

            <Link className={`${!sidebarToggle ? "d-none" : ""} w-100 text-center text-light fw-bolder ${component === "about" ? "d-none" : ""}`}
                to="/about"
                style={{textDecoration:"none", borderBottom:`${hoverAbout ? "2px solid #fff" : "none"}`, marginBottom:`${hoverAbout? "-2px" : "0"}`}}
                onMouseEnter={() => hoveredAbout(true)}
                onMouseLeave={() => hoveredAbout(false)}>About Me</Link>

            <Link className={`${!sidebarToggle ? "d-none" : ""} w-100 text-center text-light fw-bolder ${component === "portfolio" ? "d-none" : ""}`}
                  to="/portfolio"
                  style={{textDecoration:"none", borderBottom:`${hoverPortfolio ? "2px solid #fff" : "none"}`, marginBottom:`${hoverPortfolio ? "-2px" : "0"}`}}
                  onMouseEnter={() => hoveredPortfolio(true)}
                  onMouseLeave={() => hoveredPortfolio(false)}>Portfolio</Link>

            <Link className={`${!sidebarToggle ? "d-none" : ""} w-100 text-center text-light fw-bolder ${component === "hobbies" ? "d-none" : ""}`}
                  to="/hobbies"
                  style={{textDecoration:"none", borderBottom:`${hoverHobbies ? "2px solid #fff" : "none"}`, marginBottom:`${hoverHobbies ? "-2px" : "0"}`}}
                  onMouseEnter={() => hoveredHobbies(true)}
                  onMouseLeave={() => hoveredHobbies(false)}>Hobbies</Link>
        </div>
    )
}

export default Sidebar;
