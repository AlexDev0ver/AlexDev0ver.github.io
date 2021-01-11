import * as React from 'react';

import Alexdev0ver from './projects/Alexdev0ver';
import Sidebar from '../../utilities/sidebar/Sidebar';

const Portfolio: React.FC = () => {

    return (
        <div>
            <Alexdev0ver />
            <Sidebar component={"portfolio"} />
        </div>
    )
}

export default Portfolio;
