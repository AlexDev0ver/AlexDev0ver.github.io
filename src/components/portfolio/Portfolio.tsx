import * as React from 'react';
import { useState } from 'react';

import Sidebar from '../../utilities/sidebar/Sidebar';

interface props {
}

const Block: React.FC<props> = () => {
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

    return (
        <div className="d-flex align-items-center" style={{height:"100vh"}}>
            <div className={`${codeside ? "w-75" : infoside ? "w-25" : "w-50"} bg-primary h-100`}
                 onClick={() => toggleCodeside()}
                 style={{ transition:"0.6s"}}>
                    {!codeside && !infoside && <div>Default</div>}
                    {codeside && <div>Open</div>}
                    {infoside && <div>Hiden</div>}
                 </div>
            <div className={`${infoside ? "w-75" : codeside ? "w-25" : "w-50"} bg-secondary h-100`}
                 onClick={() => toggleInfoside()}
                 style={{ transition:"0.6s"}}>Block</div>
        </div>
    )
}

const Portfolio: React.FC = () => {
    return (
        <div>
            <Block />
            <Block />
            <Sidebar component={"portfolio"} />
        </div>
    )
}

export default Portfolio;
