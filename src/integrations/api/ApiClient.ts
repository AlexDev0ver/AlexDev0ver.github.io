import axios from 'axios';
import type Question from '../../types/Question';

class ApiClient {
    constructor() {
        axios.defaults.baseURL = "https://alexdev0ver-api.herokuapp.com";
    }

    getQuestions(): Promise<Array<Question>> {
        return axios.get(`/questions`).then(res => res.data);
    }

    askQuestion(question: string): Promise<string> {
        return axios.post(`/ask`, question).then(res => res.data);
    }
}

const api = new ApiClient();

export default api;
