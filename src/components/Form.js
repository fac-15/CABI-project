import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Title from "./Title.js";


const Form = () => (
    <div>
        <Title />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdecG_s8efNfWrOn_sO7ylhFbZbYdBHLPYFf8abibpknEFGMg/viewform?embedded=true" width="640" height="612" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
    </div>
)

export default Form;