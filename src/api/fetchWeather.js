import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.API_PASS;

const fetchWeather = async (query) => {
    const response = await axios.get(URL);
}