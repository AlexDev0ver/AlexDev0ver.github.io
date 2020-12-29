import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../integrations/api/ApiClient';
import Sidebar from '../../utilities/sidebar/Sidebar';
import Question from '../../types/Question';

import './About.css';

interface AboutState {
    questions: Question[]
}

interface AboutProps {}

export default class About extends Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);

        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(): void {
        api.getQuestions().then(res => this.setState({questions: res}))
    }

    render() {
        if (!this.state.questions.length) {
            return (
                <div>data processing...</div>
            )
        }

        return (
            <div className="container-fluid overflow-hidden d-flex flex-column justify-content-center aboutContainer">
                <div className="vertical-line d-none d-sm-block"></div>
                <h1 className="text-center mb-4 pt-5" style={{ borderTop:`${window.innerWidth > 680 ? "1px solid #fff" : "none"}`, marginLeft:"-15px"}}>About Me</h1>
                <div className="rounded overflow-auto container-fluid col-12 col-md-8 col-xl-5 col-xxl-4" id="scrollbarStyle" style={{maxHeight:"70vh", backgroundColor:"#fff"}}>
                    {this.state.questions.map(el =>
                        <div className="mx-1 my-3 row" key={`${Math.random()*100}-questions`}>
                            <h5 className="fst-italic fw-bolder text-md-end" style={{borderBottom:"1px solid #20c997", color: "#382929"}}>{el.question}</h5>
                            <div>{el.answer}</div>
                        </div>
                    )}
                    <div className="mx-1 my-3 row">
                        <h5 className="fst-italic text-md-end">Send you're question</h5>
                        <textarea placeholder="How are you, Alex?"/>
                        <button>Send</button>
                    </div>
                </div>
                <Sidebar/>
                <Link to="/" className="d-md-none d-xs-flex mt-4 justify-content-center align-self-center" style={{textDecoration:"none", color:"#2c3033"}}>Back</Link>
            </div>
        )
    }
}
