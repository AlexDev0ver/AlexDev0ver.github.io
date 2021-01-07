import * as React from 'react';
import { useState } from 'react';

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

    const infoDefault = () => {

        return (
            <div>
                <span>Here suppose to be a link on live mode, but you already here.</span>
            </div>
        )
    }

    const infoOpen = () => {
        return (
            <div>
                <span>I've tried to create this project following the next purposes:</span>
                <ul>
                    <li>Provide answers to popular questions that are often asked in interviews.</li>
                    <li>Take feedback from people, who want to share it. For more convenience, I made it anonymous. Take a shot!</li>
                    <li>Try new technologies. But about that on the other side section.</li>
                    <li>Create a different design for each page.</li>
                    <li>To introduce you and create a complete impression about me then just show code.</li>
                    <li>Combine it all in one source, make it extensible and easily modifiable.</li>
                </ul>
            </div>
        )
    }

    const codeDefault = () => {
        return (
            <div>
                <span>Single page application based on React+Typescript</span>
            </div>
        )
    }

    const codeOpen = () => {
        return (
            <div>
                <span>Frontend:</span>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                </ul>
                <span><a href="https://github.com/AlexDev0ver/alexdev0verAPI">Backend:</a></span>
                <ul>
                    <li>NodeJS</li>
                    <li>Epxress</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                </ul>
            </div>
        )
    }


    return (
        <div className="d-flex align-items-center" style={{height:"100vh"}}>
            <div className={`${codeside ? "w-75" : infoside ? "w-25" : "w-50"} h-100 d-flex flex-column align-items-center justify-content-center px-4`}
                 onClick={() => toggleCodeside()}
                 style={{ transition:"0.8s"}}>
                    <a href="https://github.com/AlexDev0ver/alexdev0ver.github.io"><h5>Github</h5></a>
                    {!codeside && !infoside && codeDefault()}
                    {codeside && codeOpen()}
                 </div>
            <div className={`${infoside ? "w-75" : codeside ? "w-25" : "w-50"} h-100 d-flex flex-column align-items-center justify-content-center px-4`}
                 onClick={() => toggleInfoside()}
                 style={{ transition:"0.8s"}}>
                     <h5>alexdev0ver.io</h5>
                     {!codeside && !infoside && infoDefault()}
                     {infoside && infoOpen()}

                 </div>
        </div>
    )
}

export default Alexdev0ver;
