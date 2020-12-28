import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../../integrations/api/ApiClient';
import Question from '../../types/Question';

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
            <div className="container-fluid overflow-hidden d-flex flex-column justify-content-center" style={{height:"100vh", background: "linear-gradient(120deg, #32E14C 50%, #fff 60%"}}>
                <div className="d-none d-sm-flex flex-column justify-content-evenly"
                     style={{backgroundColor:"#000000", opacity:"0.6", position:"absolute", top:"0", left:"0", width:"300px", height:"100vh"}}>
                    <Link to="/">Back</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/hobbies">Hobbies</Link>
                </div>
                <h1 className="text-center mb-4 mt-3">About Me</h1>
                <div className="rounded overflow-auto container-fluid col-12 col-md-8 col-xl-5" style={{maxHeight:"70vh", backgroundColor:"#fff"}}>
                    {this.state.questions.map(el =>
                        <div className="mx-1 my-3 row" key={`${Math.random()*100}-questions`}>
                            <h5 className="fst-italic text-md-end" style={{borderBottom:"1px solid #20c997"}}>{el.question}</h5>
                            <div>{el.answer}</div>
                        </div>
                    )}
                    <div className="mx-1 my-3 row">
                        <h5 className="fst-italic text-md-end">Send you're question</h5>
                        <textarea/>
                        <button>Send</button>
                    </div>
                </div>
                <Link to="/" style={{textDecoration:"none", color:"#2c3033"}} className="d-flex mt-4 justify-content-center">Back</Link>
            </div>
        )
    }
}
