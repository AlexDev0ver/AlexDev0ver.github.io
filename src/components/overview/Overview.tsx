import React, { Component } from 'react';
import { Link } from "react-router-dom";

interface OverviewProps {}

interface OverviewState {
    aboutHover: boolean,
    portfolioHover: boolean,
    hobbiesHover: boolean
}

export default class Overview extends Component<OverviewProps, OverviewState> {
    state: OverviewState = {
        aboutHover: false,
        portfolioHover: false,
        hobbiesHover: false
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-column align-items-center" style={{marginTop:`20vh`}}>
                    <div className={`d-flex align-items-center ${this.state.hobbiesHover ? "border-top rounded-circle border-info" : ""}`}
                         style={this.state.hobbiesHover ? {marginTop:"-1px", zIndex:1080}: {zIndex:1080} }>
                        <img style={{minWidth:"20vh", minHeight:"20vh"}} src="img/avatar.png" alt="avatar" />
                    </div>
                    <div className="d-flex flex-column align-items-center border-bottom w-100" style={{zIndex:1080}}>
                        <h1 className={`${this.state.aboutHover ? "text-success" : "text-light"}`} style={{fontSize:"5vh"}}>Alex Dan</h1>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{zIndex:1080}}>
                        <h1 className={`${this.state.portfolioHover ? "text-warning" : "text-light"} text-center`} style={{fontSize:"5vh"}}>JavaScript developer</h1>
                    </div>
                    <div className="text-dark" style={{zIndex:1080}}>
                        <ul className="d-flex justify-content-center p-3" style={{listStyle:"none", cursor:"pointer", fontSize:"2vh"}}>
                            <li onMouseEnter={() => this.setState({aboutHover: true})}
                                onMouseLeave={() => this.setState({aboutHover: false})}
                                className={`${this.state.aboutHover ? "bg-success" : ""} px-2`}>
                                    <Link to="/about" className="text-decoration-none text-dark" >About Me</Link>
                                </li>
                            <li onMouseEnter={() => this.setState({portfolioHover: true})}
                                onMouseLeave={() => this.setState({portfolioHover: false})}
                                className={`${this.state.portfolioHover ? "bg-warning" : ""} px-2`}>
                                    <Link to="/portfolio" className="text-decoration-none text-dark" >Portfolio</Link>
                                </li>
                            <li onMouseEnter={() => this.setState({hobbiesHover: true}) }
                                onMouseLeave={() => this.setState({hobbiesHover: false})}
                                className={`${this.state.hobbiesHover ? "bg-info" : ""} px-2`}>
                                    <Link to="/hobbies" className="text-decoration-none text-dark" >Hobbies</Link>
                                </li>
                        </ul>
                    </div>
                    <video loop muted autoPlay style={{position:"fixed", left:0, bottom:`${window.innerHeight < 650 ? "-30%" : "0"}`, minHeight:`100%`, minWidth:`100%`, zIndex:1030}}>
                        <source src="video/background.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}
