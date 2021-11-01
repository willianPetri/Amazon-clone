import axios from 'axios';

const instace = axios.create({
  baseURL: 'http://localhost:5001/challenge-9415e/us-central1/api'
});

export default instace;