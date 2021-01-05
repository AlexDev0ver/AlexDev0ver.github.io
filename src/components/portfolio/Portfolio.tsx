import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../../utilities/sidebar/Sidebar';

interface State {
    field: boolean
};

interface Props {

}

export default class Portfolio extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            field: false
        }
    }


    render() {
        return (
            <div>
                <div className="container-fluid d-flex">
                </div>
                <Sidebar component="portfolio" />
            </div>
        )
    }
}
