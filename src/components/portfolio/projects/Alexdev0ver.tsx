import * as React from 'react';
import { useState } from 'react';
import * as CSS from 'csstype';

const Alexdev0ver: React.FC = () => {
    const [codeside, resizeCodeside] = useState(false);
    const [infoside, resizeInfoside] = useState(false);

    const toggleCodeside = () => {
        if (infoside) {
            resizeInfoside(false);
            resizeCodeside(!codeside);
        } else {
            resizeCodeside(!codeside)
        }
    }

    const toggleInfoside = () => {
        if (codeside) {
            resizeCodeside(false);
            resizeInfoside(!infoside);
        } else {
            resizeInfoside(!infoside);
        }
    }


    const fadeout : CSS.Properties = {
        opacity: 0,
        transition: "1.5s",
        position: "absolute",
        pointerEvents: "none",
    }

    const fadein : CSS.Properties = {
        opacity: 1,
        transition: "1s"
    }


    return (
        <div className="d-flex align-items-center overflow-hidden" style={{color:"#b5b5b5", fontSize:"2.3vh", height:"100vh", background:"no-repeat url(/img/alexdev0ver-background.jpg)", backgroundSize: "cover", backgroundColor: codeside ? "#faff00" : "#198754", backgroundBlendMode: codeside ? "darken" : infoside ? "hard-light" : "normal"}}>
            <div className={`${codeside ? "w-75" : infoside ? "w-25" : "w-50"} h-100 d-flex flex-column align-items-center justify-content-center px-4 border-end`}
                 onClick={() => toggleCodeside()}
                 style={{ transition:"1s"}}>
                    <h5 style={codeside ? fadeout : fadein}>
                        <a style={{textDecoration: "none", color:"#0dcaf0", fontSize:"3vh"}} href="https://github.com/AlexDev0ver/alexdev0ver.github.io">Github</a>
                    </h5>

                    <div style={codeside || infoside ? fadeout : fadein}>
                        <span>Single page application based on React+Typescript</span>
                    </div>

                    <div className="d-flex flex-column align-items-center" style={!codeside ? fadeout : fadein }>
                        <div className="d-flex align-items-center flex-column">
                            <a style={{textDecoration: "none", color:"#0dcaf0", fontSize:"3vh"}} href="https://github.com/AlexDev0ver/alexdev0ver.github.io">
                                <span>Frontend:</span>
                            </a>
                            <ul className="d-flex my-4 align-items-baseline flex-wrap" style={{listStyle:"none"}}>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/html-icon.svg" alt="HTML" /></li>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/css-icon.svg" alt="CSS" /></li>
                                <li className="px-2"><img style={{width:"12vh", height:"12vh"}} src="/img/react-icon.svg" alt="ReactJS" /></li>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/javascript-icon.svg" alt="Javascript" /></li>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/typescript-icon.svg" alt="Typescript" /></li>
                            </ul>
                        </div>

                        <div className="d-flex align-items-center flex-column">
                            <a style={{textDecoration: "none" , color:"#0dcaf0", fontSize:"3vh"}} href="https://github.com/AlexDev0ver/alexdev0verAPI">
                                <span>Backend:</span>
                            </a>
                            <ul className="d-flex my-4 align-items-baseline flex-wrap" style={{listStyle:"none"}}>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/nodejs-icon.svg" alt="NodeJS" /></li>
                                <li className="px-2"><img style={{width:"12vh", height:"12vh"}} src="/img/mongodb.svg" alt="MongoDB" /></li>
                                <li className="px-2"><img style={{width:"10vh", height:"10vh"}} src="/img/heroku-icon.svg" alt="Heroku" /></li>
                            </ul>
                        </div>
                    </div>
                 </div>

            <div className={`${infoside ? "w-75" : codeside ? "w-25" : "w-50"} h-100 d-flex flex-column align-items-center justify-content-center px-4`}
                 onClick={() => toggleInfoside()}
                 style={{ transition:"1s" }}>
                     <h5 className="my-2" style={{color:"#0dcaf0", fontSize:"3vh"}}>alexdev0ver.io</h5>
                     <div style={codeside || infoside ? fadeout : fadein}>
                         <span>Here suppose to be a link on live mode, but you already here.</span>
                     </div>

                     <div className="d-flex flex-column align-items-center" style={ infoside ? fadein : fadeout}>
                         <span>I've tried to create this project following the next purposes:</span>
                         <ul className="d-flex flex-column align-items-baseline my-2" style={{listStyle:"none"}}>
                             <li className="my-1 w-100">Provide answers to popular questions that are often asked in interviews.</li>
                             <li className="my-1 w-100">Take feedback from people, who want to share it. For more convenience, I made it anonymous. Take a shot!</li>
                             <li className="my-1 w-100">Try new technologies. But about that on the other side section.</li>
                             <li className="my-1 w-100">Create a different design for each page.</li>
                             <li className="my-1 w-100">To introduce you and create a complete impression about me then just show code.</li>
                             <li className="my-1 w-100">Combine it all in one source, make it extensible and easily modifiable.</li>
                         </ul>
                     </div>

                 </div>
        </div>
    )
}

export default Alexdev0ver;
