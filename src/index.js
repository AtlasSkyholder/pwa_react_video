import React from "react";
import ReactDOM from "react-dom";

const dotenv = require('dotenv');
import App from './App';

dotenv.config({path: "./config.env" });

ReactDOM.render(<App />, document.getElementById('root'));