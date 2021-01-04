import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../integrations/api/ApiClient';
import Sidebar from '../../utilities/sidebar/Sidebar';
import Question from '../../types/Question';

import './About.css';

interface AboutState {
    questions: Question[],
    ask: string
}

interface AboutProps {}

export default class About extends Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props);

        this.state = {
            questions: [],
            ask: ""
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(): void {
        api.getQuestions().then(res => this.setState({questions: res}))
    }

    sendData(): void {
        if (this.state.ask === "") {
            alert("You should type your question first");
            return
        }
        api.askQuestion(this.state.ask).then(res => alert(res));
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
                <div className="horizontal-line d-none d-sm-block"></div>
                <h1 className="text-center mb-4 pt-5" style={{ marginLeft:"-15px", color: "#2ca93e", fontSize:"6vh"}}>About Me</h1>
                <div className="scrollbarStyle questionContainer overflow-auto container-fluid col-12 col-md-8 col-xl-5 col-xxl-5">
                    {this.state.questions.map(el =>
                        <div className="mx-1 my-3 row" key={`${Math.random()*100}-questions`} style={{color:"#463f3e"}}>
                            <h5 className="fst-italic text-md-end" style={{borderBottom:"1px solid #32E14C", fontSize:"2.8vh"}}>{el.question}</h5>
                            <div style={{fontSize:"2.5vh"}}>{el.answer}</div>
                        </div>
                    )}
                    <div className="mx-1 my-3 row">
                        <h5 style={{fontSize:"2.5vh"}} className="fst-italic text-md-end">Send you're question</h5>
                        <textarea onChange={(e) => this.setState({ ask: e.target.value })} className="textareaStyle" style={{fontSize:"2.8vh"}} placeholder="How are you, Alex?"/>
                        <button onClick={() => this.sendData()} className="btn btn-outline-dark w-25 mx-auto my-4">Send</button>
                    </div>
                </div>
                <Sidebar/>
                <Link to="/" className="d-md-none d-xs-flex mt-4 justify-content-center align-self-center" style={{textDecoration:"none", color:"#2c3033"}}>Back</Link>
            </div>
        )
    }
}
